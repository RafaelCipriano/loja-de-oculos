import React from 'react';

export default function Contact() {
  return(
    <section id="contact">
      <div className='limita-largura'>
        <h2>Fale conosco</h2>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
        <div className='bloco-pai'>

          <div className='bloco-filho'>
            <h3>Contato</h3>

            <p><img src='assets/images/local.png' alt="Ícone de localização"/>
              <span>Nova Iguaçu, RJ</span>
            </p>

            <p><img src="assets/images/telefone.png" alt="Ícone de telefone"/>
              <span>(21) 9999-9999</span>     
            </p>

            <p><img src="assets/images/email.png" alt="Ícone de email"/>
              <span>contato@oticavida.com</span>
            </p>
          </div>
        
          <div className='bloco-filho'>
            <h3>Nossas Redes Sociais</h3>
            <p><img src="assets/images/fb.png" alt="Ícone do Facebook"/>
              <span>/OticaVida</span>
            </p>
            <p><img src="assets/images/ig.png" alt="Ícone do instagram"/>
              <span>@oticavidarj</span>
            </p>
        
            <p><img src="assets/images/tt.png" alt="Ícone do Twitter"/>
              <span>@oticavidarj</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}