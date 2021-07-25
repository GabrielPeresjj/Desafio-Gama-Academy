import React, { useState } from 'react'
import './Form.css'

function Form() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');


    const obj = {
        "nome": nome,
        "email": email,
        "endereco": endereco,
        "numero": numero,
        "complemento": complemento
    }

    function saveLocalStorage(){
        const cadastro = JSON.stringify(obj)
        localStorage.setItem('Formulário', cadastro)
    }

    return (
        <div className="form">
            <h1>Formulário</h1>
            <input placeholder="Nome Completo" value={nome} onChange={e=> setNome(e.target.value)}></input>
            <input placeholder="E-mail" value={email} onChange={e=> setEmail(e.target.value)}></input>
            <input placeholder="Endereço" value={endereco} onChange={e=> setEndereco(e.target.value)}></input>
            <input placeholder="Número" value={numero} onChange={e=> setNumero(e.target.value)}></input>
            <input placeholder="Complemento (caso tenha)" value={complemento} onChange={e=> setComplemento(e.target.value)}></input>
            <button type="button" onClick={saveLocalStorage}>Enviar</button>
        </div>
    )
}

export default Form;