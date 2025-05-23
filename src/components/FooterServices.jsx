/** @format */

import React from "react";
import Envelop from "../assets/Images/ic_baseline-email.png";
import Location from "../assets/Images/gridicons_location.png";
import Phone from "../assets/Images/material-symbols_call.png";

const FooterServices = () => {
	return (
		<div className="bg-[#272626] text-white p-8 mt-7">
			<div className="md:m-auto md:max-w-[920px] m-auto max-w-[540px]  ">
				<h1 className="text-base text-center md:text-left">
					Phibest Global Services Include
				</h1>
				<div className="flex flex-col items-center md:flex-row md:justify-between text-base md:text-xs ">
					<div className="flex flex-col md:flex-row gap-0 md:gap-8 mt-2">
						<div>
							<ul>
								<li className="pb-1 hover:underline">
									<a href="#bitumen&oil">
										Bitumen Cleaning and Oil Based Mud
									</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#vessel&tank">
										Vessel and Storage Tank Cleaning
									</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#barite&slug">Barite and Bentonite Slug</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#pipe&anode">
										Pipeline and Anode Fabrication
									</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#clear&forward">Clearing and Forwarding</a>
								</li>
							</ul>
						</div>
						<div>
							<ul className="mt-4 md:mt-0">
								<li className="pb-1">Civil Engineering Works</li>
								<li className="pb-1">
									Fabrication Engineering/Installation
								</li>
								<li className="pb-1">Logistics</li>
								<li className="pb-1">Equipment Leasing</li>
								<li className="pb-1">
									Solar Street Light Installation
								</li>
								<li className="pb-1">Corrosion control/Protection</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col-reverse items-center md:justify-between md:flex-row md:gap-8 mt-4">
						<div className="mb-4">
							<ul>
								<li className="pb-1 hover:underline">
									<a href="/">Home</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#About">About</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#Policy">Policy</a>
								</li>
							</ul>
						</div>
						<div className="">
							<ul>
								<li className="flex items-center gap-2 mb-2">
									<span>
										<img
											className="w-5 h-5"
											src={Location}
											alt="message icon"
										/>
									</span>
									KM.3 Harbour Road Davo Plaza, By Njinna Hotel
								</li>
								<li className=" flex items-center gap-2 mb-2">
									<img
										className="w-5 h-5"
										src={Phone}
										alt="message icon"
									/>
									+234 (0) 803 677 6697
								</li>
								<li className="hover:underline flex items-center gap-2">
									<img
										className="w-5 h-5"
										src={Envelop}
										alt="message icon"
									/>
									<a href="mailto:phizek4life@gmail.com">
										phizek4life@gmail.com
									</a>{" "}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterServices;
