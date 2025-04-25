import React, { useState } from "react";
import "../tailwind/output.css";
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

            console.log(`Dado: ${data} \n Dado de Criação de Usuário: ${data.createUsuario}`);

            if(data || data.createUsuario) {
                console.log("Usuário cadastrado: ", data.createUsuario);
                alert("Cadastro realizado com sucesso!");
                setEmail('');
                setNome('');
            }
        }
        catch (e) {
            console.error("Erro ao cadastrar o usuário: ", error);
            console.error("Erro capturado pelo Catch: ", e);
        }
    }

    return(
        <div className="flex justify-center items-center border-0 bg-[#317a9f] h-fit w-fit p-10 place-content-center rounded-lg">
            <div className="flex flex-col justify-center text-base text-white min-w-fit gap-4">
                <div className="flex justify-between align-middle text-white gap-5">
                    <h1>Nome</h1>
                    <input 
                        className="bg-transparent outline-0 text-ellipsis whitespace-nowrap border-b-1 rounded-b-[2px] pr-1 pl-1" 
                        id="in_nome" type="text" placeholder="digite seu nome aqui" value={nome} onChange={handleNomeChange}/>
                </div>
                <div className="flex justify-between align-middle text-white gap-5">
                    <h1>Email</h1>
                    <input
                        className="bg-transparent outline-0 text-ellipsis whitespace-nowrap border-b-1 rounded-b-[2px] pr-1 pl-1" 
                        id="in_email" type="text" placeholder="email@dominio.com" value={email} onChange={handleEmailChange}/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <button
                        className="border-1 border-[#317a9f] bg-white text-[#317a9f] max-w-fit pl-2 pr-2 rounded-lg mt-3 hover:border-1 hover:border-white hover:bg-[#317a9f] hover:text-white transition ease-in-out" 
                        onClick={handleCadastroClick}>Cadastrar</button>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;