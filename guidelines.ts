export interface Guideline {
  title: string;
  items: string[];
}

export const allowedGuidelines: Guideline = {
  title: "O que pode",
  items: [
    "Usar o bot para diversão e entretenimento com seus amigos",
    "Competir de forma saudável no sistema de economia e RPG",
    "Ganhar coins através dos comandos diários e trabalho",
    "Participar de batalhas e aventuras no modo RPG",
    "Compartilhar conquistas e progressos com outros usuários",
    "Reportar bugs e sugerir melhorias para o bot",
    "Usar comandos de utilidade para facilitar a gestão do servidor",
    "Criar enquetes e interagir socialmente com outros membros"
  ]
};

export const forbiddenGuidelines: Guideline = {
  title: "O que não pode",
  items: [
    "Usar múltiplas contas (alts) para ganhar vantagens injustas",
    "Explorar bugs ou falhas do sistema para obter vantagens",
    "Fazer spam de comandos ou mensagens no servidor",
    "Compartilhar ou vender sua conta do bot",
    "Usar o bot para assediar, insultar ou prejudicar outros usuários",
    "Tentar hackear, modificar ou quebrar o funcionamento do bot",
    "Realizar transações fraudulentas ou tentativas de scam",
    "Criar servidores apenas para farmar coins sem uso legítimo",
    "Usar macros, bots ou scripts automatizados para executar comandos",
    "Violar os Termos de Serviço do Discord através do uso do bot"
  ]
};
