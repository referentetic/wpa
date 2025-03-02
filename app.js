// Lógica de la suma de los números
document.getElementById('sumarBtn').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 + num2;
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});

// Registrar el Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js') // Asegúrate de que el archivo 'service-worker.js' esté en la raíz
            .then((registration) => {
                console.log('Service Worker registrado con éxito:', registration);
            })
            .catch((error) => {
                console.log('Error al registrar el Service Worker:', error);
            });
    });
}
