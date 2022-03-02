export const formatAmount = (amount) => {
	const formated = amount.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
	return formated;
};

//format date in full with country code
export const formatDate = (date) => {
	const formated = date.toLocaleString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
	return formated;
};
