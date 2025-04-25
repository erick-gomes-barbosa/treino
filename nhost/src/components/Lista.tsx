import React, { useState, useEffect } from "react";
import "../tailwind/output.css";
import { useSubscription } from "@apollo/client";
import { UUID } from "crypto";
import { GET_USUARIO } from "../graphql/subscriptions";
import Usuario from "../models/Usuario";
import Edicao from "./Edicao";
import { env } from "process";

function Lista() {
    const [usuario, setUsuario] = useState<Usuario[]>([]);
    const { data, error} = useSubscription(GET_USUARIO);
    const [exibirEdicao, setExibirEdicao] = useState<boolean>(false);
    const [enviarId, setEnviarId] = useState<string>('');

    let isAtivo: string;

    console.log(usuario);
    useEffect(() => {
        try{
            if(data && data.usuarios) {
                setUsuario(data.usuarios);
            }

        } catch (e) {
            console.log(`Erro ao carregar a lista de usuários: ${e}`);
            console.log(`Erro trago pelo GraphQL: ${error}`);
        }
    }, [data, error]);

    const abrirEdicao = (id:string) => {
        setEnviarId(id);
        setExibirEdicao(true);
    }

    const fecharEdicao = () => {
        setEnviarId('');
        setExibirEdicao(false);
    }
    
    return(
        <div className="absolute ">
            <div className="fixed bg-[#317a9f] h-full w-83 p-4 mt-3 mb-3 ml-2 rounded-lg max-h-233 overflow-y-auto">
                <ul className="flex flex-col gap-2">
                    {usuario.map((usuario, index) => (
                        <li key={index} 
                            className="flex items-center justify-between text-white bg-[#3291aa] p-2 rounded-md"
                            onClick={() => abrirEdicao(usuario.usu_id)}>
                            <div>
                                <div className="text-lg font-bold">
                                    <p>{usuario.usu_nome}</p>
                                </div>
                                <div className="text-gray-300">
                                    <p>{usuario.usu_email}</p>
                                </div>
                            </div>
                            <div className="text-xl">
                                <p title={usuario.usu_isAtivo?"Ativo":"Inativo"}>{usuario.usu_isAtivo? "✅":"❌"}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Lista;