import { useEffect } from "react";
import nhost from "../lib/nhost";
 
// Tipagem da resposta GraphQL

export default function NhostStatus() {
  useEffect(() => {
    const checkStatus = async () => {
      try {
        // Alterando a query para apenas buscar __typename
        const result = await nhost.graphql.request(`
          query {
            __typename
          }
        `);
 
        if (result.error) {
          console.log("❌ Conexão falhou");
        } else {
          console.log("✅ Conectado ao Nhost");
          console.log(result);
        }
      } catch (e) {
        console.log("❌ Erro ao conectar:");
        console.error(e);
      }
    };
 
    checkStatus();
  }, []);

  return<></>
 
}