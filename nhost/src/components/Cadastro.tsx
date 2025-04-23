import React, { useState } from "react";
import "../styles/containers.css"
import { useMutation } from "@apollo/client";
import { INSERT_USUARIO } from "../graphql/mutations";

function Cadastro () {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [createUsuario, { data, error }] = useMutation(INSERT_USUARIO);

    const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleCadastroClick = async () => {
        try{
            await createUsuario({variables: {usu_nome: nome, usu_email: email},});

            if(data && data.createUsuario) {
                console.log("Usuário cadastrado: ", data.createUsuario);
                alert("Cadastro realizado com sucesso!");
                
                setEmail('');
                setNome('');
            }
        }
        catch (e) {
            console.error("Erro ao cadastrar o usuário: ", error);
        }
    }

    return(
        <div className="container-cadastro">
            <div className="container-form">
                <div className="container-input">
                    <h1>Nome</h1>
                    <input id="in_nome" type="text" placeholder="digite seu nome aqui" value={nome} onChange={handleNomeChange}/>
                </div>
                <div className="container-input">
                    <h1>Email</h1>
                    <input id="in_email" type="text" placeholder="email@dominio.com" value={email} onChange={handleEmailChange}/>
                </div>
                <div className="container-button">
                    <button onClick={handleCadastroClick}>Cadastrar</button>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;