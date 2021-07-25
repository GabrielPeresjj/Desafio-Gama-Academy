import React from 'react'
import { Link } from 'react-router-dom'
import CopoAmericano from '../../images/copo-americano.jpg'
import CanecaChopp from '../../images/Caneca-Chopp.jpg'
import JarraSuco from '../../images/Jarra-Suco.jpg'
import './Cards.css'

function Cards() {
    let obj = {
        "nomeProduto": '',
        "preco": 0
    }

    function saveLocalStorageProduct() {
        const pedido = JSON.stringify(obj)
        localStorage.setItem('Pedido', pedido)
    }

    return (
        <div className="container">
            <div className="card">
                <img src={CopoAmericano}></img>
                <h2>Copo Americano</h2>
                <h1>R$10,00</h1>
                <button type="submit" onClick={obj.nomeProduto = 'Copo Americano', obj.preco = 10.00, saveLocalStorageProduct}>
                    <Link to="/cadastro">Comprar</Link>
                </button>
            </div>
            <div className="card">
                <img src={CanecaChopp}></img>
                <h2>Caneca de Chopp</h2>
                <h1>R$50,00</h1>
                <button type="button" onClick={obj.nomeProduto = 'Caneca de Chopp', obj.preco = 50.00, saveLocalStorageProduct}>
                    <Link to="/cadastro">Comprar</Link>
                </button>
            </div>
            <div className="card">
                <img src={JarraSuco}></img>
                <h2>Jarra de Suco</h2>
                <h1>R$30,00</h1>
                <button type="button" onClick={obj.nomeProduto = 'Jarra de suco', obj.preco = 30.00, saveLocalStorageProduct}>
                    <Link to="/cadastro">Comprar</Link>
                </button>
            </div>
        </div>
    )
}

export default Cards;