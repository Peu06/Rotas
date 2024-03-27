import React from "react";
import './style.css';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div>
        <h1>Escolha o time: </h1>
        <div className="conteudo-opcoes">
            <Link className="opcao-santos" to = '/Santos'>Santos</Link>
            <Link className="opcao-palmeiras" to = '/Palmeiras'>Palmeiras</Link>
            <Link className="opcao-corinthians" to = '/Corinthians'>Corinthians</Link>
            <Link className="opcao-saopaulo" to = '/SaoPaulo'>São Paulo</Link>
        </div>
    </div>
);
export default HomePage;