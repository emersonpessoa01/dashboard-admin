import React from "react";
import logo from "../../image/favicon.ico";
import "./Sidebar.css"
/* eslint-disable-next-line */

function SideBar({ sideBar, closeSideBar }) {
  return (
    <div className={sideBar ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} width="75%" alt="logo" />
          <h1>@emersonpessoa01</h1>
        </div>

        <i
          onClick={() => closeSideBar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-minus-square"></i>
          <span>Home</span>
        </div>
        <h2> ADMIN </h2>
        <div className="sidebar__link">
          <i className="fas fa-tachometer-alt"></i>
          <span>Área administrativa</span>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-digital-tachograph"></i>
          <span>Lojas</span>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <span>Produtos</span>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-bars"></i>
          <span>Categorias</span>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-utensils"></i>
          <span>Pedidos</span>
        </div>
        <h2>PESSOAS</h2>
        <div className="sidebar__link">
          <i className="fa fa-male"></i>
          <span>Administradores</span>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-user-circle"></i>
          <span>Usuários</span>
        </div>
        <div className="sidebar__link">
          <i className="far fa-money-bill-alt"></i>
          <span>Pagamentos e custos</span>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-tasks"></i>
          <span>A plataforma</span>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-file-alt"></i>
          <span>Política de privacidade</span>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
