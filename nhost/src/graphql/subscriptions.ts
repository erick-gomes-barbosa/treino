import { gql } from "@apollo/client";

export const GET_USUARIO = gql `
subscription MySubscription {
  usuarios {
    usu_id
    usu_nome
    usu_email
    usu_isAtivo
  }
}
`