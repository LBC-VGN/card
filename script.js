window.addEventListener('DOMContentLoaded', () => {
    const nombre = document.getElementById('txt-nombre').innerText.trim();
    const cargo = document.getElementById('txt-cargo').innerText.trim();
    const telefono = document.getElementById('link-tel').innerText.replace(/\s+/g, '');
    const email = document.getElementById('link-mail').innerText.trim();

    const vcard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${nombre}`,
        `N:;${nombre};;;`,
        'ORG:La Bella Cucina',
        `TITLE:${cargo}`,
        `TEL;TYPE=CELL:${telefono}`,
        `EMAIL;TYPE=INTERNET:${email}`,
        'END:VCARD'
    ].join('\n');
    
    new QRious({
        element: document.getElementById('qr'),
        size: 600,           // Subimos a 600 para que al reescalar con CSS a 150px sobremuree y se vea HD
        level: 'H',          // Nivel High de corrección de errores (por si el platino brilla mucho)
        background: '#003840', // Seteamos el MISMO azul del CSS para que no haya bordes fantasma
        foreground: '#909EAE', // El Platino oficial de Doña Marta. Contraste puro sobre el azul
        value: vcard
    });
});
