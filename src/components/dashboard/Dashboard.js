import React, { useState } from "react";
import "./dashboard.css";
import Nav from "../header/nav/Nav";
import {
	tradingPackages,
	miningPackages,
} from "../../components/investmentPlans/packages";
import InputForm from "../../helpers/forms/input/Input";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { formatAmount, formatDate } from "../../helpers/currencyFormat/format";
import { useDispatch, useSelector } from "react-redux";
import ButtonHandler from "../../helpers/forms/button/ButtonHandler";
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
];
const coins = [
	{ id: 1, title: "Bitcoin", code: "btc" },
	{ id: 2, title: "Ethereum", code: "eth" },
	{ id: 3, title: "Usdt", code: "usdt" },
	{ id: 4, title: "Doge", code: "doge" },
	{ id: 5, title: "BNB", code: "bnb" },
	{ id: 6, title: "Tron", code: "tron" },
];
const allDeposits = [
	{
		id: 1,
		amount: 500,
		amountInCoin: 0.0312,
		coin: "btc",
		status: "approved",
		date: new Date(),
	},
	{
		id: 2,
		amount: 5000,
		amountInCoin: 1.0312,
		coin: "eth",
		status: "pending",
		date: new Date(),
	},
	{
		id: 3,
		amount: 100000,
		amountInCoin: 2.1312,
		coin: "usdt",
		status: "declined",
		date: new Date(),
	},
];
const allWithdrawals = [
	{
		id: 1,
		amount: 500,
		amountInCoin: 0.0312,
		coin: "btc",
		status: "approved",
		date: new Date(),
	},
	{
		id: 2,
		amount: 5000,
		amountInCoin: 1.0312,
		coin: "eth",
		status: "pending",
		date: new Date(),
	},
	{
		id: 3,
		amount: 100000,
		amountInCoin: 2.1312,
		coin: "usdt",
		status: "declined",
		date: new Date(),
	},
];

