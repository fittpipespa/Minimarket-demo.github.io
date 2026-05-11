let carrito = [];
let total = 0;

function agregar(nombre, precio){
  carrito.push({nombre, precio});
  total += precio;
  actualizar();
}

function eliminar(i){
  total -= carrito[i].precio;
  carrito.splice(i,1);
  actualizar();
}

function actualizar(){
  document.getElementById("count").innerText = carrito.length;
  document.getElementById("total").innerText = "Total: $" + total;

  let html = "";

  carrito.forEach((p,i)=>{
    html += `
      <div>
        ${p.nombre} - $${p.precio}
        <button onclick="eliminar(${i})">X</button>
      </div>
    `;
  });

  document.getElementById("items").innerHTML = html;
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

  window.open("https://wa.me/56912345678?text=" + msg, "_blank");
}
