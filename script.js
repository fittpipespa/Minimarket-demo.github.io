let carrito = [];
let total = 0;

function AgregarProducto(name, price){

  const productoExistente = cart.find(p => p.name === name);

  if(productoExistente){
    productoExistente.cantidad++;
  } else {
    cart.push({
      name,
      price,
      cantidad:1
    });
  }

  total += price;

  update();
}
function eliminar(i){
  total -= carrito[i].precio;
  carrito.splice(i,1);
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
      <div class='item'>

        <div>
          ${p.nombre}<br>
          x${p.cantidad} - $${p.precio * p.cantidad}
        </div>

        <button onclick='eliminarProducto(${i})'>
          X
        </button>

      </div>
    `;
  });

  document.getElementById('items').innerHTML = html;
}

function toggleCarrito(){
  let c = document.getElementById("carrito");
  c.style.display = c.style.display === "none" ? "block" : "none";
}

function enviar(){
  let msg = "Hola quiero pedir:%0A";

  carrito.forEach(p=>{
    msg += `- ${p.nombre} $${p.precio}%0A`;
  });

  msg += "Total: $" + total;

  window.open("https://wa.me/56948713517?text=" + msg, "_blank");
}
