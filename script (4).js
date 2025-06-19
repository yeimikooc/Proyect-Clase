import { db } from "./firebase-config.js";
import {
  collection, addDoc, getDocs, deleteDoc, doc, updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const form = document.getElementById("formproyectos");
const proyectosRef = collection(db, "proyectos");

let editando = false;
let idEditando = "";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const proyectos = {
    nombre: form.nombre.value,
    fechaHora: form.fechaHora.value,
    motivo: form.motivo.value,
    contacto: {
      telefono: form.telefono.value
    }
  };

  if (editando) {
    await updateDoc(doc(db, "proyectos", idEditando), proyectos);
    editando = false;
    idEditando = "";
    form.querySelector("button").textContent = "Guardar";
  } else {
    await addDoc(proyectosRef, proyectos);
  }

  form.reset();
  mostrarproyectos();
});

async function mostrarproyectos() {
  const contenedor = document.getElementById("proyectos");
  contenedor.innerHTML = "";
  const snapshot = await getDocs(proyectosRef);
  snapshot.forEach(docu => {
    const data = docu.data();
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${data.nombre}</h3>
      <p><strong>Fecha y Hora:</strong> ${data.fechaHora}</p>
      <p><strong>Motivo:</strong> ${data.motivo}</p>
      <p><strong>Teléfono:</strong> ${data.contacto.telefono}</p>
      <button onclick="editarCita('${docu.id}', ${JSON.stringify(data).replace(/"/g, '&quot;')})">Editar</button>
      <button onclick="eliminarCita('${docu.id}')">Eliminar</button>
    `;
    contenedor.appendChild(div);
  });
}

window.editarproyectos= (id, datos) => {
  form.nombre.value = datos.nombre;
  form.fechaHora.value = datos.fechaHora;
  form.motivo.value = datos.motivo;
  form.telefono.value = datos.contacto.telefono;
  editando = true;
  idEditando = id;
  form.querySelector("button").textContent = "Actualizar";
};

window.eliminarproyectos = async (id) => {
  await deleteDoc(doc(db, "proyectos", id));
  mostrarproyectos();
};

mostrarproyectos();