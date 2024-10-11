const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn"); //crea un array

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }
        
        if (boton.id === "borrar") {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            if (pantalla.textContent.length === 0 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            }
            return;
        }

        if (boton.id === "igual" ) {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!"
            }
            
            if (pantalla.textContent.length === 0) {
                pantalla.textContent = "Error!";
            }

            return;
        }
        
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        } 
    })
})