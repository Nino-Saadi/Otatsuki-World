// Sélection de tout les boutons "Ajouter au Panier"
let carts = document.querySelectorAll('.add-shop');
// Tableau des différents produits
let products = [{
    name: 'Madara Uchiha HQS+ by TSUME',
    tag: 'figurinemadara',
    price: 999.99,
    inCart: 0
  }, {
    name: 'Lampe LEB Zenitsu',
    tag: 'lampezenitsu',
    price: 28.99,
    inCart: 0
  }, {
    name: 'Sweat à capuche Dragon Ball Z',
    tag: 'sweatdbz',
    price: 29.99,
    inCart: 0
  }, {
    name: 'Tableau mural One Piece Sabo/Luffy/Ace',
    tag: 'tableauop',
    price: 27.99,
    inCart: 0
  },
  {
    name: 'Madara Uchiha HQS+ by TSUME',
    tag: 'figurinemadara',
    price: 999.99,
    inCart: 0
  }, {
    name: 'Tableau mural Shoto',
    tag: 'tableaushoto',
    price: 26.99,
    inCart: 0
  }, {
    name: 'Masque Attaque des Titans',
    tag: 'masquesnk',
    price: 7.99,
    inCart: 0
  }, {
    name: 'Sweat à capuche Naruto',
    tag: 'sweatnaruto',
    price: 24.99,
    inCart: 0
  }
];

// Boucle permettant d'ajouter les prdouits au panier
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    addToCard(products[i]);
    totalCost(products[i]);
  });
}

// Fonction Pour ne pas reset le nombre du compteur
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('addToCard');

  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

// Fonction permettant d'incrémenter au compteur
function addToCard(product) {

  let productNumbers = localStorage.getItem('addToCard');

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem('addToCard', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('addToCard', 1);
    document.querySelector('.cart span').textContent = 1;
  }

  setItems(product);

}

// Fonction permettant d'ajouter le produit en local
function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  // Condtion pour si le produit est "null" ou "undefined"
  if (cartItems != null) {

    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }
  }
  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

// Fonction pour calculer le prix total
function totalCost(product) {
  // console.log("The product price is", product.price);
  let cartCost = localStorage.getItem('totalCost');

  console.log("My cart cost is", cartCost);
  console.log(typeof cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }


}


onLoadCartNumbers();