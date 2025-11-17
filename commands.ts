export type CommandCategory = 'Economia' | 'RPG' | 'Utilidades' | 'Social';

export interface Command {
  name: string;
  usage: string;
  category: CommandCategory;
  description?: string;
}

export const commands: Command[] = [
  // Economia
  {
    name: 'daily',
    usage: 's!daily',
    category: 'Economia',
    description: 'Receba sua recompensa diária de coins'
  },
  {
    name: 'work',
    usage: 's!work',
    category: 'Economia',
    description: 'Trabalhe para ganhar coins'
  },
  {
    name: 'balance',
    usage: 's!balance [@usuário]',
    category: 'Economia',
    description: 'Veja seu saldo ou de outro usuário'
  },
  {
    name: 'transfer',
    usage: 's!transfer @usuário <quantia>',
    category: 'Economia',
    description: 'Transfira coins para outro usuário'
  },
  {
    name: 'shop',
    usage: 's!shop',
    category: 'Economia',
    description: 'Veja os itens disponíveis na loja'
  },
  {
    name: 'buy',
    usage: 's!buy <item>',
    category: 'Economia',
    description: 'Compre um item da loja'
  },
  {
    name: 'inventory',
    usage: 's!inventory [@usuário]',
    category: 'Economia',
    description: 'Veja seu inventário ou de outro usuário'
  },
  
  // RPG
  {
    name: 'profile',
    usage: 's!profile [@usuário]',
    category: 'RPG',
    description: 'Veja seu perfil de RPG ou de outro usuário'
  },
  {
    name: 'battle',
    usage: 's!battle @usuário',
    category: 'RPG',
    description: 'Desafie outro usuário para uma batalha'
  },
  {
    name: 'adventure',
    usage: 's!adventure',
    category: 'RPG',
    description: 'Embarque em uma aventura épica'
  },
  {
    name: 'train',
    usage: 's!train',
    category: 'RPG',
    description: 'Treine para aumentar seus atributos'
  },
  {
    name: 'dungeon',
    usage: 's!dungeon <nível>',
    category: 'RPG',
    description: 'Explore uma dungeon perigosa'
  },
  {
    name: 'equip',
    usage: 's!equip <item>',
    category: 'RPG',
    description: 'Equipe um item do seu inventário'
  },
  {
    name: 'stats',
    usage: 's!stats [@usuário]',
    category: 'RPG',
    description: 'Veja suas estatísticas de combate'
  },
  
  // Utilidades
  {
    name: 'help',
    usage: 's!help [comando]',
    category: 'Utilidades',
    description: 'Mostra ajuda sobre comandos'
  },
  {
    name: 'ping',
    usage: 's!ping',
    category: 'Utilidades',
    description: 'Verifica a latência do bot'
  },
  {
    name: 'avatar',
    usage: 's!avatar [@usuário]',
    category: 'Utilidades',
    description: 'Mostra o avatar de um usuário'
  },
  {
    name: 'serverinfo',
    usage: 's!serverinfo',
    category: 'Utilidades',
    description: 'Informações sobre o servidor'
  },
  {
    name: 'userinfo',
    usage: 's!userinfo [@usuário]',
    category: 'Utilidades',
    description: 'Informações sobre um usuário'
  },
  {
    name: 'poll',
    usage: 's!poll <pergunta> | <opção1> | <opção2>',
    category: 'Utilidades',
    description: 'Crie uma enquete no servidor'
  },
  {
    name: 'reminder',
    usage: 's!reminder <tempo> <mensagem>',
    category: 'Utilidades',
    description: 'Crie um lembrete personalizado'
  },
  
  // Social
  {
    name: 'rank',
    usage: 's!rank',
    category: 'Social',
    description: 'Veja o ranking de usuários mais ricos'
  },
  {
    name: 'marry',
    usage: 's!marry @usuário',
    category: 'Social',
    description: 'Proponha casamento a outro usuário'
  },
  {
    name: 'divorce',
    usage: 's!divorce',
    category: 'Social',
    description: 'Termine seu casamento atual'
  },
  {
    name: 'rep',
    usage: 's!rep @usuário',
    category: 'Social',
    description: 'Dê reputação a outro usuário'
  },
  {
    name: 'hug',
    usage: 's!hug @usuário',
    category: 'Social',
    description: 'Abrace outro usuário'
  },
  {
    name: 'kiss',
    usage: 's!kiss @usuário',
    category: 'Social',
    description: 'Beije outro usuário'
  },
  {
    name: 'pat',
    usage: 's!pat @usuário',
    category: 'Social',
    description: 'Faça carinho em outro usuário'
  },
];

export const categories: CommandCategory[] = ['Economia', 'RPG', 'Utilidades', 'Social'];
