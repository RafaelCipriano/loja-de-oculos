import React from 'react';
import './App.css';
import Header from './components/topo/header';
import Banner from './components/content/banner/banner';
import Content from './components/content/content';
import Footer from './components/rodape/footer';

export default function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Content/>
      <Footer/>
    </div>
  );
}
