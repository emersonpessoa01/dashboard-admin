import React from "react";
import avatar from "../../image/avatar-jedi.png";
import "./Navbar.css";

function Navbar({ openSideBar }) {
	return (
		<div className="navbar">
			<div className="nav_icon" onClick={() => openSideBar()}>
				<i className="fa fa-bars" aria-hidden="true"></i>
			</div>

			<div className="nav__left">
				<span className="active_link">
					Admin
				</span>
				<span className="active_link">
					Produtos
				</span>
				<span className="active_link">
					Usuários
				</span>
			</div>

			<div className="nav__right">
				<span>
					<i className="fa fa-search"></i>
				</span>

				<span>
					<i className="fa fa-clock"></i>
				</span>

				<span>
					<img src={avatar} alt="avatar" width="30" />
				</span>
			</div>
		</div>
	);
}

export default Navbar;
