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
      "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202getRandomPercentage()6030738",
    
  },
  {
    name: "Samsung",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://www.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png",
  },
  {
    name: "Huawei",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://www.huawei.com/fr/press-events/images/logo.png",
  },
  {
    name: "Xiaomi",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://www.xiaomi.com/static/image/logo.png",
  },
];

export const marketPlace = [
  {
    name: "Amazon",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://www.amazon.fr/ref=nav_logo",
  },
  {
    name: "Ebay",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://www.ebay.fr/",
  },
  {
    name: "AliExpress",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://www.aliexpress.com/",
  },
  {
    name: "Wish",
    promotionPourcent: getRandomPercentage(),
    image:
      "https://www.wish.com/",
  },
];

function getRandomPercentage() {
  const minPercentage = 5;
  const maxPercentage = 20;
  return Math.floor(Math.random() * (maxPercentage - minPercentage + 1)) + minPercentage;
}