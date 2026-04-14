document.addEventListener("DOMContentLoaded", () => {
    // 1. Efecto de "Máquina de escribir" en el título principal
    const titleElement = document.querySelector("header h1");
    
    if (titleElement) {
        const textToType = titleElement.textContent; // Guardamos el texto original
        titleElement.textContent = ""; // Limpiamos el texto para empezar vacíos
        
        let charIndex = 0;
        const typingSpeed = 60; // milisegundos por letra (puedes ajustarlo)

        // Creamos un elemento para el cursor parpadeante (opcional, muy premium)
        const cursorNode = document.createElement("span");
        cursorNode.textContent = "|";
        cursorNode.style.animation = "blink 1s step-end infinite";
        cursorNode.style.fontWeight = "300";
        cursorNode.style.color = "var(--text-primary)"; // Forzamos el color blanco sólido para que no sea transparente como el gradiente text
        
        // Adjuntar estilos de animación dinámicamente si no existen
        if(!document.getElementById('cursor-style')){
            const style = document.createElement('style');
            style.id = 'cursor-style';
            style.innerHTML = `
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        // Agregamos el contenido de texto como nodo y luego el cursor
        const textNode = document.createTextNode("");
        titleElement.appendChild(textNode);
        titleElement.appendChild(cursorNode);

        function typeWriter() {
            if (charIndex < textToType.length) {
                textNode.nodeValue += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Cuando termine de escribir, podemos ocultar el cursor si queremos
                // setTimeout(() => cursorNode.remove(), 2000);
            }
        }

        // Retrasamos un poquito el inicio para dar tiempo a que la página cargue visualmente
        setTimeout(typeWriter, 500);
    }
});
