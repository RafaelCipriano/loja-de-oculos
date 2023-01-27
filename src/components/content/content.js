import React from "react";
import Products from "./secaoProdutos/products";
import About from './secaoSobre/about';
import Contact from './secaoContato/contact';

export default function Content() {
  return(
    <section>
      <Products/>
      <About/>
      <Contact/>
    </section>
  );
}