import React from "react";

export default function Products() {

  // const produtos = [
  //   {
  //     id: 1,
  //     titulo: "Óculos infantil",
  //     imagem: "assets/images/oculos04.png",
  //     alt: "Óculos infantil",
  //     preco: "R$ 500,00"
  //   }
  // ];

  return(
    <section id="products">
      <div className="limita-largura">
        <h2>NOSSOS PRODUTOS</h2>

        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>

        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

        <div className="oculos-cards">
          <div className="card">
            <h3>Óculos de grau</h3>
            <img src="assets/images/oculos01.png" alt="Óculos com lentes de grau"/>
            <p>R$ 500,00</p>
          </div>

          <div className="card">
            <h3>Óculos transition</h3>
            <img src="assets/images/oculos02.png" alt="Óculos com lentes transition"/>
            <p>R$ 750,00</p>
          </div>

          <div className="card">
            <h3>Óculos de sol</h3>
            <img src="assets/images/oculos03.png" alt="Óculos de sol"/>
            <p>R$ 700,00</p>
          </div>

          <div className="card">
            <h3>Óculos infantil</h3>
            <img src="assets/images/oculos04.png" alt="Óculos infantil"/>
            <p>R$ 500,00</p>
          </div>

        {/* {
          produtos.map(produto => (
            <div className="card">
            <h3>{produto.titulo}</h3>
            <img src={produto.imagem} alt={produto.alt}/>
            <p>{produto.preco}</p>
          </div>
          ))
        } */}

        </div>

        

        <p>Todos os nossos produtos incluem:</p>

        <ul className="benefits-list">
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  );
}