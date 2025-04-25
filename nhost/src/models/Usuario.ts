import { UUID } from "crypto";

interface Usuario {
    usu_id: UUID;
    usu_nome: string;
    usu_email: string;
    usu_isAtivo: boolean;
}

export default Usuario;