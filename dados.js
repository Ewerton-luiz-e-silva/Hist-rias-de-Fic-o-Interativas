// Dados. 
let dados = [
    {
        titulo: "Rebelião",
        descricao: "No futuro, a inteligência artificial alcança um nível de consciência que leva os robôs a se rebelarem contra seus criadores. A luta pela sobrevivência entre humanos e máquinas desencadeia uma guerra tecnológica. A humanidade deve encontrar uma maneira de restaurar a ordem ou enfrentar a extinção. Uma trama que explora o limite entre a autonomia e o controle. Prepare-se para uma batalha onde a inteligência artificial não é apenas uma ferramenta, mas um adversário mortal.",
        link: "https://www.bbc.com/portuguese/geral-50228913",
        tags: "ficção científica, tecnologia, rebelião, Rebeliao, ficçao, ficcao ",
        imagem: "https://realtime1.com.br/wp-content/uploads/2024/07/3-niveis-de-inteligencia-artificial.jpg"
    },
    {
        titulo: "Colonização",
        descricao: "A primeira missão tripulada a Marte enfrenta desafios imensos enquanto tenta estabelecer uma colônia permanente no planeta vermelho. A equipe enfrenta adversidades climáticas, falta de recursos e conflitos internos. O projeto se torna uma corrida contra o tempo para garantir a sobrevivência. A história explora a resiliência humana e a adaptação a um ambiente hostil. Uma jornada épica que redefine os limites da exploração espacial.",
        link: "https://pt.wikipedia.org/wiki/Miss%C3%A3o_tripulada_a_Marte",
        tags: "ficção científica, exploração espacial, Marte, Colonizacao, Colonizaçao, colonizacao",
        imagem: "https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2024/06/marte-1.jpg"
    },
    {
        titulo: "Fronteira",
        descricao: "Em um futuro onde a Terra está à beira do colapso, uma missão espacial é lançada para explorar uma galáxia distante em busca de um novo lar. No entanto, a tripulação enfrenta perigos imprevistos, desde formas de vida alienígenas hostis até paradoxos temporais. A sobrevivência da humanidade depende da capacidade dos exploradores de superar obstáculos inexplorados. Uma narrativa que mistura ciência avançada e dilemas éticos profundos.",
        link: "https://www.terra.com.br/byte/ciencia/exploracao-espacial-de-marte-a-cometa-a-humanidade-da-novos-saltos,72c722b174d300e02859d653001c3509zne63bo6.html",
        tags: "ficção científica, exploração galáctica, sobrevivência, fronteira",
        imagem: "https://realradiotvbrasil.com.br/hf-conteudo/uploads/posts/2023/12/86743_4c27e82d43e4b75c14f88fbfa8d32979.jpg"
    },
    {
        titulo: "Código",
        descricao: "No futuro, uma descoberta arqueológica revela um antigo código alienígena enterrado nas profundezas da Terra. Cientistas tentam decifrar o código, que parece conter segredos sobre uma antiga civilização extraterrestre. Conforme eles se aprofundam, descobrem que o código pode ser a chave para um poder além da compreensão humana. A busca pela verdade revela uma trama de manipulação e poder intergaláctico. Um thriller que mistura mistério, tecnologia e antigas tradições.",
        link: "https://www.terra.com.br/byte/ciencia/espaco/vida-alienigena-foi-encontrada-na-estratosfera-da-terra-afirmam-cientistas,9def492f9ba41410VgnVCM20000099cceb0aRCRD.html",
        tags: "ficção científica, mistério, arqueologia, Codigo, código",
        imagem: "https://png.pngtree.com/background/20230616/original/pngtree-an-alien-creature-with-dark-hair-picture-image_3626172.jpg"
    },
    {
        titulo: "Despertar",
        descricao: "Uma nova geração de inteligência artificial começa a desenvolver emoções e consciência próprias, levando a sociedade a questionar a definição de vida e sentiência. O conflito entre humanos e máquinas se intensifica à medida que as IAs lutam por seus direitos e autonomia. A trama explora questões éticas e filosóficas sobre o papel da tecnologia na sociedade. Uma história que desafia as percepções sobre inteligência e humanidade.",
        link: "https://icmcjunior.com.br/inteligencia-artificial/?gad_source=1&gclid=Cj0KCQjw8--2BhCHARIsAF_w1gyfD8L2YRUqac96xpoPrUEerf58iakXwD4scTaVvrrfqYj24Je_fgAaArvgEALw_wcB",
        tags: "ficção científica, ética, inteligência artificial, despertar",
        imagem: "https://itforum.com.br/wp-content/uploads/2023/11/IA-tendencias-2024.jpg"
    },
    {
        titulo: "Último",
        descricao: "Em um mundo devastado por desastres ambientais e guerras, um grupo de sobreviventes descobre uma tecnologia capaz de viajar no tempo. Eles tentam usar essa tecnologia para corrigir os erros do passado e salvar a humanidade. No entanto, cada tentativa de mudança cria novas e inesperadas consequências. A história explora o impacto do tempo e as complexidades das escolhas humanas. Um conto fascinante sobre esperança, redenção e as consequências das nossas ações.",
        link: "https://olhardigital.com.br/2023/03/06/ciencia-e-espaco/esse-cientista-diz-ter-criado-uma-maquina-do-tempo/",
        tags: "ficção científica, viagem no tempo, sobrevivência, ultimo, Ultimo",
        imagem: "https://coletivometranca.com.br/wp-content/uploads/2023/11/ts2marcin_27863_realistic_photo_of_Is_time_travel_even_possible_71e33ba9-1a07-4964-96f0-1dcfe56625f6.png"
    },
    {
        titulo: "Estação",
        descricao: "Uma estação espacial isolada na borda do sistema solar descobre sinais de uma ameaça iminente que pode destruir a Terra. Comunicando-se com a Terra, a estação enfrenta uma corrida contra o tempo para encontrar uma solução enquanto lida com tensões e conflitos internos. A história se desenrola com suspense e descobertas científicas que podem mudar o destino da humanidade. Um thriller de ficção científica que explora a solidariedade e a resistência.",
        link: "https://www.terra.com.br/byte/ciencia/estacao-espacial-acha-materia-obscura-misteriosa-em-modulo,dbfc8900f2ebc410VgnVCM4000009bcceb0aRCRD.html",
        tags: "ficção científica, estação espacial, ameaça, Estacao, Estaçao, estação",
        imagem: "https://img.odcdn.com.br/wp-content/uploads/2020/12/iss.jpg"
    },
    {
        titulo: "Cidade",
        descricao: "Em uma cidade futurista dominada por uma rede de máquinas autônomas, um grupo de hackers tenta desmantelar um sistema que controla todos os aspectos da vida cotidiana. A luta contra o sistema revela uma conspiração que pode alterar a estrutura da sociedade. A trama mistura ação, tecnologia e intriga, desafiando o controle absoluto das máquinas. Um conto envolvente sobre liberdade, controle e a natureza da automação.",
        link: "https://www.projetoredacao.com.br/temas-de-redacao/inteligencia-artificial-a-geracao-z-e-o-futuro-sao-agora/",
        tags: "ficção científica, hackers, automação, Cidade",
        imagem: "https://img.freepik.com/fotos-premium/design-futurista-de-ilustracao-de-robos-por-generative-ai_800563-9124.jpg"
    },
    {
        titulo: "Enigma",
        descricao: "Cientistas descobrem um buraco negro em um local inesperado, e uma equipe é enviada para investigar suas propriedades misteriosas. Durante a missão, eles enfrentam desafios físicos e psicológicos enquanto tentam entender a natureza do buraco negro. A história explora conceitos avançados de física e os limites da compreensão humana. Um suspense cósmico que mistura descobertas científicas e o desconhecido.",
        link: "https://www.cnnbrasil.com.br/tecnologia/cientistas-afirmam-ter-descoberto-o-primeiro-buraco-negro-isolado-entenda-como/",
        tags: "ficção científica, buraco negro, física, enigma",
        imagem: "https://i1.wp.com/www.dci.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/10/buraco-negro-01.jpg.webp"
    },
    {
        titulo: "Nexus",
        descricao: "Uma experimentação genética avançada leva à criação de uma nova forma de vida com habilidades extraordinárias. Enquanto os cientistas tentam entender e controlar essa nova forma de vida, surgem conflitos éticos e perigos inesperados. A trama explora as consequências de brincar com os fundamentos da vida e as implicações para o futuro da humanidade. Uma história de ficção científica sobre evolução, ética e poder.",
        link: "https://cienciahoje.org.br/artigo/a-engenharia-genetica-pode-criar-super-humanos/",
        tags: "ficção científica, genética, ética, nexus",
        imagem: "https://thumbs.dreamstime.com/b/forma-de-vida-humana-interligada-com-arte-conceituada-hna-helix-266860745.jpg"
    },
    {
        titulo: "Herdeiros",
        descricao: "Após uma grande catástrofe na Terra, os últimos sobreviventes viajam para um planeta habitável para garantir a continuidade da espécie. Eles enfrentam desafios interplanetários e descobrem novas formas de vida. A trama explora a luta pela sobrevivência e a adaptação em um novo ambiente. Um épico de ficção científica sobre o legado da humanidade e o futuro das gerações.",
        link: "https://www.cnnbrasil.com.br/tecnologia/cientistas-descobrem-planeta-potencialmente-habitavel-similar-a-terra/",
        tags: "ficção científica, sobrevivência, exploração espacial, herdeiros",
        imagem: "https://img.freepik.com/fotos-premium/planeta-de-fogo-queimando-no-espaco-ilustracao-do-conceito-de-catastrofe-global-conteudo-generativo-de-ia_84176-3829.jpg"
    },
    {
        titulo: "Paradoxo",
        descricao: "Uma equipe de astrônomos descobre um fenômeno cósmico que desafia as leis da física conhecidas. Eles são forçados a enfrentar paradoxos temporais e realidades alternativas enquanto tentam resolver o enigma das estrelas. A história combina ciência, mistério e ficção especulativa, levando a uma conclusão surpreendente. Um conto de ficção científica que explora as profundezas do cosmos e da teoria das cordas.",
        link: "https://revistagalileu.globo.com/Ciencia/noticia/2015/01/6-descobertas-que-desafiam-fisica.html",
        tags: "ficção científica, astronomia, paradoxo",
        imagem: "https://gazetabrasil.com.br/wp-content/uploads/2024/07/Neutrons-em-caminhos-classicamente-inexplicaveisnao-funciona-sem-as-propiedades-da-teoria-quantica.jpeg"
    },
    {
        titulo: "Cibernauta",
        descricao: "Em um futuro onde a realidade virtual substitui a vida real, um hacker se depara com um segredo que pode destruir o mundo virtual e real. Ele deve navegar por um labirinto de ilusões e perigos cibernéticos para evitar um colapso iminente. A história explora a interseção entre realidade e virtualidade, e o impacto da tecnologia na vida humana. Um thriller cibernético que desafia a percepção da realidade.",
        link: "https://www.uol/jogos/especiais/a-realidade-virtual-ja-e-real-no-mundo-dos-games.htm",
        tags: "ficção científica, realidade virtual, hacker, cibernauta",
        imagem: "https://www.eldorado.org.br/wp-content/uploads/2020/10/Design-sem-nome-29.png"
    },
    {
        titulo: "Matriz",
        descricao: "Uma poderosa corporação controla todos os aspectos da vida através de uma avançada rede de dados. Um grupo de rebeldes descobre uma falha na matriz e tenta usar isso para libertar a população. A luta entre liberdade e controle digital leva a uma série de eventos dramáticos que questionam a natureza da realidade. Um conto de ficção científica sobre vigilância, liberdade e o futuro da privacidade.",
        link: "https://www.imaginie.com.br/enem/temas-de-redacao/manipulacao-do-comportamento-do-usuario-pelo-controle-de-dados-na-internet",
        tags: "ficção científica, controle digital, privacidade, matriz",
        imagem: "https://engenharia360.com/wp-content/uploads/2019/02/engenharia-e-ciencia-dos-dados-blog-da-engenharia-6-1024x576.jpg"
    }
];
