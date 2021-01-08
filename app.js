// Sélection de tout les boutons "Ajouter au Panier"
let carts = document.querySelectorAll('.add-shop');

// Boucle permettant de définir tout les boutons "J'ajoute au Panier"
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    addToCard();
  });
}

// Fonction Pour ne pas reset le nombre du compteur
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('addToCard');

  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

// Fonction permettant
function addToCard() {
  console.log('Ajout au Panier')
  //
  //   let productNumbers = localStorage.getItem('addToCard');
  //
  //   productNumbers = parseInt(productNumbers);
  //
  //   if (productNumbers) {
  //     localStorage.setItem('addToCard', productNumbers + 1);
  //     document.querySelector('.cart span').textContent = productNumbers + 1;
  //   } else {
  //     localStorage.setItem('addToCard', 1);
  //     document.querySelector('.cart span').textContent = 1;
  //   }
  //
}

onLoadCartNumbers();