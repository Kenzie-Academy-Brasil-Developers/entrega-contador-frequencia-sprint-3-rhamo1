const button = document.getElementById("countButton");

button.addEventListener("click", function () {

   document.getElementById("letrasDiv").innerText = "";

   document.getElementById("palavrasDiv").innerText = "";

   const letrasDiv = document.getElementById("letrasDiv");

   const contagemLetraTitulo = document.createElement("h2");

   contagemLetraTitulo.innerHTML = "Número de letras";

   letrasDiv.appendChild(contagemLetraTitulo);


   lettersCounts();

   const palavrasDiv = document.getElementById("palavrasDiv");

   const contagemLetraPalavra = document.createElement("h2");

   contagemLetraPalavra.innerHTML = "Número de Palavras";

   palavrasDiv.appendChild(contagemLetraPalavra);

   contagemPalavras();
});

const lettersCounts = () => {
   let letras = document.getElementById("textInput").value;

   letras = letras.toLowerCase();

   letras = letras.replace(/[^a-z'\s]+/g, "");

   const contagemLetras = {};

   for (let i = 0; i < letras.length; i++) {

      let letraAtual = letras[i];

      if (contagemLetras[letraAtual] === undefined) {

         contagemLetras[letraAtual] = 1;

      } else {

         contagemLetras[letraAtual]++;
      }
   }

   for (let letra in contagemLetras) {

      const span = document.createElement("span");

      const textContent = `"${letra}": ${contagemLetras[letra]}, `;

      span.innerText = textContent;

      const letters = document.getElementById("letrasDiv");

      letters.appendChild(span);
   }
};

const contagemPalavras = () => {

   let wordText = document.getElementById("textInput").value;

   wordText = wordText.toLowerCase();

   wordText = wordText.replace(/[^a-z'\s]+/g, "");

   wordText = wordText.split(/\s/);

   const contagemPalavras = {};

   for (let i = 0; i < wordText.length; i++) {

      let currentWord = wordText[i];

      if (contagemPalavras[currentWord] === undefined) {

         contagemPalavras[currentWord] = 1;

      } else {

         contagemPalavras[currentWord]++;
      }
   }

   for (let palavra in contagemPalavras) {

      const span = document.createElement("span");

      const textContent = `"${palavra}": ${contagemPalavras[palavra]}, `;

      span.innerText = textContent;

      const palavras = document.getElementById("palavrasDiv");

      palavras.appendChild(span);
   }
};

const reset = document.getElementById("resetButton");

reset.addEventListener("click", function () {

   document.getElementById("textInput").value = "";

   document.getElementById("letrasDiv").innerText = "";
   
   document.getElementById("palavrasDiv").innerText = "";
});