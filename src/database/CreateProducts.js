import { ObjectId } from "mongodb"

  const productDocument = [
      {
        _id: new ObjectId(),
        title: "Mesa de Jantar Retangular",
        category: "mesa",
        price: { cents: 8387, currency: "R$" }, 
        portion: "10x de R$887,70",
        description: "Seamless Bikini Panty. Developed in polyamide with elastane that provides comfort and durability. Features a classic bikini cut with intermediate width on the sides and seamless design, not leaving marks under clothing. In the rush of daily life, it's necessary to have an intimate piece that not only provides comfort, but also allows for more security and freedom of movement, and this piece is ideal!",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2022/11/Mesa-de-Jantar-Retangular-Arabela-Branca-e1668788726281.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2022/11/Conjunto-Arabela-500x355.jpg",
          
        ],
        
      },
      
      {
        _id: new ObjectId(),
        title: "Mesa de Centro",
        category: "mesa",
        price: { cents: 2285, currency: "R$" }, 
        portion: "10x de R$228,50",
        description: "Uma mesa cheia de estilo e personalidade, a Mesa de Centro Cliff só tem a agregar na decoração.Com estrutura extremamente resistente em aço carbono, ela possui acabamento em pintura metalizada no tom Dourado.O tampo redondo em vidro transparente, possui 4mm de espessura.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2023/05/Mesa-de-centro-redonda-Cliff-e1683060802416-500x348.webp", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2023/05/Mesa-de-centro-redonda-Cliff-e1683060802416-500x348.webp",
          
        ],
        
      },

      {
        _id: new ObjectId(),
        title: "Conjunto de Mesas",
        category: "mesa",
        price: { cents: 2618, currency: "R$" }, 
        portion: "10x de R$261,80",
        description: "Quando o assunto é decorar com luxo e simplicidade simultaneamente, o Conjunto de Mesas de Centro Vegas pode ser um grande aliado.Fabricadas em Jequitibá Natural esse conjunto apresenta a qualidade e resistência de um móvel de alto padrão.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2023/02/Conjunto-de-Mesas-de-Centro-Vegas-e1675866483180-500x262.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2023/02/Conjunto-de-Mesas-de-Centro-Vegas-2-500x333.jpg",
          "https://livdecora.com.br/wp-content/uploads/2023/02/Conjunto-de-Mesas-de-Centro-Vegas-3-e1675864949323-500x344.jpg",
          "https://livdecora.com.br/wp-content/uploads/2023/02/Conjunto-de-Mesas-de-Centro-Vegas-4-500x333.jpg",
          
        ],
        
      },

      {
        _id: new ObjectId(),
        title: "Mesa de Centro Lincoln  ",
        category: "mesa",
        price: { cents: 4823, currency: "R$" }, 
        portion: "10x de R$482,30",
        description: "Um móvel de extrema beleza e qualidade, a Mesa de Centro Lincoln se destacará na decoração.Ela possui estrutura em MDF prensado e acabamento laminado em Carvalho.Seu tom e seu design diferenciado, criam a peça ideal para compor projetos de alto padrão.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2023/01/Mesa-de-Centro-Lincoln-4-e1674755313801-500x248.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2023/01/Mesa-de-Centro-Lincoln-3-e1674755277638-500x227.jpg",
          "https://livdecora.com.br/wp-content/uploads/2023/01/Mesa-de-Centro-Lincoln-4-e1674755313801-500x248.jpg",
        
          
        ],
        
      },

      {
        _id: new ObjectId(),
        title: "Mesa Khalin",
        category: "mesa",
        price: { cents: 5682, currency: "R$" }, 
        portion: "10x de R$568,20",
        description: "Seamless Bikini Panty. Developed in polyamide with elastane that provides comfort and durability. Features a classic bikini cut with intermediate width on the sides and seamless design, not leaving marks under clothing. In the rush of daily life, it's necessary to have an intimate piece that not only provides comfort, but also allows for more security and freedom of movement, and this piece is ideal!",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2023/01/Mesa-de-Centro-Khalin-2-e1673534690477-500x224.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2023/01/Mesa-de-Centro-Khalin-e1673534596995-500x225.jpg",
          
        ],
        
      },

      {
        _id: new ObjectId(),
        title: "Mesa de Cabeceira Phiajo ",
        category: "mesa",
        price: { cents: 4614, currency: "R$" }, 
        portion: "10x de R$461,40",
        description: "A Mesa de Cabeceira Phiajo oferece maior funcionalidade ao ambiente, além de um toque charmoso na decoração.Ela une em sua composição, aço carbono e MDF, criando uma peça incrível.Com acabamento em laqueado no tom Grafite, ela será o diferencial na decoração.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2023/02/Mesa-de-Cabeceira-Toronto-e1677255373899-500x379.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2023/02/Mesa-de-Cabeceira-Toronto-e1677255373899-500x379.jpg",
          
        ],
        
      },

      {
        _id: new ObjectId(),
        title: "Mesa Alta Bistrô",
        category: "mesa",
        price: { cents: 2159, currency: "R$" }, 
        portion: "10x de R$215,90",
        description: "A Mesa Bistrô Vogue é um móvel muito funcional e bonito, ideal para transformar sua área externa em um espaço de descontração e conforto para a família e amigos.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/09/Mesa-Alta-Bistro-Platner-Tampo-Madeira-e1651096848398.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/09/Mesa-Alta-Bistro-Platner-Tampo-Madeira-e1651096848398.jpg",
          
        ],
        
      },

      {
        _id: new ObjectId(),
        title: "Mesa Lateral Redonda",
        category: "mesa",
        price: { cents: 1106, currency: "R$" }, 
        portion: "10x de R$110,60",
        description: "A Mesa Lateral Redonda  é um móvel versátil que insere charme em decorações de alto padrão.Fabricado em madeira maciça e MDF prensado e laminado, ela possui acabamento em Carvalho Natural.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2022/06/Mesa-Lateral-Redonda-Cone-Branca-2-e1655479040545.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2022/06/Mesa-Lateral-Redonda-Cone-Branca-2-e1655479040545.jpg",
          
        ],
        
      },

      {
        _id: new ObjectId(),
        title: "Mesa de Jantar Giratória",
        category: "mesa",
        price: { cents: 6291, currency: "R$" }, 
        portion: "10x de R$630",
        description: "A Mesa de Jantar Redonda Cone agregará praticidade ao ambiente com seu tampo central giratório.Estruturando decorações de alta patente, ela é sofisticada e poderá compor projetos contemporâneos.O móvel está disponível em cinco tamanhos para se adequar a salas de jantar amplas ou compactas.Sua base é fabricada em madeira Carvalho tingida tom Castanho, e o tampo em MDF com pintura micro texturizada na cor Branco.Ela possui tampo central giratório, com vidro sobreposto de 4mm pintado branco.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/08/Mesa-de-Jantar-Redonda-Giratoria-Cone-e1628169524411.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/08/Mesa-de-Jantar-Redonda-Giratoria-Cone-e1628169524411.jpg",
          
        ],
        
      },

      {
        _id: new ObjectId(),
        title: "Mesa com Puff",
        category: "mesa",
        price: { cents: 4418, currency: "R$" }, 
        portion: "10x de R$441,80",
        description: "Com o design diferente das mesas de centro comuns, a Mesa de Centro com Puff Major Couro se destacará na decoração pela funcionalidade e beleza. Possui variação em suas medidas para se encaixar em decorações amplas ou compactas.O tampo é fabricado em MDF com lâmina Carvalho tingido no tom Castanho, e a base é composta por aço carbono com pintura epóxi na cor Preto. Possui puffs laterais com alças e revestimento em couro natural na cor Verde.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/08/Mesa-de-Centro-com-Puff-Major-Couro-4-e1628260570965-300x225.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/08/Mesa-de-Centro-com-Puff-Major-Couro-4-e1628260570965-300x225.jpg",
          
        ],
        
      },

      {
        _id: new ObjectId(),
        title: "Sofá Angel",
        category: "sofa",
        price: { cents: 6523, currency: "R$" }, 
        portion: "10x de R$652,30",
        description: "Seamless Bikini Panty. Developed in polyamide with elastane that provides comfort and durability. Features a classic bikini cut with intermediate width on the sides and seamless design, not leaving marks under clothing. In the rush of daily life, it's necessary to have an intimate piece that not only provides comfort, but also allows for more security and freedom of movement, and this piece is ideal!",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Sofa-Angel-3-Lugares-com-Mesa-Madeira-cf24c23c2af9dba48067551164843384-300x121.jpg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Sofa-Angel-3-Lugares-com-Mesa-Madeira-7f2e6681d884761e2057fbebe0e7379f-e1620399348566-500x223.jpg",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Sofa-Angel-3-Lugares-com-Mesa-Madeira-cf24c23c2af9dba48067551164843384-300x121.jpg"
         
        ],
      },

      {
        _id: new ObjectId(),
        title: "Sofá de Canto",
        category: "sofa",
        price: { cents: 7550, currency: "R$" }, 
        portion: "10x de R$755",
        description: "O Sofá de Canto Pagginié o móvel perfeito para aqueles que buscam versatilidade e beleza na hora de decorar salas de estar. Disponível em cinco medidas, ele é uma ótima aposta para cômodos pequenos, amplos ou ambientes integrados. Alinhando neutralidade com elegância, o Sofá Paggini é todo revestido com tecido em linho Cinza Claro. Seu assento possui a excelência da espuma HR 45, e o encosto é composto por almofadas soltas em fibra siliconizada. A estabilidade do móvel, está presente em seu requadro e pés em alumínio pintado na cor Master Grafite.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/07/Sofa-de-Canto-Paggini-3-e1627048790131.jpg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/07/Sofa-de-Canto-Paggini-500x333.jpg",
          "https://livdecora.com.br/wp-content/uploads/2021/07/Sofa-de-Canto-Paggini-2-500x333.jpg",
          "https://livdecora.com.br/wp-content/uploads/2021/07/Sofa-de-Canto-Paggini-3-e1627048790131.jpg",
        
        ],
      },

      {
        _id: new ObjectId(),
        title: "Sofá Motorizado",
        category: "sofa",
        price: { cents: 20500, currency: "R$" }, 
        portion: "10x de R$2050",
        description: "Assinado pelo renomado designer Sergio Batista, que já participou de feiras internacionais como iSaloni em Milão, o Sofá Motorizado Amaya imprime extrema elegância, conforto e estilo.Além de ter a função touch para mover de forma elétrica seu encosto, ainda pode ser adaptado para obedecer a famosa Alexa (caixa de som muito usada em todo o mundo).Possui linda Mesa Lateral com acabamento impecável em lâmina de Louro Feijó e detalhes sofisticados em Couro Natural.Sua base singela e elegante, possui a resistência do aço carbono com acabamento esmaltado na cor Ouro.O assento e encosto são compostos por espumas soft e ecosoft de alta densidade, proporcionando qualidade e durabilidade extrema ao móvel. Além de promover o aconchego necessário para tornar o ambiente incrível!",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2022/08/Sofa-Motorizado-Amaya-2-e1659704351123-500x146.jpg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2022/08/Sofa-Motorizado-Amaya-6-e1659706547350-500x272.jpg",
          "https://livdecora.com.br/wp-content/uploads/2022/08/Sofa-Motorizado-Amaya-5-500x272.jpg",
          "https://livdecora.com.br/wp-content/uploads/2022/08/Sofa-Motorizado-Amaya-3-e1659706866370-500x281.jpg",
          "https://livdecora.com.br/wp-content/uploads/2022/08/Sofa-Motorizado-Amaya-e1659706957936-500x343.jpg",
        ],
      },

      {
        _id: new ObjectId(),
        title: "Sofá de Canto com Puff",
        category: "sofa",
        price: { cents: 4015, currency: "R$" }, 
        portion: "10x de R$402",
        description: "O Sofá Payol possui estofamento em tecido veludo com toque macio na cor verde-esmeralda. Seu estofamento é todo feito artesanalmente em acabamento botonê.Sua base em madeira complementa o móvel com todo estilo.Seus traços com design contemporâneo deixa a peça sofisticada e elegante. Ou seja, um sofá para contemplar um ambiente com extremo aconchego.Composto com chaise o puff, este sofá é perfeito para você que procura um móvel confortável que lhe transmita relaxamento e bem-estar.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Sofa-com-Chaise-e-Puff-Payol-6c164f32b3a310251dc272b2173e0f44-300x133.jpg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Sofa-com-Chaise-e-Puff-Payol-baa97b7d8320a1422b0abd79a54ad398-500x252.jpg",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Sofa-com-Chaise-e-Puff-Payol-6c164f32b3a310251dc272b2173e0f44-300x133.jpg",
         
        ],
      },

      {
        _id: new ObjectId(),
        title: "Sofá Cama",
        category: "sofa",
        price: { cents: 4202, currency: "R$" }, 
        portion: "10x de R$420,20",
        description: "O Sofá Cama Tânie é aquele móvel multifuncional, que todo mundo deseja ter em casa, e ainda por cima é confortável e prático.Com elegância e estima, ele possui lindos detalhes em Couro Sintético e almofadas decorativas em sua composição.Sua funcionalidade como cama e o conforto que suas camadas de alta densidade emitem, é tudo que o ambiente precisa.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2022/07/Sofa-Cama-Tanie-scaled-e1658509191502-500x327.jpg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2022/07/Sofa-Cama-Tanie-2-e1658509108886-500x259.jpg",
          "https://livdecora.com.br/wp-content/uploads/2022/07/Sofa-Cama-Tanie-scaled-e1658509191502-500x327.jpg",
         
        ],
      },


      {
        _id: new ObjectId(),
        title: "Sofá Cinza Morano",
        category: "sofa",
        price: { cents: 5867, currency: "R$" }, 
        portion: "10x de R$586,70",
        description: "Elegância e maestria se fazem presentes no design do Sofá Cinza Morano. Um móvel de alto padrão, ele possui traços únicos e conforto extremo que se destacarão na sala de estar.O Sofá Morano pode ser o grande diferencial em seu ambiente. Com seus braços em madeira que se ligam aos pés torneados, ele agrega beleza à decoração. Suas camadas de conforto preenchidas por espuma de média densidade, espuma de alta densidade e espuma ecosoft, proporcionam as melhores sensações na hora do seu descanso.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2022/07/Sofa-Cinza-Morano-e1658249215394-500x248.jpg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2022/07/Sofa-Cinza-Morano-2-e1658249154206.jpg",
          "https://livdecora.com.br/wp-content/uploads/2022/07/Sofa-Cinza-Morano-e1658249215394-500x248.jpg",
        ],
      },

      {
        _id: new ObjectId(),
        title: "Sofá Delphin",
        category: "sofa",
        price: { cents: 6430, currency: "R$" }, 
        portion: "10x de R$643",
        description: "O Sofá Delphin esbanja conforto e requinte em decorações de alto padrão.Desde o estofamento, até o revestimento, ele foi pensado para compor salas de estar, agregando aconchego extremo.Sua estrutura interna e externa, reúnem o que há de melhor em quesito de matéria-prima, fazendo jus a cada traço da peça.O tecido em Boucle é o queridinho do momento, e sua tonalidade, permite que o Sofá Delphin componha desde ambientes neutros, até os mais coloridos.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2022/09/Sofa-Delphin-3-500x213.jpg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2022/09/Sofa-Delphin-3-500x213.jpg",
          "https://livdecora.com.br/wp-content/uploads/2022/09/Sofa-Delphin-4-e1663958679510.jpg",
       
        ],
      },

      {
        _id: new ObjectId(),
        title: "Sofá Verde Piettro",
        category: "sofa",
        price: { cents: 5084, currency: "R$" }, 
        portion: "10x de R$508,40",
        description: "Ideal para quem procura uma peça chave para seu décor, o Sofá Verde Piettro possui tons marcantes e traços avassaladores. Seu design robusto e cheio de estilo se encaixa em variados projetos e estilos de decoração.Ele possui estrutura em madeira reflorestada, tornando o móvel duradouro e estável. Seu estofamento de alta densidade e tecido em toque aveludado na cor Verde, trazem um acabamento impecável de um móvel que ficará por muito tempo com você.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/05/Sofa-Verde-Piettro-500x297.jpeg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/05/Sofa-Verde-Piettro-500x297.jpeg",
         
        ],
      },


      {
        _id: new ObjectId(),
        title: "Sofá Cama Jessia",
        category: "sofa",
        price: { cents: 5000, currency: "R$" }, 
        portion: "10x de R$500",
        description: "O Sofá Cama Jéssia é em específico uma mobília funcional, ideal para compor projetos que exigem versatilidade e conforto em simultâneo. Seu tom Azul quebra a monotonia de ambientes sem vida, criando uma decoração interativa e bem alinhada.Com cama retrátil, articulação reclinável e rodízios, o Sofá Jéssia é extremamente funcional. Seu estofamento de alta qualidade é composto por Espuma D30 Soft e almofadas em Fibra siliconizada. O móvel possui articulações zincadas que não enferrujam.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2022/05/Sofa-Cama-Jessia-1-2-e1653415214354-500x234.jpg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2022/05/Sofa-Cama-Jessia_-e1653415169159-500x223.jpg",
          "https://livdecora.com.br/wp-content/uploads/2022/05/Sofa-Cama-Jessia-2-2-e1653415256551-500x234.jpg",
          "https://livdecora.com.br/wp-content/uploads/2022/05/Sofa-Cama-Jessia-1-2-e1653415214354-500x234.jpg",
         
        ],
      },



      {
        _id: new ObjectId(),
        title: "Sofá Azul Cochi",
        category: "sofa",
        price: { cents: 4922, currency: "R$" }, 
        portion: "10x de R$492,20",
        description: "Perfeito para quem procura um móvel de qualidade que seja o atrativo de seu décor, o Sofá Azul Cochi veio para transformar a sua decoração com todo seu charme e estilo. Fabricado com material de alto padrão ele possui o design bipartido e o acabamento impecável com seu tecido em toque macio.Sua base em metal com pintura epóxi e seu estofamento de alta resiliência, podem compor diversos cômodos de sua casa levando aconchego e leveza na hora de receber sua familia ou seus amigos.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/05/Sofa-Azul-Cochi-500x203.jpeg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/05/Sofa-Azul-Cochi-500x203.jpeg",
          
        ],
      },

      

      {
        _id: new ObjectId(),
        title: "Luminária de Mesa Black",
        category: "luminaria",
        price: { cents: 350, currency: "R$" }, 
        portion: "10x de R$35",
        description: " A Luminária de Mesa Black é um lindo objeto decorativo que agregará funcionalidade a sua decoração. Ela possui em sua composição a mistura de materiais como madeira, metal e vidro formando uma luminária de alto padrão de qualidade.Sua versatilidade está na facilidade que seu tamanho compacto se encaixa em ambientes, e também por ela ser uma peça Bivolt. Compatível com lâmpadas E27, seu suporte é preso a uma haste de metal na cor dourado, fixa a base de madeira e envolvida pela cúpula de tecido Cotton Black.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/05/Luminaria-de-Mesa-Black-Chelly-500x555.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/05/Luminaria-de-Mesa-Black-Chelly-500x555.jpg",
        
        ],
      },

      {
        _id: new ObjectId(),
        title: "Luminária de Mesa Posh",
        category: "luminaria",
        price: { cents: 1650, currency: "R$" }, 
        portion: "10x de R$165",
        description: " A Luminária de Mesa Posh fica ótima em escritórios e salas de estar. É sofisticada e muito charmosa, apresenta um visual elegante para compor espaços e tem design moderno e atemporal. É um item importante para complementar a decoração da casa com charme e com o aconchego que uma iluminação proporciona. ",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Posh-Preta-73bdcd4423d06a952865a43147edde10.png", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Posh-Preta-73bdcd4423d06a952865a43147edde10.png",
         
        
        ],
      },

      {
        _id: new ObjectId(),
        title: "Luminária de Mesa Work",
        category: "luminaria",
        price: { cents: 3837, currency: "R$" }, 
        portion: "10x de R$383,70",
        description: " A Luminária  Work é perfeita para compor uma mesa de escritório. Mas ela poderá estruturar com muito estilo também outros ambientes, como o quarto, sala de estar ou aquele cantinho de leitura.Possui design atemporal, leve e limpo. Traduz elegância e sofisticação pelo seu acabamento de alta qualidade em metal na cor ouro envelhecido. Luminária de mesa de alto padrão e perfeito acabamento, altura média de 60cm e diâmetro de 14cm.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Work-b6741aaac7c5bf0f2006b2affe228345-300x200.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Work-fbd09f662523739ee6ce1f943c38da3f-500x400.jpg",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Work-d86f04ce3d350adb8946a80846a8d187-500x334.jpg",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Work-b6741aaac7c5bf0f2006b2affe228345-500x334.jpg",
         
        ],
      },

      {
        _id: new ObjectId(),
        title: "Luminária de Parede Arandela",
        category: "luminaria",
        price: { cents: 785, currency: "R$" }, 
        portion: "10x de R$78,50",
        description: " Seu design linear e aramado é inspirado no estilo dos galpões e estúdios que eram transformados em apartamentos integrados entre os anos de 1950 e 1970, em Nova York. No meio de espaços contemporâneos e cosmopolitas, com tijolos e tubulações aparentes, madeira, metal e concreto, a peça se destaca e dá um toque especial à composição. É um acessório completo, pois oferece funcionalidade e beleza à decoração. A Luminária Anthony possui acabamento com pintura térmica, proporcionando uma peça moderna e com alta durabilidade. E para quem gosta de cores, ele está disponível em uma coleção linda, que vai deixar sua casa alegre e descolada. Combina com decorações industriais, contemporâneas e modernas e é responsável por dar aquele toque especial na decoração e na iluminação, deixando o ambiente ainda mais agradável. É um modelo que traz modernidade ao ambiente. A iluminação é parte fundamental em qualquer casa. Ela é capaz de trazer aquela sensação de bem-estar ou ainda de impactar os convidados por deixar o ambiente mais bonito e aconchegante. ",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Parede-Arandela-Anthony-77f50884552842d1d497c90dda79db82-500x500.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Parede-Arandela-Anthony-3795b2d92b4b2bf85eb127fd8365f78b-400x400.jpg",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Parede-Arandela-Anthony-77f50884552842d1d497c90dda79db82-500x500.jpg", 
        
        ],
      },

      {
        _id: new ObjectId(),
        title: "Luminária de Braço Curto",
        category: "luminaria",
        price: { cents: 1225, currency: "R$" }, 
        portion: "10x de R$122,50",
        description: " Tornará o espaço mais confortável com sua iluminação direcionada e agradável. Encaixa-se bem em diversos ambientes, deixando-o mais aconchegante e iluminado, além de ser prática e funcional, pois não há necessidade de um móvel de apoio.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Parede-Arandela-Braco-Curvo-378974d6f20ae7c85dfbfbe7cc2c9c99.png", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Parede-Arandela-Braco-Curvo-378974d6f20ae7c85dfbfbe7cc2c9c99.png",
        
        ],
      },


      {
        _id: new ObjectId(),
        title: "Luminária de Piso Marshal",
        category: "luminaria",
        price: { cents: 3563, currency: "R$" }, 
        portion: "10x de R$356,30",
        description: " A Luminária de Piso Marshal é robusta e toma espaço de circulação, perfeita para quem tem ambientes livres para explorar a decoração.Com cúpula em madeira, sua iluminação fica mais centralizada a um cômodo, podendo ser posicionada próximo a paredes ou móveis com uso contínuo.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2022/08/Luminaria-de-Piso-Marshal-1-500x435.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2022/08/Luminaria-de-Piso-Marshal-e1661193631781.jpg",
          "https://livdecora.com.br/wp-content/uploads/2022/08/Luminaria-de-Piso-Marshal-1-500x435.jpg", 
         " https://livdecora.com.br/wp-content/uploads/2022/08/Luminaria-de-Piso-Marshal-2-399x400.jpg"
        
        ],
      },


      {
        _id: new ObjectId(),
        title: "Luminária de Piso Palha",
        category: "luminaria",
        price: { cents: 2888, currency: "R$" }, 
        portion: "10x de R$288,80",
        description: " A Luminária de Piso Palha Natural Lia é linda, e mistura dois estilos de decoração, se encaixando perfeitamente neles e em diversos outros. O clássico toque da palha natural, com a modernidade da haste em metal, criam a peça ideal para decorar com personalidade.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2022/10/Luminaria-de-Piso-Palha-Natural-Lia-3-500x414.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2022/10/Luminaria-de-Piso-Palha-Natural-Lia-3-500x414.jpg",
        
        ],
      },

      {
        _id: new ObjectId(),
        title: "Luminária de Teto",
        category: "luminaria",
        price: { cents: 1550, currency: "R$" }, 
        portion: "10x de R$155",
        description: "A Luminária de Teto Pendente Lyra Trio é robusta e chama a atenção onde estiver. Ela possui design moderno, e iluminação potente.Suas cúpulas em vidro cristal e a proximidade das esferas, permitem o alcance maior da luz projetada para iluminar todo ambiente.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2022/10/Luminaria-de-Teto-Pendente-Lyra-Trio-3-e1666189995167-301x500.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2022/10/Luminaria-de-Teto-Pendente-Lyra-Trio-376x400.jpg",
          "https://livdecora.com.br/wp-content/uploads/2022/10/Luminaria-de-Teto-Pendente-Lyra-Trio-3-e1666189995167-301x500.jpg", 
          
        
        ],
      },

      {
        _id: new ObjectId(),
        title: "Luminária de Teto Luxo",
        category: "luminaria",
        price: { cents: 3251, currency: "R$" }, 
        portion: "10x de R$325,10",
        description: " Estilo, beleza, funcionalidade e personalidade traduzem a Luminária de Teto Pendente Link. Uma peça sofisticada, para diversos estilos de decoração.Elaborada com estrutura em madeira de Jequitibá natural, proporcionando uma iluminação difusa e clara. As luminárias pendentes, são peças que além de iluminar, decoram o ambiente.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Teto-Pendente-Link-63e93cc6f5222c52f7197624f8cd4016-500x334.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Teto-Pendente-Link-63e93cc6f5222c52f7197624f8cd4016-500x334.jpg",
        
        ],
      },

      {
        _id: new ObjectId(),
        title: "Luminária de Teto Forms",
        category: "luminaria",
        price: { cents: 505, currency: "R$" }, 
        portion: "10x de R$50,50",
        description: " Com design linear, se adapta perfeitamente em diversos espaços e estilos. O pendente possui acabamento em metal na cor preto, favorecendo a composição da peça em diversos estilos de decoração.Toda fabricada em metal com acabamento em pintura térmica, ela possui canopla preta em plástico injetado. O fio com 100cm na cor preto é regulável, além do produto ser bivolt é muito funcional. ",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Teto-Pendente-Industrial-Forms-One-cbe475e244ad7fe86fb6ebff0b593e20-297x300.png", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Teto-Pendente-Industrial-Forms-One-cbe475e244ad7fe86fb6ebff0b593e20-297x300.png",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Teto-Pendente-Industrial-Forms-One-b6d4dc7145cbf7294bf65bfd4f40ae7e.png",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Teto-Pendente-Industrial-Forms-One-8bb5e515ce7e557e3ca1acaef2fc1498.png",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Teto-Pendente-Industrial-Forms-One-d88d20461e1dcdae936dc6cd5e3a5e41.png",
        ],
      },




      {
        _id: new ObjectId(),
        title: "Cadeira Infantil",
        category: "cadeira",
        price: { cents: 530, currency: "R$" },  
        portion: "10x de R$53",
        description: "Com ela, as crianças poderão sentar e fazer suas atividades cotidianas com muito estilo e conforto. O quarto é um espaço onde a criança brinca, aprende, dorme e faz diversas atividades, por isso o tamanho, cor e design dos móveis desempenham papéis importantes. Tudo no quarto de uma criança influencia na sua criatividade.É uma fusão de três modelos de designer distintos – Arne Jacobsen, Charles Eames e Eero Saarinen – criando algo inteiramente novo, simultaneamente clássico e contemporâneo. É um novo ícone no design mobiliário. Com cores alegres e vibrantes acaba se tornando o ponto central do ambiente.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Infantil-Allegra-40d5f17579526ae22c57a6c6e0b4062b-300x300.jpg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Infantil-Allegra-1322f63099a3efef330f523e857d1c49-400x400.jpg",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Infantil-Allegra-40d5f17579526ae22c57a6c6e0b4062b-300x300.jpg",
       
        ],
      },

      {
        _id: new ObjectId(),
        title: "Poltrona Charles",
        category: "cadeira",
        price: { cents: 5556, currency: "R$" }, 
        portion: "10x de R$555,60",
        description: "Além de linda e muito confortável, a Poltrona Charles Eames é cheia de personalidade e possui uma originalidade e conforto único.Não é à toa que permanece no cenário decorativo com relevância até hoje.A versão executiva da poltrona veio para deixar seu espaço de trabalho com conforto e design!É um clássico e está entre os mais expressivos e colecionáveis designs de mobílias.Um dos fatores que fazem a poltrona Charles Eames ser tão especial é a atenção aos detalhes. Sua estrutura ergonômica transfere conforto extremo à peça.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Poltrona-Charles-Eames-Office-em-Couro-Ecologico-308ddb2fbe4b38d8ba0a4d10d0173918-e1653929446252.jpg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Poltrona-Charles-Eames-Office-em-Couro-Ecologico-efef353c22afe5e4b117fda9fa8d5301-e1653929355174.jpg",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Poltrona-Charles-Eames-Office-em-Couro-Ecologico-308ddb2fbe4b38d8ba0a4d10d0173918-e1653929446252.jpg",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Poltrona-Charles-Eames-Office-em-Couro-Ecologico-6b5aa3662a918f21a5f270984bb62a91-400x400.jpg",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Poltrona-Charles-Eames-Office-em-Couro-Ecologico-b7e08558b5743dcb92bc0afc52b49f76-400x400.jpg",
       
        ],
      },

      {
        _id: new ObjectId(),
        title: "Cadeira de Jantar Ellos",
        category: "cadeira",
        price: { cents: 2393, currency: "R$" },
        portion: "10x de R$239,30", 
        description: "A cadeira é bem-vinda em diversos cômodos da casa. Ela pode ser inserida na sala de jantar, em uma área gourmet ou até mesmo na sala de estar.Usada como peça chave na decoração de ambientes de lazer, a Cadeira Ellos será o ponto alto para uma decoração bem estruturada.Suas curvas garantem conforto para momentos de refeições ou confraternizações.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2023/04/Cadeira-de-Jantar-Ellos-2-e1681408620179.jpg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2023/04/Cadeira-de-Jantar-Ellos-3-e1681408576584.jpg",
          "https://livdecora.com.br/wp-content/uploads/2023/04/Cadeira-de-Jantar-Ellos-2-e1681408620179.jpg",
         
        ],
      },


      {
        _id: new ObjectId(),
        title: "Cadeira Zandowsky",
        category: "cadeira",
        price: { cents: 530, currency: "R$" }, 
        portion: "10x de R$53",
        description: "A Cadeira Zandowsky se destaca pela sua elegância e qualidade. Fabricada com matéria-prima de alto padrão, ela possui base em madeira de Jequitibá, assento e encosto com estofamento de alta qualidade.Seu revestimento em linho Cinza, permite que a peça componha projetos do clássico ao contemporâneo com muito estilo.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2022/11/Cadeira-Zandowsky-3-e1668086906319-335x400.jpg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2022/11/Cadeira-Zandowsky-2-e1668086141774-412x500.jpg",
          "https://livdecora.com.br/wp-content/uploads/2022/11/Cadeira-Zandowsky-3-e1668086906319-335x400.jpg",
       
        ],
      },

      {
        _id: new ObjectId(),
        title: "Cadeira Platner",
        category: "cadeira",
        price: { cents: 4904, currency: "R$" }, 
        portion: "10x de R$490,40",
        description: "A Cadeira Platner compõe com perfeição uma sala de estar, promovendo conforto e exuberância na decoração.Ela encaixa-se também em ambientes como o quarto ou varanda.Possui base em aço inox e pintura epóxi na cor dourada. Seu assento e encosto é elaborado com espuma densidade 28, tornando a peça firme e com alta durabilidade.Ela é revestida em tecido toque aveludado na cor azul, trazendo acabamento impecável à peça.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Warren-Platner-Dourada-53c58fa1c417c6711f47665960602311-300x280.jpg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Warren-Platner-Dourada-53c58fa1c417c6711f47665960602311-300x280.jpg",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Warren-Platner-Dourada-783bddae3b60a7aa9262299d1474f710-e1621348682595-437x400.jpg",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Warren-Platner-Dourada-a065044ddaa8c45d1a543445455cdcdf-500x364.png",
       
        ],
      },

      {
        _id: new ObjectId(),
        title: "Cadeira Empilhável ",
        category: "cadeira",
        price: { cents: 535, currency: "R$" }, 
        portion: "10x de R$53,50",
        description: "Estruturando à decoração de  espaços como sala de jantar, área gourmet ou sala de estar, a Cadeira Empilhável Laminada Yumi possui extrema funcionalidade. Seu acabamento impecável é composto pela combinação da qualidade e beleza de um móvel de alto padrão.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/07/Cadeira-Empilhavel-Laminada-Yumi-2-e1628022880410-300x300.jpeg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/07/Cadeira-Empilhavel-Laminada-Yumi-2-e1628022880410-300x300.jpeg",
          "https://livdecora.com.br/wp-content/uploads/2021/07/Cadeira-Empilhavel-Laminada-Yumi-1-400x400.jpeg",
       
        ],
      },

      {
        _id: new ObjectId(),
        title: "Cadeira de Escritório",
        category: "cadeira",
        price: { cents: 1655, currency: "R$" },
        portion: "10x de R$165,50", 
        description: "O seu local de trabalho reflete estilo, personalidade, gostos — ou seja, a forma como esse ambiente está planejado diz muito sobre você e seu jeito de lidar com as demandas do dia a dia. Por isso, para causar um sentimento positivo em seus clientes, invista em uma boa decoração, que tenha a ver com o seu ramo de atuação e com a sua maneira de trabalhar. ",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2022/05/Cadeira-de-Escritorio-Lerott-e1654019877596.jpg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2022/05/Cadeira-de-Escritorio-Lerott-e1654019877596.jpg",
      
        ],
      },

      {
        _id: new ObjectId(),
        title: "Cadeira Confi",
        category: "cadeira",
        price: { cents: 2033, currency: "R$" }, 
        portion: "10x de R$203,30",
        description: "A Cadeira Confi Office é ideal para compor ambientes corporativos com muito conforto, design e beleza.Composta com base giratória com rodízios e regulagem de altura, ela é um móvel extremamente funcional.Com revestimento em tecido de alta qualidade e estofamento confortável, ela promete fazer parte da decoração durante muito tempo.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Confi-Office-f69521246c611024954fe975140a0198-e1653932119949.png",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Confi-Office-f69521246c611024954fe975140a0198-e1653932119949.png",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Infantil-Allegra-40d5f17579526ae22c57a6c6e0b4062b-300x300.jpg",
       
        ],
      },

      {
        _id: new ObjectId(),
        title: "Cadeira Fontana",
        category: "cadeira",
        price: { cents: 2344, currency: "R$" }, 
        portion: "10x de R$234,40",
        description: "A Cadeira Fontana é fabricada com matéria prima de alto padrão e acabamento impecável, essa peça compõe muito bem uma sala de estar e se encaixa com extremo conforto e elegância na mesa de jantar. Possui base giratória em alumínio com lamina de madeira e assento e encosto estofado, deixando a peça com extremo conforto. A parte externa é toda revestida em lâmina de madeira, levando a beleza atemporal que só a madeira saber fazer. Seu assento e encosto são revestidos em tecido linho de toque macio na cor Nude.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Fontana-39caa38e8d518d4634815b8a58c7b32d-300x277.jpg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Fontana-39caa38e8d518d4634815b8a58c7b32d-300x277.jpg",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Fontana-f774fbf97468cc8131dd7792d5ae0cc5-408x400.jpg",
       
        ],
      },

      {
        _id: new ObjectId(),
        title: "Cadeira Gala ",
        category: "cadeira",
        price: { cents: 1853, currency: "R$" }, 
        portion: "10x de R$185,30",
        description: "Com ela, as crianças poderão sentar e fazer suas atividades cotidianas com muito estilo e conforto. O quarto é um espaço onde a criança brinca, aprende, dorme e faz diversas atividades, por isso o tamanho, cor e design dos móveis desempenham papéis importantes. Tudo no quarto de uma criança influencia na sua criatividade.É uma fusão de três modelos de designer distintos – Arne Jacobsen, Charles Eames e Eero Saarinen – criando algo inteiramente novo, simultaneamente clássico e contemporâneo. É um novo ícone no design mobiliário. Com cores alegres e vibrantes acaba se tornando o ponto central do ambiente.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Gala-Capitone-5e4c7aa4a51c6ddc721fc787ad48e966-300x300.png",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Gala-Capitone-5e4c7aa4a51c6ddc721fc787ad48e966-300x300.png",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Gala-Capitone-5e4c7aa4a51c6ddc721fc787ad48e966-400x400.png",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Gala-Capitone-8b2a0e8205a91ddbb4b12090c2bc8b89-400x400.png",
       
        ],
      },






  ]

  export default productDocument