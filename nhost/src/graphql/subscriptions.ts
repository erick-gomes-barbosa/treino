import { gql } from "@apollo/client";

export const GET_TASK = gql `
subscription MySubscription {
  usuarios {
    usu_id
    usu_nome
    usu_email
    usu_isAtivo
  }
}
`