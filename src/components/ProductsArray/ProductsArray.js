

export const products= [
    {
        id:1,
        name:'Chain de Rocker',
        price:3500,
        description:'Que pasó? Te fuiste de joda y a la vuelta ella se llevó tu Chain de Rocker? No pasa nada, 0800NUCBA pensó en todo. Chain de Rocker mas brillante que nunca para que vayas por la ciudad con ice en el cuello ;)',
        category: 'chains',
        src:'https://cdn.shopify.com/s/files/1/0483/0973/1493/products/Adobe_Express_20220705_1222300.2944126796524905_1024x1024@2x.png?v=1657041827',
    },

    {
        id:2,
        name: '1817 Member',
        price:2800,
        description:'¡CUIDADO! Este anillo es solo para miembros de la mejor camada de 0800NUCBA, 1817, si no perteneces a ella no te recomendamos que lo compres ya que los miembros originales van a reconocer que no sos parte, no te van a hacer nada, pero vas a quedar como un pancho ;)',
        category:'rings',
        src:'https://d22fxaf9t8d39k.cloudfront.net/8996cc0bda1dab7a1608ed6c17088acb97a2116774b789dc30e5feb47059ec26139286.jpeg',
    },

    {
        id:3,
        name:'NUCBAStar',
        price:1000000,
        description:'¡EXTREMO CUIDADO! Este anillo solo pude usarlo el mismísimo NUCBAStar, en este caso si lo adquiris y no sos él, las autoridades de 0800NUCBA se van a ver obligadas a buscarte y llevarte a la corte donde los jueces de NUCBA te van a juzgar.',
        category:'rings',
        src:'https://ae04.alicdn.com/kf/Sfc685449b98a412fb1c6d884350c131d1.jpg',
    },
    
    {
        id:4,
        name:'Python Lover',
        price:2400,
        description:'????? En serio? Bueno, para gustos, colores, así que 0800NUCBA trae el Python Lover, un anillo para aquellos que eligieron el camino de Python y no el de JS que la fuerza este con ellos.',
        category:'rings',
        src:'https://d22fxaf9t8d39k.cloudfront.net/b118c23db23368c4362daae818ff76b835f23e318fa76f09f848f7f1aad8fa9e139286.jpeg',
    },
    
    {
        id:5,
        name:'Team Magos',
        price:3000,
        description:'¡NUEVAMENTE CUIDADO! Esta cadena es solo para los miembros del Team Magos, no se recomienda usarla si no perteneces a él, a no ser que seas fan nuestro en cuyo caso esta perfecto ;)',
        category:'chains',
        src:'https://cdn.shopify.com/s/files/1/0364/3444/4423/products/CapturadePantalla2021-10-11ala_s_10.38.12a.m._1200x1200.png?v=1633967031',
    },
    
    {
        id:6,
        name:'UX UI Enjoyer',
        price:2300,
        description:'No podíamos olvidarnos de ellos/as, para aquellos/as que les guste UX UI 0800NUCBA les trae ambos anillos para que se identifiquen entre ustedes y tengan un distintivo de las demas secciones.',
        category:'rings',
        src:'https://d22fxaf9t8d39k.cloudfront.net/a5f05ed7cbd7b6c4cb2bd544d6a006752e224dfa3976c3b3c7e02f4246c33947139286.jpeg',
    }
]


export const Products = products.reduce((acc, product)=>{
    if(!acc[product.category]){
        acc[product.category]=[];
    }
    acc[product.category]=[...acc[product.category],product];

    return acc
},{})