const mapState = ({ user }) => ({
	currentUser: user,
});
const Dashboard = () => {
	const { currentUser } = useSelector(mapState);
	const { username, email } = currentUser;
	const [toggleTabs, setToggleTabs] = useState(2);
	const [tradingMinRate, setTradingMinRate] = useState(0);
	const [tradingMaxRate, setTradingMaxRate] = useState(0);
	const [activeDeposit, setActiveDeposit] = useState(false);

	const [miningMinRate, setMiningMinRate] = useState(200);
	const [selectedCoin, setSelectedCoin] = useState("btc");
	const [amount, setAmount] = useState(0);
	const [planValues, setPlanValues] = useState({});
	const [depositArr, setDepositArr] = useState([]);

	const getSelectedPlan = (from, to, percentage, id, title) => {
		const obj = { from, to, percentage, id, title };
		setPlanValues(obj);
		const newArr = [{ from, to, percentage, id, title, amount, selectedCoin }];

		console.log(newArr);
		setDepositArr(newArr);
		return newArr;
	};

	const handleCoinChange = (e) => {
		setSelectedCoin(e.target.value);
		const { from, to, percentage, id, title } = planValues;
		getSelectedPlan(from, to, percentage, id, title);
	};

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
		const { from, to, percentage, id, title } = planValues;
		getSelectedPlan(from, to, percentage, id, title);
	};

	console.log(depositArr);

	return (
		<div className="dashboard">
			<Nav />
			<div className="dashboard-container">
				<div className="left-dash">
					<div className="left-dash-header">
						<div className="left-dash-header-name box-sh">
							<h1>{username}</h1>
						</div>
						<div className="left-dash-header-bal box-sh">
							<h4>Active Balance</h4>
							<p>$00.00</p>
						</div>
					</div>
					<div className="left-dash-icons-holder">
						<div className="">
							<div className="left-dash-icon box-sh">
								<CheckCircleIcon />
								<span className="left-dash-icon-span">Email: {email}</span>
							</div>
							<div className="left-dash-icon box-sh">
								<CheckCircleIcon />
								<span className="left-dash-icon-span">
									Joined: Sunday, 23rd January, 2022
								</span>
							</div>
							<div className="left-dash-icon box-sh">
								<CheckCircleIcon />
								<span className="left-dash-icon-span">
									Registered IP: 197.210.78.34
								</span>
							</div>
							<div className="left-dash-icon box-sh">
								<CheckCircleIcon />
								<span className="left-dash-icon-span">Your Upline: NONE</span>
							</div>
						</div>
					</div>
					<div className="left-dash-assets">
						<div className="left-dash-assets-title box-sh">
							<h2>Assets</h2>
						</div>
						<div className="left-dash-assets-asset box-sh">
							<h2>Bitcoin</h2>
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
							<h2>BnB</h2>
							<p>0.00000000</p>
						</div>
						<div className="left-dash-assets-asset box-sh">
							<h2>Doge</h2>
							<p>0.00000000</p>
						</div>
						<div className="left-dash-assets-asset box-sh">
							<h2>Tron</h2>
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
							{!activeDeposit && (
								<>
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
								</>
							)}
						</div>
						<div
							className={`right-dash-deposit-container ${
								toggleTabs === 2 ? "active-content" : "content-container"
							}`}>
							{!activeDeposit && (
								<>
									<div className="right-dash-deposit-title">
										<h4>Select Package</h4>
										<div className=""></div>
									</div>
									<p className="right-dash-deposit-sample-txt">Trading Plans</p>
									<small>
										Please select one plan and invest one at a time for maximum
										record
									</small>
									<div className="right-dash-deposit-grid">
										{tradingPackages.map((itm) => {
											const { id, percentage, percentSymbol, title, rate } =
												itm;
											const { from, to } = rate;
											return (
												<div className="right-deposit-selection" key={id}>
													<input
														type="checkbox"
														name=""
														id=""
														onChange={() => {
															getSelectedPlan(from, to, percentage, id, title);
														}}
													/>
													<div className="right-dash-deposit-selection-info-items">
														<div className="right-dash-deposit-selection-info-items-list">
															<p>Plan</p>
															<small>{title}</small>
														</div>
														<div className="right-dash-deposit-selection-info-items-list">
															<p>Amount</p>
															<small>
																{formatAmount(from)} - {formatAmount(to)}
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
											const { id, percentage, percentSymbol, title, rate } =
												itm;
											return (
												<div className="right-deposit-selection" key={id}>
													<input
														type="checkbox"
														name=""
														id=""
														onChange={() =>
															setMiningMinRate(
																parseInt(miningMinRate + rate.from)
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
									<div className="right-dash-deposit-inputs">
										<div className="right-dash-deposit-input-wrapper">
											<InputForm
												label="Amount($)"
												type="number"
												min={planValues.from}
												max={planValues.to}
												handleChange={(e) => handleAmountChange(e)}
											/>
										</div>
										<div className="right-dash-deposit-input-wrapper">
											<select
												className="right-dash-deposit-select"
												value={selectedCoin}
												onChange={
													(e) => handleCoinChange(e)
													// setSelectedCoin(e.target.value);
													// setAmount(e.target.value);
													// setInputMin(e.target.value);
												}>
												{coins.map((e) => (
													<option key={e.id} value={e.code}>
														{e.title}
													</option>
												))}
											</select>
										</div>
									</div>
									<ButtonHandler
										text="Submit"
										onClick={() => setActiveDeposit(!activeDeposit)}
									/>
								</>
							)}
						</div>

						<div
							className={`${
								toggleTabs === 3 ? "active-content" : "content-container"
							}`}>
							{!activeDeposit && (
								<>
									{" "}
									<div className="right-dash-transaction-title">
										<h4>Deposits</h4>
										<div className=""></div>
									</div>
									<div className="right-dash-deposits-grid">
										{allDeposits.length > 0 ? (
											<>
												{allDeposits.map((dep) => (
													<div
														className="right-dash-deposits-info-container"
														key={dep.id}>
														<div
															className="right-dash-deposits-info-items"
															key={dep.id}>
															<div className="right-dash-deposits-info-items-list">
																<p>Amount</p>
																<small>{formatAmount(dep.amount)}</small>
															</div>
															<div className="right-dash-deposits-info-items-list">
																<p>Coin Amount</p>
																<small>{formatAmount(dep.amountInCoin)}</small>
															</div>
															<div className="right-dash-deposits-info-items-list">
																<p>Status</p>
																<small
																	className={`${
																		dep.status === "approved"
																			? "status-approved"
																			: "status-failed"
																	}`}>
																	{dep.status}
																</small>
															</div>
															<div className="right-dash-deposits-info-items-list">
																<p>Date Initiated</p>
																<small>{formatDate(dep.date)}</small>
															</div>
														</div>
													</div>
												))}
											</>
										) : (
											<div className="right-dash-deposits-info-container">
												<div className="right-dash-deposits-info-items">
													<p>All Amount deposits will be shown here!</p>
												</div>
											</div>
										)}
									</div>
								</>
							)}
						</div>
						<div
							className={`${
								toggleTabs === 4 ? "active-content" : "content-container"
							}`}>
							{!activeDeposit && (
								<>
									<div className="right-dash-transaction-title">
										<h4>Withdrawal Earnings</h4>
										<div className=""></div>
									</div>
									<div className="right-dash-deposits-grid">
										<div className="right-dash-deposits-info-container">
											<div className="right-dash-deposits-info-items">
												<InputForm label="Amount($)" />
											</div>
										</div>
										<div className="right-dash-deposits-info-container">
											<div className="right-dash-deposits-info-items">
												<InputForm label="Wallet Address" />
											</div>
										</div>
									</div>
								</>
							)}
						</div>
						<div
							className={`${
								toggleTabs === 5 ? "active-content" : "content-container"
							}`}>
							{!activeDeposit && (
								<>
									<div className="right-dash-transaction-title">
										<h4>Withdrawals</h4>
										<div className=""></div>
									</div>
									<div className="right-dash-deposits-grid">
										{allWithdrawals.length > 0 ? (
											<>
												{allWithdrawals.map((dep) => (
													<div
														className="right-dash-deposits-info-container"
														key={dep.id}>
														<div
															className="right-dash-deposits-info-items"
															key={dep.id}>
															<div className="right-dash-deposits-info-items-list">
																<p>Amount</p>
																<small>{formatAmount(dep.amount)}</small>
															</div>
															<div className="right-dash-deposits-info-items-list">
																<p>Coin Amount</p>
																<small>{formatAmount(dep.amountInCoin)}</small>
															</div>
															<div className="right-dash-deposits-info-items-list">
																<p>Status</p>
																<small
																	className={`${
																		dep.status === "approved"
																			? "status-approved"
																			: "status-failed"
																	}`}>
																	{dep.status}
																</small>
															</div>
															<div className="right-dash-deposits-info-items-list">
																<p>Date Initiated</p>
																<small>{formatDate(dep.date)}</small>
															</div>
														</div>
													</div>
												))}
											</>
										) : (
											<div className="right-dash-deposits-info-container">
												<div className="right-dash-deposits-info-items">
													<p>All Withdrawals will be shown here!</p>
												</div>
											</div>
										)}
									</div>
								</>
							)}
						</div>
						<div
							className={`${
								activeDeposit ? "active-content" : "content-container"
							}`}>
							<div className="right-dash-transaction-title">
								<h4>Confirm Deposit</h4>
								<div className=""></div>
							</div>
							<div className="right-dash-switchtab-wraper">
								<div className="right-dash-transaction-deposit bg-bluish">
									<div className="right-dash-transaction-deposit-title">
										Deposits Information
									</div>
									<div className="right-dash-transaction-deposit-info-items ">
										{depositArr.map((itm) => {
											const {
												from,
												to,
												percentage,
												id,
												title,
												amount,
												selectedCoin,
											} = itm;
											return (
												<div key={id}>
													<div className="right-dash-transaction-deposit-info-items-list">
														<p>Plan</p>
														<small>{title}</small>
													</div>
													<div className="right-dash-transaction-deposit-info-items-list">
														<p>Profit</p>
														<small>{formatAmount(Number(amount))}</small>
													</div>
													<div className="right-dash-transaction-deposit-info-items-list">
														<p>Principal Return</p>
														<small>YES</small>
													</div>
													<div className="right-dash-transaction-deposit-info-items-list">
														<p>Principal Withdraw</p>
														<small>YES</small>
													</div>
													<div className="right-dash-transaction-deposit-info-items-list">
														<p>Amount</p>
														<small>{formatAmount(Number(amount))}</small>
													</div>
													<div className="right-dash-transaction-deposit-info-items-list">
														<p>Amount(BTC)</p>
														<small>00000</small>
													</div>
													<div className="right-dash-transaction-deposit-info-items-list">
														<p>Date Initiated</p>
														<small>00000</small>
													</div>
												</div>
											);
										})}
									</div>
								</div>
								<div className="right-dash-transaction-withdrawal">
									<div className="right-dash-transaction-withdrawal-title">
										Bitcoin deposit
									</div>
									<div className="right-dash-transaction-withdrawal-info-items">
										<div className="right-dash-transaction-withdrawal-info-items-list">
											<p>Please send Exactly</p>
											<small>$00.000</small>
										</div>
										<div className="right-dash-transaction-withdrawal-info-items-list">
											<p>To below address to complete the transaction</p>
											<small>$00.000</small>
										</div>
										<div className="right-dash-transaction-withdrawal-info-items-list">
											<p>Or scan this QR code to complete the transaction</p>
											<img src="" alt="coin qr code address" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
