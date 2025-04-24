import { gql } from "@apollo/client";

export const SELECT_USUARIOS = gql`
query MyQuery {
  usuarios {
    usu_id
    usu_nome
    usu_email
    usu_isAtivo
  }
}
`