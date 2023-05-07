import { ObjectId } from "mongodb"

  const productDocument = [
      {
        _id: new ObjectId(),
        title: "Mesa de Jantar Retangular",
        category: "mesa",
        price: { cents: 2900, currency: "R$" }, 
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
        price: { cents: 2900, currency: "R$" }, 
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
        price: { cents: 2900, currency: "R$" }, 
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
        title: "Mesa de Centro ",
        category: "mesa",
        price: { cents: 2900, currency: "R$" }, 
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
        price: { cents: 2900, currency: "R$" }, 
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
        price: { cents: 2900, currency: "R$" }, 
        description: "A Mesa de Cabeceira Phiajo oferece maior funcionalidade ao ambiente, além de um toque charmoso na decoração.Ela une em sua composição, aço carbono e MDF, criando uma peça incrível.Com acabamento em laqueado no tom Grafite, ela será o diferencial na decoração.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2022/10/Mesa-de-Cabeceira-Phiajo-e1666620259450-500x400.png", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2022/10/Mesa-de-Cabeceira-Phiajo-e1666620259450-500x400.png",
          
        ],
        
      },

      {
        _id: new ObjectId(),
        title: "Mesa Alta Bistrô",
        category: "mesa",
        price: { cents: 2900, currency: "R$" }, 
        description: "A Mesa Bistrô Vogue é um móvel muito funcional e bonito, ideal para transformar sua área externa em um espaço de descontração e conforto para a família e amigos.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Mesa-Alta-Bistro-Vogue-133c240ccd90b9df32388cf00d00daaf-500x751.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Mesa-Alta-Bistro-Vogue-133c240ccd90b9df32388cf00d00daaf-500x751.jpg",
          
        ],
        
      },

      {
        _id: new ObjectId(),
        title: "Mesa Lateral Redonda",
        category: "mesa",
        price: { cents: 2900, currency: "R$" }, 
        description: "A Mesa Lateral Redonda Chigaco é um móvel versátil que insere charme em decorações de alto padrão.Fabricado em madeira maciça e MDF prensado e laminado, ela possui acabamento em Carvalho Natural.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2023/02/Mesa-Lateral-Redonda-Chicago-e1677092150341.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2023/02/Mesa-Lateral-Redonda-Chicago-e1677092150341.jpg",
          
        ],
        
      },

      {
        _id: new ObjectId(),
        title: "Mesa de Jantar Giratória",
        category: "mesa",
        price: { cents: 2900, currency: "R$" }, 
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
        price: { cents: 2900, currency: "R$" }, 
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
        price: { cents: 2900, currency: "R$" }, 
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
        price: { cents: 2900, currency: "R$" }, 
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
        price: { cents: 2900, currency: "R$" }, 
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
        price: { cents: 2900, currency: "R$" }, 
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
        price: { cents: 2900, currency: "R$" }, 
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
        price: { cents: 2900, currency: "R$" }, 
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
        price: { cents: 2900, currency: "R$" }, 
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
        price: { cents: 2900, currency: "R$" }, 
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
        price: { cents: 2900, currency: "R$" }, 
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
        price: { cents: 2900, currency: "R$" }, 
        description: "Perfeito para quem procura um móvel de qualidade que seja o atrativo de seu décor, o Sofá Azul Cochi veio para transformar a sua decoração com todo seu charme e estilo. Fabricado com material de alto padrão ele possui o design bipartido e o acabamento impecável com seu tecido em toque macio.Sua base em metal com pintura epóxi e seu estofamento de alta resiliência, podem compor diversos cômodos de sua casa levando aconchego e leveza na hora de receber sua familia ou seus amigos.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/05/Sofa-Azul-Cochi-500x203.jpeg",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/05/Sofa-Azul-Cochi-500x203.jpeg",
          
        ],
      },

      

      {
        _id: new ObjectId(),
        title: "Luminária de Piso",
        category: "luminaria",
        price: { cents: 2900, currency: "R$" }, 
        description: " A Luminária de Piso Sarah enriquecerá seu projeto com o design de um item decorativo robusto e cheio de estilo. Ela possui a estrutura tripé em madeira maciça na cor castanho, que torna à peça firme e duradoura.A funcionalidade da Luminária Sarah está na sua voltagem, um produto bivolt e compatível com lâmpadas E27, ela se adéqua a qualquer ambiente. Sua cúpula em tecido fornece uma iluminação precisa e suave, além de ser muito elegante.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/05/Luminaria-de-Piso-Sarah-e1622126495324-500x774.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/05/Luminaria-de-Piso-Sarah-e1622126495324-500x774.jpg",
        
        ],
      },

      {
        _id: new ObjectId(),
        title: "Luminária de Teto Pendente",
        category: "luminaria",
        price: { cents: 2900, currency: "R$" }, 
        description: " O design incrível da Luminária de Teto Pendente Lyra Cascata, cria uma decoração elegante e bem iluminada.Fabricada em vidro cristal, ela possui oito cúpulas que remetem a forma de uma esfera.Posicionadas de forma crescente, ela criará o efeito de uma cascata.Seus acessórios são feitos em metal com banho de verniz de alta durabilidade, possuem variação nas cores Preto e Dourado.Pêndula por cabos, ela conta com fixador que cria o efeito no teto.. ",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2022/11/Luminaria-de-Teto-Pendente-Lyra-Cascata-3-e1667486844764.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2022/11/Luminaria-de-Teto-Pendente-Lyra-Cascata-2-e1667486807135.jpg",
          "https://livdecora.com.br/wp-content/uploads/2022/11/Luminaria-de-Teto-Pendente-Lyra-Cascata-273x400.jpg",
          "https://livdecora.com.br/wp-content/uploads/2022/11/Luminaria-de-Teto-Pendente-Lyra-Cascata-3-e1667486844764.jpg"
        
        ],
      },

      {
        _id: new ObjectId(),
        title: "Luminária de Parede",
        category: "luminaria",
        price: { cents: 2900, currency: "R$" }, 
        description: " A Luminária de Parede Arandela Mirtes transcende a elegância de um item decorativo de alto padrão de qualidade. Ela possui a base em madeira na cor Imbuia tornando à peça firme. Sua estrutura em metal na cor Dourado, é maleável dando movimento a luminária, permitindo que ela se adapte as suas necessidades e aos lugares que respectivamente precisam de luz.",
        thumbnail:
          "https://livdecora.com.br/luminaria-de-parede-arandela-mirtes/", 
        images: [
          "https://livdecora.com.br/luminaria-de-parede-arandela-mirtes/",
        
        ],
      },

      {
        _id: new ObjectId(),
        title: "Luminária de Mesa",
        category: "luminaria",
        price: { cents: 2900, currency: "R$" }, 
        description: " A Luminária de Mesa Redonda Bel ficará ótima em escritórios, salas de estar, quartos, ela irá transformar qualquer cantinho da sua casa. É sofisticada e apresenta design elegante e atemporal, poderá compor qualquer espaços com facilidade. Possui estrutura de alta qualidade em madeira de Jequitibá com cúpula em linho na cor off white, proporcionando uma iluminação aconchegante e delicada.Dicas para usar a luminária de mesa:>> Fica ótimo em quartos, onde pode contracenar com o criado-mudo. Se você gosta de ler na cama antes de dormir, ele será peça chave no seu quarto!>> Na sala de estar eles são quase imprescindíveis e, muitas vezes, comandam a decoração do espaço. Pode ficar em espaços de destaque no cômodo, como a mesa lateral ao lado do sofá.>> Na penteadeira ele pode ser um toque decorativo para o espaço de beleza, e ainda ajuda na iluminação.>> Se sua varanda for fechada, ele ficará perfeito para deixar um ambiente acolhedor e aconchegante com sua iluminação indireta É muito versátil e por isso, pode ser usado em praticamente todos os ambientes, basta apenas combiná-lo com a decoração da casa. ",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Redonda-Bel-95710bdc8e1975772efb3659b9e82970.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Redonda-Bel-95710bdc8e1975772efb3659b9e82970.jpg",
        
        ],
      },

      {
        _id: new ObjectId(),
        title: "Luminária de Mesa",
        category: "luminaria",
        price: { cents: 2900, currency: "R$" }, 
        description: " A Luminária de Mesa Redonda Bel ficará ótima em escritórios, salas de estar, quartos, ela irá transformar qualquer cantinho da sua casa. É sofisticada e apresenta design elegante e atemporal, poderá compor qualquer espaços com facilidade. Possui estrutura de alta qualidade em madeira de Jequitibá com cúpula em linho na cor off white, proporcionando uma iluminação aconchegante e delicada.Dicas para usar a luminária de mesa:>> Fica ótimo em quartos, onde pode contracenar com o criado-mudo. Se você gosta de ler na cama antes de dormir, ele será peça chave no seu quarto!>> Na sala de estar eles são quase imprescindíveis e, muitas vezes, comandam a decoração do espaço. Pode ficar em espaços de destaque no cômodo, como a mesa lateral ao lado do sofá.>> Na penteadeira ele pode ser um toque decorativo para o espaço de beleza, e ainda ajuda na iluminação.>> Se sua varanda for fechada, ele ficará perfeito para deixar um ambiente acolhedor e aconchegante com sua iluminação indireta É muito versátil e por isso, pode ser usado em praticamente todos os ambientes, basta apenas combiná-lo com a decoração da casa. ",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Redonda-Bel-95710bdc8e1975772efb3659b9e82970.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Redonda-Bel-95710bdc8e1975772efb3659b9e82970.jpg",
        
        ],
      },


      {
        _id: new ObjectId(),
        title: "Luminária de Mesa",
        category: "luminaria",
        price: { cents: 2900, currency: "R$" }, 
        description: " A Luminária de Mesa Redonda Bel ficará ótima em escritórios, salas de estar, quartos, ela irá transformar qualquer cantinho da sua casa. É sofisticada e apresenta design elegante e atemporal, poderá compor qualquer espaços com facilidade. Possui estrutura de alta qualidade em madeira de Jequitibá com cúpula em linho na cor off white, proporcionando uma iluminação aconchegante e delicada.Dicas para usar a luminária de mesa:>> Fica ótimo em quartos, onde pode contracenar com o criado-mudo. Se você gosta de ler na cama antes de dormir, ele será peça chave no seu quarto!>> Na sala de estar eles são quase imprescindíveis e, muitas vezes, comandam a decoração do espaço. Pode ficar em espaços de destaque no cômodo, como a mesa lateral ao lado do sofá.>> Na penteadeira ele pode ser um toque decorativo para o espaço de beleza, e ainda ajuda na iluminação.>> Se sua varanda for fechada, ele ficará perfeito para deixar um ambiente acolhedor e aconchegante com sua iluminação indireta É muito versátil e por isso, pode ser usado em praticamente todos os ambientes, basta apenas combiná-lo com a decoração da casa. ",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Redonda-Bel-95710bdc8e1975772efb3659b9e82970.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Redonda-Bel-95710bdc8e1975772efb3659b9e82970.jpg",
        
        ],
      },


      {
        _id: new ObjectId(),
        title: "Luminária de Mesa",
        category: "luminaria",
        price: { cents: 2900, currency: "R$" }, 
        description: " A Luminária de Mesa Redonda Bel ficará ótima em escritórios, salas de estar, quartos, ela irá transformar qualquer cantinho da sua casa. É sofisticada e apresenta design elegante e atemporal, poderá compor qualquer espaços com facilidade. Possui estrutura de alta qualidade em madeira de Jequitibá com cúpula em linho na cor off white, proporcionando uma iluminação aconchegante e delicada.Dicas para usar a luminária de mesa:>> Fica ótimo em quartos, onde pode contracenar com o criado-mudo. Se você gosta de ler na cama antes de dormir, ele será peça chave no seu quarto!>> Na sala de estar eles são quase imprescindíveis e, muitas vezes, comandam a decoração do espaço. Pode ficar em espaços de destaque no cômodo, como a mesa lateral ao lado do sofá.>> Na penteadeira ele pode ser um toque decorativo para o espaço de beleza, e ainda ajuda na iluminação.>> Se sua varanda for fechada, ele ficará perfeito para deixar um ambiente acolhedor e aconchegante com sua iluminação indireta É muito versátil e por isso, pode ser usado em praticamente todos os ambientes, basta apenas combiná-lo com a decoração da casa. ",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Redonda-Bel-95710bdc8e1975772efb3659b9e82970.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Redonda-Bel-95710bdc8e1975772efb3659b9e82970.jpg",
        
        ],
      },

      {
        _id: new ObjectId(),
        title: "Luminária de Mesa",
        category: "luminaria",
        price: { cents: 2900, currency: "R$" }, 
        description: " A Luminária de Mesa Redonda Bel ficará ótima em escritórios, salas de estar, quartos, ela irá transformar qualquer cantinho da sua casa. É sofisticada e apresenta design elegante e atemporal, poderá compor qualquer espaços com facilidade. Possui estrutura de alta qualidade em madeira de Jequitibá com cúpula em linho na cor off white, proporcionando uma iluminação aconchegante e delicada.Dicas para usar a luminária de mesa:>> Fica ótimo em quartos, onde pode contracenar com o criado-mudo. Se você gosta de ler na cama antes de dormir, ele será peça chave no seu quarto!>> Na sala de estar eles são quase imprescindíveis e, muitas vezes, comandam a decoração do espaço. Pode ficar em espaços de destaque no cômodo, como a mesa lateral ao lado do sofá.>> Na penteadeira ele pode ser um toque decorativo para o espaço de beleza, e ainda ajuda na iluminação.>> Se sua varanda for fechada, ele ficará perfeito para deixar um ambiente acolhedor e aconchegante com sua iluminação indireta É muito versátil e por isso, pode ser usado em praticamente todos os ambientes, basta apenas combiná-lo com a decoração da casa. ",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Redonda-Bel-95710bdc8e1975772efb3659b9e82970.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Redonda-Bel-95710bdc8e1975772efb3659b9e82970.jpg",
        
        ],
      },

      {
        _id: new ObjectId(),
        title: "Luminária de Mesa",
        category: "luminaria",
        price: { cents: 2900, currency: "R$" }, 
        description: " A Luminária de Mesa Redonda Bel ficará ótima em escritórios, salas de estar, quartos, ela irá transformar qualquer cantinho da sua casa. É sofisticada e apresenta design elegante e atemporal, poderá compor qualquer espaços com facilidade. Possui estrutura de alta qualidade em madeira de Jequitibá com cúpula em linho na cor off white, proporcionando uma iluminação aconchegante e delicada.Dicas para usar a luminária de mesa:>> Fica ótimo em quartos, onde pode contracenar com o criado-mudo. Se você gosta de ler na cama antes de dormir, ele será peça chave no seu quarto!>> Na sala de estar eles são quase imprescindíveis e, muitas vezes, comandam a decoração do espaço. Pode ficar em espaços de destaque no cômodo, como a mesa lateral ao lado do sofá.>> Na penteadeira ele pode ser um toque decorativo para o espaço de beleza, e ainda ajuda na iluminação.>> Se sua varanda for fechada, ele ficará perfeito para deixar um ambiente acolhedor e aconchegante com sua iluminação indireta É muito versátil e por isso, pode ser usado em praticamente todos os ambientes, basta apenas combiná-lo com a decoração da casa. ",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Redonda-Bel-95710bdc8e1975772efb3659b9e82970.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Redonda-Bel-95710bdc8e1975772efb3659b9e82970.jpg",
        
        ],
      },

      {
        _id: new ObjectId(),
        title: "Luminária de Mesa",
        category: "luminaria",
        price: { cents: 2900, currency: "R$" }, 
        description: " A Luminária de Mesa Redonda Bel ficará ótima em escritórios, salas de estar, quartos, ela irá transformar qualquer cantinho da sua casa. É sofisticada e apresenta design elegante e atemporal, poderá compor qualquer espaços com facilidade. Possui estrutura de alta qualidade em madeira de Jequitibá com cúpula em linho na cor off white, proporcionando uma iluminação aconchegante e delicada.Dicas para usar a luminária de mesa:>> Fica ótimo em quartos, onde pode contracenar com o criado-mudo. Se você gosta de ler na cama antes de dormir, ele será peça chave no seu quarto!>> Na sala de estar eles são quase imprescindíveis e, muitas vezes, comandam a decoração do espaço. Pode ficar em espaços de destaque no cômodo, como a mesa lateral ao lado do sofá.>> Na penteadeira ele pode ser um toque decorativo para o espaço de beleza, e ainda ajuda na iluminação.>> Se sua varanda for fechada, ele ficará perfeito para deixar um ambiente acolhedor e aconchegante com sua iluminação indireta É muito versátil e por isso, pode ser usado em praticamente todos os ambientes, basta apenas combiná-lo com a decoração da casa. ",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Redonda-Bel-95710bdc8e1975772efb3659b9e82970.jpg", 
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Luminaria-de-Mesa-Redonda-Bel-95710bdc8e1975772efb3659b9e82970.jpg",
        
        ],
      },




      {
        _id: new ObjectId(),
        title: "Cadeira Glamour",
        category: "cadeira",
        price: { cents: 2900, currency: "R$" }, 
        description: "A Cadeira Glamour para sala de jantar, vai transformar seu ambiente! Fabricada com matéria-prima de alto padrão e acabamento impecável, a Cadeira Sophia é sinônimo de extremo conforto e aconchego.Essa peça já fez parte de diversos projetos arquitetônicos para ambientes refinados, que não abrem mão da qualidade, design e conforto. Além disso, a mesma possui base em aço carbono com pintura automotiva de alta qualidade da cor dourado ouro.Seu assento e encosto são elaborados com espuma densidade 28, tornando a peça firme e com alta durabilidade.Acabamento em tecido linho de toque macio na cor cru.A Cadeira Sophia garante conforto e elegância a um dos ambientes mais importantes da casa: a sala de jantar .Para que momentos especiais com a família e amigos sejam ainda mais gostosos, nada melhor que uma boa cadeira para proporcionar aconchego para seus convidados. Por isso, escolher cadeiras e poltronas que atendam tanto às nossas necessidades práticas quanto ao estilo do local faz toda a diferença.",
        thumbnail:
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Sophia-09ceac518a65050ff9d8b8c6a8a2544d-e1620942900704.png",
        images: [
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Sophia-09ceac518a65050ff9d8b8c6a8a2544d-e1620942900704.png",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Sophia-4be8d084a24bee70ae075da6ac4996dd-500x376.jpg",
          "https://livdecora.com.br/wp-content/uploads/2021/02/Cadeira-Sophia-2c63d6358598753284bf40a03aff4d33-500x376.jpg",
        ],
      },




  ]

  export default productDocument