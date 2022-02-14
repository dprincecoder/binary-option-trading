import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from "./config";

//initialize firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//firebase database
const DB = firebaseApp?.firestore();

//firebase auth
const auth = firebaseApp?.auth();

//firebase google auth provider
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

//handle user profile
const handleUserProfile = async ({ userAuth, additionalData }) => {
	if (!userAuth) return;

	const { uid } = userAuth;

	const userRef = DB.doc(`users/${uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { username, fullName, email } = userAuth;
		const createdAt = new Date().toISOString();

		try {
			await userRef.set({
				username,
				fullName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log("Error creating user", err.message);
		}
	}
	return userRef;
};

//get current user
const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

//export firebase utils
export { auth, googleAuthProvider, handleUserProfile, getCurrentUser };
export default DB;
