import React from "react";
import hello from "../../image/hello.svg";
import Chart from "../charts/Chart";
import "./Main.css"

function Main() {
  const year = new Date().getFullYear()
  const month = (new Date().getMonth() + 1).toString().padStart(2, "0") 
  const day = new Date().getDate().toString().padStart(2, "0") 
  const dateCurrent= `${day}/${month}/${year}`
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" width="100%" />
          <div className="main__greeting">
            <h1>Olá, Emerson Pessoa</h1>
            <p>Seja bem-vindo ao seu painel</p>
            <h2>{dateCurrent}</h2>
          </div>
        </div>

        {/*CARDS */}
        <div className="main__cards">
          <div className="card">
            <i className="fas fa-file-alt text-lightblue fa-2x"></i>
            <div className="card_inner">
              <p className="text-primary-p">Número de pedidos</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <i className="far fa-money-bill-alt text-red fa-2x"></i>
            <div className="card_inner">
              <p className="text-primary-p">Pagamentos</p>
              <span className="font-bold text-title">R$2.467</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-archive text-yellow fa-2x"></i>

            <div className="card_inner">
              <p className="text-primary-p">Números de produtos</p>
              <span className="font-bold text-title">670</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-bars text-green fa-2x"></i>
            <div className="card_inner">
              <p className="text-primary-p">Categorias</p>
              <span className="font-bold text-title">40</span>
            </div>
          </div>
        </div>

        {/*CHARTS */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div> {/*SÓ P/ CENTRALIZAR */}
                <h1>Daily reports</h1>
                <p>Belém, Pa-BR</p>
              </div>
              <i className="fas fa-dollar-sign" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Daily reports</h1>
                <p>Belém, Pa-BR</p>
              </div>
              <i className="fas fa-chart-area"></i>
            </div>
            
            <div className="charts__right__cards">
              <div className="card1">
                <h1>Lucro</h1>
                <p>R$ 2.500,00</p>
              </div>
              <div className="card2">
                <h1>Pagamentos</h1>
                <p>R$ 250,00</p>
              </div>
              <div className="card3">
                <h1>Custos de hospedagem</h1>
                <p>R$ 150,00</p>
              </div>
              <div className="card4">
                <h1>Banco de dados</h1>
                <p>R$ 180,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
