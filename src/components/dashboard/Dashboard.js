import React, { useState } from "react";
import "./dashboard.css";
import Nav from "../header/nav/Nav";
import {
	tradingPackages,
	miningPackages,
} from "../../components/investmentPlans/packages";
import InputForm from "../../helpers/forms/input/Input";
const activityTabs = [
	{
		id: 1,
		title: "dashboard",
	},
	{
		id: 2,
		title: "New Deposit",
	},
	{
		id: 3,
		title: "deposits",
	},
	{
		id: 4,
		title: "widthdraw",
	},
	{
		id: 5,
		title: "all widthdrawals",
	},
	{
		id: 6,
		title: "profile",
	},
];
const coins = [
	{ id: 1, title: "Bitcoin", code: "btc" },
	{ id: 2, title: "Ethereum", code: "eth" },
	{ id: 3, title: "Usdt", code: "usdt" },
];
const Dashboard = () => {
	const [toggleTabs, setToggleTabs] = useState(1);
	const [tradingMinRate, setTradingMinRate] = useState(150);
	const [miningMinRate, setMiningMinRate] = useState(200);
	const [selectedCoin, setSelectedCoin] = useState("btc");

	return (
		<div className="dashboard">
			<Nav />
			<div className="dashboard-container">
				<div className="left-dash">
					<div className="left-dash-header">
						<div className="left-dash-header-name box-sh">
							<h1>Jaya Benson</h1>
						</div>
						<div className="left-dash-header-bal box-sh">
							<h4>Active Balance</h4>
							<p>$00.00</p>
						</div>
					</div>
					<div className="left-dash-assets">
						<div className="left-dash-assets-title box-sh">
							<h2>Assets</h2>
						</div>
						<div className="left-dash-assets-asset box-sh">
							<h2>Btc</h2>
							<p>0.00000000</p>
						</div>
						<div className="left-dash-assets-asset box-sh">
							<h2>Ethereum</h2>
							<p>0.00000000</p>
						</div>
						<div className="left-dash-assets-asset box-sh">
							<h2>Usdt</h2>
							<p>0.00000000</p>
						</div>
						<div className="left-dash-assets-asset box-sh">
							<h2>Binance</h2>
							<p>0.00000000</p>
						</div>
					</div>
				</div>
				<div className="right-dash">
					<div className="right-dash-wel-title">
						<h3>Welcome Back</h3>
						<p>Active</p>
					</div>
					<div className="right-dash-activity-tab">
						<ul className="right-dash-activity-tab-list">
							{activityTabs.map((itm) => (
								<li
									onClick={() => setToggleTabs(itm.id)}
									className={`right-dash-activity-tab-item ${
										toggleTabs === itm.id ? "right-dash-tab-active" : "tab"
									}`}
									key={itm.id}>
									{itm.title}
								</li>
							))}
						</ul>
					</div>
					<div className="right-dash-switchtab ">
						<div
							className={`${
								toggleTabs === 1 ? "active-content" : "content-container"
							}`}>
							<div className="right-dash-transaction-title">
								<h4>Transactions</h4>
								<div className=""></div>
							</div>
							<div className="right-dash-switchtab-wraper">
								<div className="right-dash-transaction-deposit">
									<div className="right-dash-transaction-deposit-title">
										Deposits Information
									</div>
									<div className="right-dash-transaction-deposit-info-items">
										<div className="right-dash-transaction-deposit-info-items-list">
											<p>Total Deposits</p>
											<small>$00.000</small>
										</div>
										<div className="right-dash-transaction-deposit-info-items-list">
											<p>Active Deposits</p>
											<small>$00.000</small>
										</div>
										<div className="right-dash-transaction-deposit-info-items-list">
											<p>Last Deposits</p>
											<small>$00.000</small>
										</div>
									</div>
								</div>
								<div className="right-dash-transaction-withdrawal">
									<div className="right-dash-transaction-withdrawal-title">
										Withdrawals Information
									</div>
									<div className="right-dash-transaction-withdrawal-info-items">
										<div className="right-dash-transaction-withdrawal-info-items-list">
											<p>Total Withdrawal</p>
											<small>$00.000</small>
										</div>
										<div className="right-dash-transaction-withdrawal-info-items-list">
											<p>Pending Withdrawal</p>
											<small>$00.000</small>
										</div>
										<div className="right-dash-transaction-withdrawal-info-items-list">
											<p>Last Withdrawal</p>
											<small>$00.000</small>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className={`right-dash-deposit-container ${
								toggleTabs === 2 ? "active-content" : "content-container"
							}`}>
							<div className="right-dash-deposit-title">
								<h4>Select Package</h4>
								<div className=""></div>
							</div>
							<p className="right-dash-deposit-sample-txt">Trading Plans</p>
							<div className="right-dash-deposit-grid">
								{tradingPackages.map((itm) => {
									const { id, percentage, percentSymbol, title, rate } = itm;
									return (
										<div className="right-deposit-selection" key={id}>
											<input
												type="checkbox"
												name=""
												id=""
												onChange={() =>
													setTradingMinRate(
														parseInt(tradingMinRate + rate.from)
													)
												}
											/>
											<div className="right-dash-deposit-selection-info-items">
												<div className="right-dash-deposit-selection-info-items-list">
													<p>Plan</p>
													<small>{title}</small>
												</div>
												<div className="right-dash-deposit-selection-info-items-list">
													<p>Amount</p>
													<small>
														{rate.currency}
														{rate.from} - {rate.currency}
														{rate.to}
													</small>
												</div>
												<div className="right-dash-deposit-selection-info-items-list">
													<p>Daily profit</p>
													<small>
														{percentage}
														{percentSymbol}
													</small>
												</div>
											</div>
										</div>
									);
								})}
							</div>
							<p className="right-dash-deposit-sample-txt">Mining Plans</p>
							<div className="right-dash-deposit-grid">
								{miningPackages.map((itm) => {
									const { id, percentage, percentSymbol, title, rate } = itm;
									return (
										<div className="right-deposit-selection" key={id}>
											<input
												type="checkbox"
												name=""
												id=""
												onChange={() =>
													setMiningMinRate(parseInt(miningMinRate + rate.from))
												}
											/>
											<div className="right-dash-deposit-selection-info-items">
												<div className="right-dash-deposit-selection-info-items-list">
													<p>Plan</p>
													<small>{title}</small>
												</div>
												<div className="right-dash-deposit-selection-info-items-list">
													<p>Amount</p>
													<small>
														{rate.currency}
														{rate.from} - {rate.currency}
														{rate.to}
													</small>
												</div>
												<div className="right-dash-deposit-selection-info-items-list">
													<p>Daily profit</p>
													<small>
														{percentage}
														{percentSymbol}
													</small>
												</div>
											</div>
										</div>
									);
								})}
							</div>
							<div className="right-dash-deposit-inputs">
								<div className="right-dash-deposit-input-wrapper">
									<InputForm label="Amount($)" />
								</div>
								<div className="right-dash-deposit-input-wrapper">
									<select
										className="right-dash-deposit-select"
										value={selectedCoin}
										onChange={(e) => {
											setSelectedCoin(e.target.value);
											// setAmount(e.target.value);
											// setInputMin(e.target.value);
										}}>
										{coins.map((e) => (
											<option key={e.id} value={e.code}>
												{e.title}
											</option>
										))}
									</select>
								</div>
							</div>
						</div>
						<div
							className={`${
								toggleTabs === 3 ? "active-content" : "content-container"
							}`}>
							34
						</div>
						<div
							className={`${
								toggleTabs === 4 ? "active-content" : "content-container"
							}`}>
							45
						</div>
						<div
							className={`${
								toggleTabs === 5 ? "active-content" : "content-container"
							}`}>
							56
						</div>
						<div
							className={`${
								toggleTabs === 6 ? "active-content" : "content-container"
							}`}>
							78
						</div>
						<div
							className={`${
								toggleTabs === 7 ? "active-content" : "content-container"
							}`}>
							89
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
