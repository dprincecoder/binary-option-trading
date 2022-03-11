import {
	handleUserProfile,
	getCurrentUser,
	auth,
	googleAuthProvider,
} from "../../firebase/functions";
import { handleFetchUser } from "./user.helpers";
import { takeLatest, call, all, put } from "redux-saga/effects";
import userTypes from "./user.types";
import {
	signInSuccess,
	signOutUserSuccess,
	userErrorStart,
} from "./user.actions";

//listen for a change in the user session
export function* getSnapshotFromUserAuth(user, additionalData) {
	try {
		const userRef = yield call(handleUserProfile, {
			userAuth: user,
			additionalData,
		});
		const snapshot = yield userRef.get();

		yield put(
			signInSuccess({
				id: snapshot.id,
				...snapshot.data(),
			})
		);
	} catch (error) {
		console.log(error);
	}
}

//check if user is already logged in
export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		console.log(error);
	}
}

export function* onCheckUserSession() {
	yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

//create user using google
export function* onGoogleSignIn() {
	try {
		const { user } = yield auth.signInWithPopup(googleAuthProvider);
		yield localStorage.setItem("currentUser", JSON.stringify(user));
		yield getSnapshotFromUserAuth(user);
	} catch (error) {}
}

export function* onGoogleSignInStart() {
	yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, onGoogleSignIn);
}

//create user using email and password
export function* onEmailSignUp({
	payload: { fullName, username, email, password, confirmPassword },
}) {
	console.log("we are here");
	if (password !== confirmPassword) {
		yield put(
			userErrorStart([
				{
					title: "Incorrect Password",
					message: "Passwords do not match please try again",
				},
			])
		);
		return;
	}
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield localStorage.setItem("currentUser", JSON.stringify(user));
		const additionalData = { fullName, usernameOption: username, password };
		yield getSnapshotFromUserAuth(user, additionalData);
	} catch (error) {
		console.log(error);
	}
}

export function* onEmailSignUpStart() {
	yield takeLatest(userTypes.SIGN_UP_USER_START, onEmailSignUp);
}

//sign in user using email and password
export function* onEmailSignIn({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield localStorage.setItem("currentUser", JSON.stringify(user));
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		console.log(error);
	}
}

export function* onEmailSignInStart() {
	yield takeLatest(userTypes.EMAIL_SIGN_IN_START, onEmailSignIn);
}

//signout user
export function* onSignOut() {
	try {
		yield auth.signOut();
		yield put(signOutUserSuccess());
		yield localStorage.setItem("currentUser", null);
		yield window.location.reload();
	} catch (error) {
		console.log(error);
	}
}

export function* onSignOutUserStart() {
	yield takeLatest(userTypes.SIGN_OUT_USER_START, onSignOut);
}

export default function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onCheckUserSession),
		call(onSignOutUserStart),
		call(onEmailSignUpStart),
		call(onEmailSignInStart),
		// call(onFetchUserDataStart),
		// call(onResetPasswordStart),
	]);
}
