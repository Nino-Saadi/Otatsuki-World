// Sélection de tout les boutons et les images avec la class add-shop
let carts = document.querySelectorAll('.add-shop');

let cancels = document.querySelector('.del')
// Tableau des différents produits
let products = [{
    name: 'Madara Uchiha HQS+ by TSUME',
    tag: 'Madara',
    price: 999.99,
    inCart: 0
  }, {
    name: 'Lampe LEB Zenitsu',
    tag: 'Led-Zenitsu',
    price: 28.99,
    inCart: 0
  }, {
    name: 'Sweat à capuche Dragon Ball Z',
    tag: 'Sweat-DBZ',
    price: 29.99,
    inCart: 0
  }, {
    name: 'Tableau mural One Piece Sabo/Luffy/Ace',
    tag: 'Tableau-OP',
    price: 27.99,
    inCart: 0
  },
  {
    name: 'Madara Uchiha HQS+ by TSUME',
    tag: 'Madara',
    price: 999.99,
    inCart: 0
  }, {
    name: 'Tableau mural Shoto',
    tag: 'Tableau-Shoto',
    price: 26.99,
    inCart: 0
  }, {
    name: 'Masque Attaque des Titans',
    tag: 'masque-snk',
    price: 7.99,
    inCart: 0
  }, {
    name: 'Sweat à capuche Naruto',
    tag: 'Sweat-Naruto',
    price: 24.99,
    inCart: 0
  }
];

// Boucle permettant d'ajouter les produits au panier
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    addToCard(products[i]);
    totalCost(products[i]);
  });
}

// for (let i = 0; i < productsInCart.length; i++) {
//   cancels.addEventListener('click', () => {
//     productsInCart.removeItem('');
//   })
// }



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
    localStorage.setItem('totalCost', cartCost + product.price);
  } else {
    localStorage.setItem('totalCost', product.price);
  }

}

function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  let cartCost = localStorage.getItem('totalCost');

  let productContainer = document.querySelector('.products');

  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="product">
        <button class="del"><ion-icon name="close-circle-outline"></ion-icon></button>
        <img src="img/product/${item.tag}.png" class="text-center img-fluid"><br>
        <p><span>${item.name}</span></p>
      </div>
      <div class="price">${item.price}€</div>
      <div class="quantity">
        <button><ion-icon name="arrow-back-circle-outline"></ion-icon></button>
        <span>${item.inCart}</span>
        <button><ion-icon name="arrow-forward-circle-outline"></ion-icon></button>
      </div>
      <div class="total">
        ${item.inCart * item.price}€
      </div><br>
    `
    });
    productContainer.innerHTML += `
   <div class="basketTotalContainer row justify-content-md-center">
       <h4 class="basketTotalTittle">
          Prix Total
       </h4>
       <h4 class="basketTotal">
         ${cartCost}€
       </h4>
       <button type="button" class="btn btn-outline-success validation">Valider votre commande</button>
   </div>
  `
  }
}



onLoadCartNumbers();
displayCart();