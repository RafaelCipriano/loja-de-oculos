import React from "react";

export default function About() {
  return(
    <section id="about">
      <div className="content-about limita-largura">
        <h2>QUEM SOMOS NÓS?</h2>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
        <div className="card-sobre-container">
          <div className="card-sobre">
            <img src="assets/images/loja.png" alt="Prateleiras de uma farmácia"/>
          </div>
          <div className="card-sobre card-sobre-texto">
            <h3>Nossas Filiais</h3>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>
          <div className="card-sobre card-sobre-texto">
            <h3>Atendimento flexível</h3>
            <p>Nossa equipe possui é treinada para te atender</p>
          </div>
          <div className="card-sobre">
            <img src="assets/images/atendimento.png" alt="Balconista atendendo cliente"/>
          </div>
        </div>
      </div>

    </section>
  );
}