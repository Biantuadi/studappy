export const marques = [
    {
        name: "Asos",
        promotionPourcent: getRandomPercentage(),
        image:
          "https://www.thegoodgoods.fr/wp-content/uploads/2023/05/asos-logo.jpeg",
    },
  {
    name: "Adidas",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adidas-logo-design-template-416e301e26d296a75536e1f323a013e0_screen.jpg?ts=1686456385",
  },
  {
    name: "Devred",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Ug-zx-DtaoRllKPTxJ3sEUwhORP2i5mTiTUW8iCraCwSjAaSdAHDkCIhvUlecntQ6MM&usqp=CAU",
  },
  {
    name: "Nike",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Rewrite_Nike_Logo_Design_History_Evolution_0_1024x1024.jpg?v=1695304464",
  },
  {
    name: "Vans",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://static.vecteezy.com/ti/vecteur-libre/t2/24455685-fourgonnettes-de-le-mur-marque-symbole-logo-conception-icone-abstrait-vecteur-illustration-avec-noir-contexte-gratuit-vectoriel.jpg",
  },
  {
    name: "Shein",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://i.pinimg.com/736x/10/a0/4a/10a04a48aa29fba6aa3186541a524d1b.jpg",
  },
  {
    name: "Puma",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://assets.turbologo.com/blog/fr/2019/11/19134135/puma-logo-cover-958x575.png",
  },
  {
    name: "Reebok",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://mrwallpaper.com/images/hd/small-black-logo-reebok-1xfwwiqyr0ostoj6.jpg",
  },
];

export const tech = [
  {
    name: "Apple",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202106030738",
    
  },
  {
    name: "Samsung",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/256_144_4.png?$512_N_PNG$",
  },
  {
    name: "Dell",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://static.vecteezy.com/ti/vecteur-libre/p1/21514856-dell-marque-logo-ordinateur-symbole-blanc-conception-etats-unis-portable-vecteur-illustration-avec-bleu-contexte-gratuit-vectoriel.jpg",
  },
  {
    name: "Bose",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://mumbrella.com.au/pro/wp-content/uploads/sites/2/2019/06/Bose.png",
  },
];

export const marketPlace = [
  {
    name: "Amazon",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://cdn6.aptoide.com/imgs/e/b/e/ebeaf9823143891a101a87b2102b4c11_icon.png",
  },
  {
    name: "Ebay",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://www.grapheine.com/wp-content/uploads/2012/09/ebay-logo-01.jpg",
  },
  {
    name: "AliExp.",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://ae01.alicdn.com/kf/Sbc29f5d774a04521b4bcbae119971747m/Gant-de-gardien-de-but.png",
  },
  {
    name: "Wish",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://www.underconsideration.com/brandnew/archives/wish_logo_detail.png",
  },
];

function getRandomPercentage() {
  const minPercentage = 5;
  const maxPercentage = 20;
  return Math.floor(Math.random() * (maxPercentage - minPercentage + 1)) + minPercentage;
}