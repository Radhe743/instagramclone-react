import React from "react";
import { TNavBarTabs } from "../content";
import { Link } from "react-router-dom";

import { useContext, useCallback } from "react";
import { SidebarContext } from "../context/SidebarContext";

const NavTabItem: React.FC<{ tab: TNavBarTabs }> = ({ tab }) => {
	const {
		setSearchOpen,
		setCreateOpen,
		setNotificationOpen,
		sidebarOpen,
		reset,
	} = useContext(SidebarContext);

	const handleClick = useCallback(() => {
		// reset();
		if (tab.text === "Search") {
			setNotificationOpen(false);
			setSearchOpen((prev) => !prev);
		}
		if (tab.text === "Notifications") {
			setSearchOpen(false);
			setNotificationOpen((prev) => !prev);
		}
		if (tab.text === "Create") {
			setCreateOpen((prev) => !prev);
		}
	}, [setSearchOpen, setCreateOpen, setNotificationOpen]);

	return tab.link ? (
		<Link to={tab.link}>
			<div
				{...tab.props}
				className={`flex cursor-pointer items-center icon-hover ${
					!tab.isMobileVisible && "hidden md:inline-flex"
				}`}
			>
				<span>{<tab.icon className="" />}</span>
				{!sidebarOpen && (
					<h3 className="text-base transition-all saturate-200 ml-4 hidden lg:block select-none">
						{tab.text}
					</h3>
				)}
			</div>
		</Link>
	) : (
		<div
			{...tab.props}
			onClick={handleClick}
			className={`flex cursor-pointer items-center icon-hover ${
				!tab.isMobileVisible && "hidden md:inline-flex"
			}`}
		>
			<span>{<tab.icon className="" />}</span>
			{!sidebarOpen && (
				<h3 className="text-base ml-4 hidden lg:block select-none">
					{tab.text}
				</h3>
			)}
		</div>
	);
};

export default NavTabItem;
