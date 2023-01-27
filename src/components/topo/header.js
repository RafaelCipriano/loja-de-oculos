import React from "react";

export default function header() {
  return(
    <header>
      <div className="content-nav limita-largura">
        <img src="assets/images/logo.png" alt="Logotipo da Óticas Vida"/>
        <nav>
          <ul className="nav-list">
            <li><a href="#products">PRODUTOS</a></li>
            <li><a href="#about">SOBRE</a></li>
            <li><a href="#contact">CONTATO</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}