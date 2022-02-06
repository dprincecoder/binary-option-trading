export const tradingPackages = [
	{
		id: Math.floor(Math.random() * 100),
		title: "level 1 plan",
		percentage: 3,
		percentSymbol: "%",
		time: "daily for 24 hours",
		rate: { from: "50", to: "599", currency: "$" },
		options: {
			info1: "Principal included at maturity",
			info2: "Earning on Calendar Days",
		},
	},
	{
		id: Math.floor(Math.random() * 100),
		title: "level 2 plan",
		percentage: 10,
		percentSymbol: "%",
		time: "daily for 36 hours",
		rate: { from: "600", to: "5,999", currency: "$" },
		options: {
			info1: "Principal included at maturity",
			info2: "Earning on Calendar Days",
		},
	},
	{
		id: Math.floor(Math.random() * 100),
		title: "level 3 plan",
		percentage: 15,
		percentSymbol: "%",
		time: "daily for 36 hours",
		rate: { from: "6000", to: "100,000", currency: "$" },
		options: {
			info1: "Principal included at maturity",
			info2: "Earning on Calendar Days",
		},
	},
	{
		id: Math.floor(Math.random() * 100),
		title: "fixed deposit",
		percentage: 20,
		percentSymbol: "%",
		time: "daily for 30 days",
		rate: { from: "1,500", to: "10,000", currency: "$" },
		options: {
			info1: "Principal included at maturity",
			info2: "Earning on Calendar Days",
		},
	},
];

export const miningPackages = [
	{
		id: Math.floor(Math.random() * 100),
		title: "Bronze plan",
		percentage: 10,
		percentSymbol: "%",
		time: "daily for 3 days",
		rate: { from: "200", to: "900", currency: "$" },
		options: {
			info1: "10000 GH/s Hash Power",
			info2: "24/7 Customer Service",
		},
	},
	{
		id: Math.floor(Math.random() * 100),
		title: "silver plan",
		percentage: 20,
		percentSymbol: "%",
		time: "daily for 3 days",
		rate: { from: "1,000", to: "5,900", currency: "$" },
		options: {
			info1: "10000 GH/s Hash Power",
			info2: "24/7 Customer Service",
		},
	},
	{
		id: Math.floor(Math.random() * 100),
		title: "gold plan",
		percentage: 33,
		percentSymbol: "%",
		time: "daily for 5 days",
		rate: { from: "6,000", to: "Unlimited", currency: "$" },
		options: {
			info1: "10000 GH/s Hash Power",
			info2: "24/7 Customer Service",
		},
	},
	{
		id: Math.floor(Math.random() * 100),
		title: "fixed deposit",
		percentage: 45,
		percentSymbol: "%",
		time: "daily for 30 days",
		rate: { from: "1,500", to: "10,000", currency: "$" },
		options: {
			info1: "10000 GH/s Hash Power",
			info2: "24/7 Customer Service",
		},
	},
];
