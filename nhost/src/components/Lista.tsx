import React, { useState, useEffect } from "react";
import "../tailwind/output.css";
import { useQuery } from "@apollo/client";
import { useSubscription } from "@apollo/client";
import { SELECT_USUARIOS } from "../graphql/querys";
import { UUID } from "crypto";
import { GET_USUARIO } from "../graphql/subscriptions";

interface Usuario {
    usu_id: UUID;
    usu_nome: string;
    usu_email: string;
    usu_isAtivo: boolean;
}

function Lista() {
    const [usuario, setUsuario] = useState<Usuario[]>([]);
    const { data, error} = useSubscription(GET_USUARIO);

    console.log(usuario);
    useEffect(() => {
        try{
            if(data && data.usuarios) {
                //setUsuario(prevUsuario => [...prevUsuario, data.usuarios]);
                setUsuario(data.usuarios);
            }
        } catch (e) {
            console.log(`Erro ao carregar a lista de usuários: ${e}`);
            console.log(`Erro trago pelo GraphQL: ${error}`);
        }
    }, [data, error]);

    return(
        <div className="fixed bg-[#317a9f] h-full w-83 p-10 mt-3 mb-3 mr-0 rounded-lg max-h- overflow-y-auto">
            <ul className="">
                {usuario.map((usuario, index) => (
                    <li key={index} className="">
                        <div>
                            <p>{usuario.usu_id}</p>
                        </div>
                        <div>
                            <p>{usuario.usu_nome}</p>
                        </div>
                        <div>
                            <p>{usuario.usu_email}</p>
                        </div>
                        <div>
                            <p>{usuario.usu_isAtivo}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Lista;