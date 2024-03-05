
var boton = document.getElementById('btnVerificar');

boton.addEventListener('click', () => {
    const texto = document.getElementById('inputText').value;
    const label = document.getElementById('resultado');
    label.textContent =  `!La palabra "${texto}" ${esPalindromo(texto.toLowerCase())? '': 'no'} es un palindromo!`
});

esPalindromo = (palabra) => {
    let izquierda = 0;
    let derecha = palabra.length - 1;

    while (izquierda < derecha) {

        if (palabra.charAt(izquierda) != palabra.charAt(derecha)) {
            return false;
        }
        izquierda++;
        derecha--;
    }
    return true;
}