import { gql } from "@apollo/client";

export const INSERT_USUARIO = gql `
mutation MyMutation($usu_nome: String = "", $usu_isAtivo: Boolean = true, $usu_email: String = "") {
  insert_usuarios(objects: {usu_nome: $usu_nome, usu_email: $usu_email, usu_isAtivo: $usu_isAtivo}) {
    returning {
      usu_id
    }
  }
}`;

export const UPDATE_USUARIO = gql `mutation MyMutation($usu_id: uuid = "", $usu_email: String = "", $usu_isAtivo: Boolean = true, $usu_nome: String = "") {
  update_usuarios_by_pk(pk_columns: {usu_id: $usu_id}, _set: {usu_email: $usu_email, usu_isAtivo: $usu_isAtivo, usu_nome: $usu_nome}) {
    usu_id
    usu_nome
  }
}
`

export const DELETE_USUARIO = gql `
  mutation MyMutation($usu_id: uuid = "") {
    delete_usuarios_by_pk(usu_id: $usu_id) {
      usu_id
    }
  }
`