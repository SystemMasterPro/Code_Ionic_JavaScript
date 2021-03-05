const nombre = document.querySelector('#nombre');
const precio = document.querySelector('#precio');
const boton = document.querySelector('#boton-guardar');
const total = document.querySelector('#total');
const products = document.querySelector('#products');
const buttonCancel = document.querySelector('#boton-limpiar');

totalP=0

const createNewProduct = (nombre, precio) => {
  const ionCard = document.createElement('ion-card');
  const newProductItem = document.createElement("ion-card-content");
  ionCard.appendChild(newProductItem)
  newProductItem.textContent = nombre + ": $" + precio;
  products.appendChild(ionCard);
};

const clearInputs = () => {
  nombre.value = "";
  precio.value = "";
};

const presentAlert = () => {
  const alert = document.createElement("ion-alert");
  alert.header = "Datos Invalidos";
  alert.message = "Datos Incorrectos";
  alert.buttons = ["OK"];

  document.body.appendChild(alert);
  return alert.present();
};

const isEmpty = str => !str.trim().length;

buttonCancel.addEventListener("click", clearInputs);

boton.addEventListener("click", async () => {
  const nombreP = nombre.value;
  const precioP = precio.value;

  if (isEmpty(nombreP) || precioP <= 0 || isEmpty(precioP)) {
    presentAlert();
    return;
  }

  createNewProduct(nombreP, precioP);
  totalP += +precioP;
  total.textContent = totalP;
  clearInputs();
});