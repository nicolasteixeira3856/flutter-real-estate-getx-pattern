'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "estates", [{
            title: "APOLAR VENDE IMÓVEL NO BAIRRO ALTO EM CURITIBA.",
            description: "A CASA É MUITO ACONCHEGANTE, BEM PLANEJADA, BEM ENSOLARADA, E ESTÁ DIVIDIDA ASSIM: 3 DORM, SENDO 1 SUITE COM PISO LAMINADO;",
            img_path: "174449b836396fc0669d501d7ae904cb.jpg",
            lat: "-25.40301675241798",
            lng: "-49.206608909004295",
            price: 400000,
            city: "Curitiba",
            neighborhood: "Bairro Alto",
            phone: "(41) 3093-1212",
            isFavorited: false
          },
          {
            title: "Sobrado a venda no bairro Boa Vista",
            description: "Sobrado a venda no bairro Boa Vista de 400m² de área construída total, imóvel não averbado. (Não pode ser financiado). Casa com 5 quartos sendo 01 suítes, 3 banheiros e 3 vagas de garagem. O imóvel fica localizado entre as ruas Francisco Prestes Maia e Benevenuto Gusso. Com amplo quintal nos fundos de 75m² Observação: Imóvel necessita de uma pequena reforma.Terreno de 343m².(mar) -",
            img_path: "bbe43c5aca4848109f53e218fc6bc537.jpg",
            lat: "-25.38292782455913",
            lng: "-49.2537948096291",
            price: 649000,
            city: "Curitiba",
            neighborhood: "Boa Vista",
            phone: "(41) 3209-0909",
            isFavorited: false
          },
          {
            title: "Apartamento Garden",
            description: "Apartamento Garden localizado proximo ao Parque Barigui, há 5 minutos do Batel. Rua arborizada e tranquila, armários embutidos, iluminação em LED, ar condicionado. Totalmente mobiliado, pronto para morar.",
            img_path: "084421659376bfe07437556f9665c156.jpg",
            lat: "-25.442448742013624",
            lng: "-49.31043101523497",
            price: 820000,
            city: "Curitiba",
            neighborhood: "Campina da Siqueira",
            phone: "(41) 3093-1214",
            isFavorited: false
          },
          {
            title: "Residencial Plus localizado na Av. República Argentina",
            description: "Residencial Plus localizado na Av. República Argentina, foi projetado para conectar seus moradores a todas as facilidades do bairro Portão. Constituído por stúdios e apartamentos de 1 e 2 quartos, o Plus possui tipologias variadas, com plantas de 28,51 a 43,84 m², com ou sem sacada, além de opção de vagas privativas para automóveis.",
            img_path: "30e45785b44faec983a04b2eecc44d37.jpg",
            lat: "-25.473806",
            lng: "-49.293722",
            price: 226220,
            city: "Curitiba",
            neighborhood: "Portão",
            phone: "(41) 3793-5314",
            isFavorited: false
          },
          {
            title: "03 RESIDENCIAS COM ENTRADA EM COMUM",
            description: "03 RESIDENCIAS COM ENTRADA EM COMUM. CASA DE MADEIRA COM 02 QUARTOS, SALA, COZINHA, BWC SOCIAL, ÁREA DE SERVIÇOS, CHURRASQUEIRA E ENTRADA PARA CARRO. PERMITIDO CACHORRO DE PEQUENO PORTE.",
            img_path: "b7220d4e7a02437d7e9545547a6c4c13.jpg",
            lat: "-25.28558",
            lng: "-49.16506",
            price: 750000,
            city: "Curitiba",
            neighborhood: "Lindóia",
            phone: "(41) 3366-5314",
            isFavorited: false
          },
          {
            title: "Abra as portas para seu novo momento.",
            description: "Abra as portas para seu novo momento. Em frente ao Shopping Palladium e ao Super Muffato, está entre as ruas Av. da República e Rua Daisy Luci Berno e adjacente à Rua Eduardo Carlos Pereira. Ocupando uma quadra inteira, o Door está no ponto mais alto do Portão e proporciona uma bela vista da cidade a todos os moradores. Um empreendimento inovador, com diversas tipologias de plantas, pronto para receber diferentes perfis de moradores. Aqui, você encontra tudo o que precisa, tanto do lado de dentro quando do lado de fora. O Door está localizado no coração do bairro Portão, em uma região que cresceu e se valorizou imensamente nos últimos anos.",
            img_path: "94bf542ef44d28980f71d7cef4bf0334.jpg",
            lat: "-25.476929",
            lng: "-49.289029",
            price: 218280,
            city: "Curitiba",
            neighborhood: "Portão",
            phone: "(41) 99466-8914",
            isFavorited: false
          },
          {
            title: "Apartamento com 2 dormitórios e coberturas duplex de até 112m²",
            description: "Uma obra inspirada no estilo de vida de que valorizam a liberdade e deseja espaços funcionais e planejados na medida certa, apartamentos com 2 ou 3 dormitórios e coberturas duplex de até 112m² privativos. A menos de 15 minutos do Centro e vizinho ao Jardim Botânico, o Cristo Rei é o protagonista de uma das desenvolvidas regiões de Curitiba, é nesse bairro que está localizado do Terrasse Musique, em um terreno de esquina e com uma localização tranquila, envolto de ruas arborizadas.",
            img_path: "9d17000b99b0042cb9129d5354306e3b.jpg",
            lat: "-25.43297242009961",
            lng: "-49.2409349153413",
            price: 540000,
            city: "Curitiba",
            neighborhood: "Cristo Rei",
            phone: "(41) 97864-9914",
            isFavorited: false
          },
          {
            title: "Italy Residence",
            description: "O Italy Residence se apresenta ao mercado imobiliário de Curitiba como um dos empreendimentos mais inovadores, elegantes e charmosos. Ideal para quem busca qualidade de vida, conforto e muito glamour. Para saber mais sobre esse lançamento, continue a leitura! Um pouco sobre o Italy Residence: a cobertura que encanta os olhos de qualquer um O imóvel possui nada mais nada menos que 159 m² de espaço privativo, para que assim possa realizar festas ou celebrações com sua família e amigos com estilo e conforto. Além disso, dispõe de duas vagas de garagem no Cristo Rei. Não bastasse tudo isso, ele fica localizado na cobertura, oferecendo uma visão privilegiada de uma boa parte da cidade, pois possui terraço exclusivo ? o espaço ideal para quem gosta de realizar eventos sofisticados, com um som ambiente e uma vista que é de tirar o fôlego de qualquer um. Já imaginou quantos eventos empresariais ou de família você não pode fazer nesse cenário incrível?",
            img_path: "fea92d9859e9cd4679332f45054ef09a.jpg",
            lat: "-25.43296252934618",
            lng: "-49.23932545767064",
            price: 1299240,
            city: "Curitiba",
            neighborhood: "Cristo Rei",
            phone: "(41) 97864-9915",
            isFavorited: false
          },
          {
            title: "Casa com 3 quartos Barreirinha Curitiba",
            description: "TRAGA SUA FAMÍLIA PARA CONHECER ESTA LINDA CASA NO BARREIRINHA, MUITO BEM LOCALIZADA, PRÓXIMA A AVENIDA ANITA GARIBALDI, COM FÁCIL ACESSO AO PARQUE SÃO LOURENÇO, SUPERMERCADO CALIFÓRNIA E MUITO MAIS, OFERECENDO A COMODIDADE E A QUALIDADE DE VIDA QUE VOCÊ E SUA FAMÍLIA SEMPRE SONHARAM",
            img_path: "394d5c4697b00f639382c7dbbc882b2e.jpg",
            lat: "-25.37509188198976",
            lng: "-49.254709084658714",
            price: 498000,
            city: "Curitiba",
            neighborhood: "Barreirinha",
            phone: "(41) 3366-5555",
            isFavorited: false
          },
          {
            title: "Sobrado de 340,44 m² construído num terreno de 12 x 30 m",
            description: "Sobrado de 340,44 m² construído num terreno de 12 x 30 m, totalizando 360 m² no Xaxim com as seguintes características: garagem no subsolo com 60,24 m² com vaga p/ 3 carros com acesso à casa por trás e pela frente; Pavimento térreo com 135,60 m², com sala de estar, sala de jantar junto com cozinha, hall, BWC social, uma suíte, um quarto, lavanderia e mais um banheiro externo; Piso Superior com com 144,60 m², ampla varanda fechada com janelas de vidro, uma suíte com closet, 2 quartos, uma sala intima e um BWC para atender estes ambientes. Todos os ambientes são muitos amplos e espaçosos com piso cerâmico, chuveiros elétricos mas tem infra estrutura já feita para aquecimentos à gás. Metade do terreno está vazia.",
            img_path: "e1aeabec80e13c7c4a0a7329b883a865.jpg",
            lat: "-25.51771030819937",
            lng: "-49.268644373011924",
            price: 882000,
            city: "Curitiba",
            neighborhood: "Xaxim",
            phone: "(41) 3467-4545",
            isFavorited: false
          }
      ], {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
