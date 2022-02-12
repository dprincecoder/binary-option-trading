import React, { useRef, useEffect } from "react";
import "./testimony.css";
import { SliderData } from "./testimonySlideData/Slider";
const Testimony = () => {
	const slider = useRef(null);
	useEffect(() => {
		let currentSlide = 0;
		const autoSlide = () => {
			currentSlide++;
			if (currentSlide === 5) {
				currentSlide = 0;
			}
			slider.current.style.transform = `translateX(-${currentSlide * 400}px)`;
		};

		setInterval(autoSlide, 10000);
	}, []);
	
	return (
		<div className="testimony">
			<div className="plans-tl">
				<h1>Our Happy Clients</h1>
				<div className="plans-tl-btm"></div>
			</div>
			<div className="testimony-grid">
				<div className="testimony-txl">
					<h2>What our clients say!</h2>
					<p>
						REVIEWS ARE FAR MORE IMPORTANT TO US AFTER WITHDRAWAL. Join our{" "}
						<b>Telegram Group</b>{" "}
						<a href="https://t.me/+nj5zyNP1yIw5MDJk">Here</a> and join others on
						their testimony of investment into cryptocurrency then LET US KNOW
						WHY YOU LOVE Binaryoptionstrading!
					</p>
				</div>
				<div className="testimony-clients ">
					<div className="testimony-clients-slider" ref={slider}>
						{SliderData.map((item, i) => (
							<div className={`testimony-clients-card `} key={i}>
								<div className="testimony-clients-card-top">
									<div className="testimony-clients-card-top-img-wrapper">
										<img
											src={item.image}
											alt={item.name}
											className="testimony-clients-card-top-img"
										/>
									</div>
									<h2>{item.name}</h2>
								</div>
								<div className="testimony-clients-card-bottom">
									<p>{item.txt}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimony;
