import React, { useState, useEffect } from 'react';
import "../tailwind/output.css";
import { UUID } from 'crypto';
import { useSubscription, useMutation } from '@apollo/client';
import Usuario from '../models/Usuario';
import { GET_USUARIO } from '../graphql/subscriptions';
import { DELETE_USUARIO, UPDATE_USUARIO } from '../graphql/mutations';

export interface props {
    id: string;
    onClose: () => void;
}

function Edicao( {id, onClose}: props ) {
    const [usuario, setUsuario] = useState<Usuario[]>([]);
    const {data, error} = useSubscription(GET_USUARIO);
    const [updateUsuario, {data: dataUpdate, error: errorUpdate}] = useMutation(UPDATE_USUARIO);
    const [deleteUsuario, {data: dataDelete, error: errorDelete}] = useMutation(DELETE_USUARIO);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [isAtivo, setIsAtivo] = useState('');

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

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event?.target.value);
    }

    const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event?.target.value);
    }

    const handleIsAtivoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsAtivo(event?.target.value);
    }

    const handleUpdateClick = async () => {
        try{
            await updateUsuario({variables: {usu_nome: nome, usu_id: id, usu_email: email, usu_isAtivo: isAtivo}});
        }
        catch (e) {
            console.error(`Erro ao atuailizar o cadastro do usuário: ${e}`);
        }
    }

    const handleDeleteClick = async () => {
        try {
            await deleteUsuario({variables: {usu_id: id}})
        }
        catch (e) {
            console.error(`Erro ao apagar usuário da base de dados: ${e}`);
        }
    }

    return(
        <div className='flex flex-col items-center  bg-[#32332d] h-150 w-100 max-w-90 p-4 rounded-xl'>
            <div className='bg-purple-500 h-10 w-full min-w-fit font-KG'>
                <div className='font-bold'>
                    <h1 className='text-2xl'>teste</h1>
                </div>
            </div>
            <div className='bg-blue-500 h-10 w-10 justify-end'></div>
        </div>
    )
    
}

export default Edicao;