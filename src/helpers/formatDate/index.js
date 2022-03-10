//format date in full with country code
export const formatDate = (date) => {
	const formated = date.toLocaleString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
	return formated;
};

//another date format
export const formatDate2 = (date) => {
	var d = new Date(date),
		month = "" + (d.getMonth() + 1),
		day = "" + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = "0" + month;
	if (day.length < 2) day = "0" + day;

	return [year, month, day].join("-");
};
