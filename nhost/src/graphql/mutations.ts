import { gql } from "@apollo/client";

export const INSERT_USUARIO = gql `
mutation MyMutation($usu_nome: String = "", $usu_isAtivo: Boolean = false, $usu_email: String = "") {
  insert_usuarios(objects: {usu_nome: $usu_nome, usu_email: $usu_email, usu_isAtivo: $usu_isAtivo}) {
    returning {
      usu_id
    }
  }
}`;

export const UPDATE_USUARIO = gql `mutation MyMutation($usu_nome: String!, $usu_id: uuid!, $usu_email: String!, $usu_isAtivo: Boolean!) {
  update_usuarios_by_pk(pk_columns: {usu_id: $usu_id}, 
  _set: {usu_email: $usu_email, usu_nome: $usu_nome, usu_isAtivo: $usu_isAtivo}) {
    usu_nome
    usu_email
  }
}`

//export const SELECT_USUARIO = gql ``