/// Definimos una lista de productos con objetos que contienen información sobre cada producto.
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

// Obtenemos el elemento de entrada de texto por su ID y lo renombramos a "inputFiltro".
const inputFiltro = document.getElementById("input-filtro");

// Obtenemos el elemento de la lista de productos por su ID y lo renombramos a "listaProductos".
const listaProductos = document.getElementById("lista-de-productos");

// Función para mostrar los productos en la lista.
function mostrarProductos(productosMostrados) {
  listaProductos.innerHTML = ""; // Limpiamos la lista

  productosMostrados.forEach(producto => {
    // Creamos un div para cada producto.
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");

    // Creamos un párrafo para mostrar el nombre del producto.
    const tituloProducto = document.createElement("p");
    tituloProducto.classList.add("titulo");
    tituloProducto.textContent = producto.nombre;

    // Creamos una imagen para mostrar la imagen del producto.
    const imagenProducto = document.createElement("img");
    imagenProducto.setAttribute('src', producto.img);

    // Agregamos el párrafo y la imagen al div del producto.
    productoDiv.appendChild(tituloProducto);
    productoDiv.appendChild(imagenProducto);

    // Agregamos el div del producto a la lista de productos.
    listaProductos.appendChild(productoDiv);
  });
}

// Función para filtrar productos en base al texto ingresado.
function filtrarProductos(texto) {
  const textoBusqueda = texto.toLowerCase(); // Convertimos el texto a minúsculas
  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(textoBusqueda) ||
    producto.tipo.toLowerCase().includes(textoBusqueda) ||
    producto.color.toLowerCase().includes(textoBusqueda)
  );
  return productosFiltrados;
}

// Función para manejar el evento de cambio en el input de filtro.
inputFiltro.addEventListener("input", function () {
  const textoFiltro = inputFiltro.value;
  const productosFiltrados = filtrarProductos(textoFiltro);
  mostrarProductos(productosFiltrados);
});

// Mostrar todos los productos al cargar la página.
mostrarProductos(productos);