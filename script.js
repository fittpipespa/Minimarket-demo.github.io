let carrito = [];
let total = 0;

function agregar(nombre, precio){

  const productoExistente =
    carrito.find(p => p.nombre === nombre);

  if(productoExistente){

    productoExistente.cantidad++;

  } else {

    carrito.push({
      nombre,
      precio,
      cantidad:1
    });

  }

  total += precio;

  actualizar();
}

function eliminar(i){

  total -= carrito[i].precio;

  if(carrito[i].cantidad > 1){

    carrito[i].cantidad--;

  } else {

    carrito.splice(i,1);

  }

  actualizar();
}

function actualizar(){

  document.getElementById('count').innerText =
    carrito.reduce((acc,p)=>acc+p.cantidad,0);

  document.getElementById('total').innerText =
    'Total: $' + total;

  let html = '';

  carrito.forEach((p,i)=>{

    html += `
      <div class="item">

        <div>
          ${p.nombre}<br>
          x${p.cantidad} - $${p.precio * p.cantidad}
        </div>

        <button onclick="eliminar(${i})">
          X
        </button>

      </div>
    `;
  });

  document.getElementById('items').innerHTML = html;
}

function toggleCarrito(){

  let c = document.getElementById("carrito");

  c.style.display =
    c.style.display === "none"
    ? "block"
    : "none";
}

function enviar(){

  let msg = "Hola quiero pedir:%0A";

  carrito.forEach(p=>{

    msg +=
      `- ${p.nombre} x${p.cantidad} = $${p.precio * p.cantidad}%0A`;

  });

  msg += "Total: $" + total;

  window.open(
    "https://wa.me/56948713517?text=" + msg,
    "_blank"
  );
}
