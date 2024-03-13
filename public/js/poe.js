const boton = document.getElementById("boton_arreglar");

const arreglar_moto = () => {
    const imagen = document.getElementById("imagen_arreglar");
    imagen.src = "https://www.la-prensa.com.mx/incoming/oj0nup-choque-en-la-mexico-puebla/ALTERNATES/FREE_768/Choque%20en%20la%20M%C3%A9xico%20Puebla"

    boton.innerHTML = "Arreglar Moto";
    boton.className = "button is-warning";
    boton.onclick = moto_arreglada;
};

const moto_arreglada = () => {
    const imagen = document.getElementById("imagen_arreglar");
    imagen.src = "https://www.deceroacien.com.mx/u/fotografias/m/2023/12/1/f960x540-30328_104403_86.jpg";

    boton.innerHTML = "Destruir Moto";
    boton.className = "button is-danger";
    boton.onclick = destruir_moto;
};

const destruir_moto = () => {
    const imagen = document.getElementById("imagen_arreglar");
    imagen.src = "https://images.milanuncios.com/api/v1/ma-ad-media-pro/images/25ce8fc3-7fcf-44bc-b748-ff159a4f600e?rule=hw396_70";

    boton.innerHTML = "Arreglar Moto";
    boton.className = "buton is-primary";
    boton.onclick = arreglar_moto;
};

destruir_moto();