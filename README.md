# Bourbon Lab

## Sobre o app

O **Bourbon Lab** é um aplicativo móvel dedicado a amantes de coquetéis. Ele oferece uma coleção de receitas exclusivas de drinks, com ênfase nos drinks clássicos e na arte da criação de coquetéis. O app permite aos usuários explorar receitas, criar suas próprias misturas e aprender sobre os ingredientes e técnicas utilizados na preparação dos drinks.

### Funcionalidades básicas:
- [x] Tela inicial com lista de drinks
- [ ] Pesquisa de receitas por nome ou ingredientes
- [ ] Visualização de detalhes de cada drink (ingredientes, modo de preparo, etc.)
- [ ] Favoritar receitas para fácil acesso
- [ ] Compartilhar receitas nas redes sociais
- [ ] Adicionar receitas personalizadas
- [ ] Histórico de drinks feitos

### Funcionalidades futuras:
- [ ] Sistema de recomendações de drinks baseado em preferências
- [ ] Integração com vídeo para tutoriais de preparação

## Protótipos de tela

Os protótipos das telas foram criados no Figma. Você pode visualizar os protótipos através do link abaixo:

[Figma - Protótipos de Bourbon Lab](https://www.figma.com/design/msB5Uf2mOe4Gc5yHVkH9FE/Untitled?node-id=0-1&t=TYLaBbNehmPvONna-1)


## Modelagem do banco

A modelagem do banco de dados foi realizada utilizando o Dbdiagram.io Abaixo está o link para a visualização pública do diagrama de entidade-relacionamento do banco de dados:

[Modelagem - Bourbon Lab](https://drive.google.com/file/d/1pJJLu4Wqq61TiAbxmHU9U7_XmsTa_c4i/view?usp=sharing)

O banco de dados será relacional, e a modelagem contempla as seguintes tabelas e suas relações:
- **Usuários**: Armazena os usuários do aplicativo
- **Favoritos**: Armazena os drinks favoritados pelos usuários
- **Histórico**: Registra os drinks consumidos pelos usuários

## Planejamento de sprints

O cronograma de desenvolvimento do aplicativo foi dividido em sprints, com a previsão de implementação de cada funcionalidade.

### Sprint 1 (Semana 1-2):
- [x] Criação da tela inicial e listagem de drinks
- [ ] Implementação da funcionalidade de pesquisa de drinks

### Sprint 2 (Semana 3-4):
- [ ] Desenvolvimento da tela de detalhes do drink
- [ ] Adição de funcionalidades de favoritos e compartilhamento de receitas

### Sprint 3 (Semana 5-6):
- [ ] Implementação de histórico de drinks
- [ ] Ajuste de porções de receitas

### Sprint 4 (Semana 7-8):
- [ ] Testes e correções de bugs
- [ ] Implementação de funcionalidades adicionais (ex. modo escuro, recomendações)

### Sprint 5 (Semana 9):
- [ ] Refinamento de UI/UX
- [ ] Preparação para publicação

## Atualizações desde o último checkpoint

Optei por utilizar o Nativewind para estilizar o app, onde tenho mais afinidade para desenvolver a parte visual, criei um componente de input dinâmico, onde o mesmo é uma modificação do componente já existente "TextInput", onde percebi que ficaria melhor para desenvolver, apliquei ele na tela principal "Home.tsx" utilizando do componente "SearchArea.tsx" onde fiz um campo de pesquisa passando dinamicamente os valores. Além disso, realizei a simulação das requisições com mocks, exibi duas situações, uma com dados e uma vindo um array vazio

[Link Para o Vídeo](https://youtu.be/1NTJH36jG_E)
