window.addEventListener('DOMContentLoaded', () => {
    // Levantamos los datos limpitos de la pantalla
    const nombre = document.getElementById('txt-nombre').innerText.trim();
    const cargo = document.getElementById('txt-cargo').innerText.trim();
    const telefono = document.getElementById('link-tel').innerText.replace(/\s+/g, '');
    const email = document.getElementById('link-mail').innerText.trim();

    // Estructura VCard ultra-compatible con iPhone (iOS) y Android
    const vcard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${nombre}`,        // Nombre completo completo
        `N:;${nombre};;;`,     // Estructura de apellido/nombre que pide iPhone
        'ORG:La Bella Cucina', // Nombre de la empresa
        `TITLE:${cargo}`,      // Cargo (Director, etc.)
        `TEL;TYPE=CELL:${telefono}`, // Le avisamos al iPhone que es un celular
        `EMAIL;TYPE=INTERNET:${email}`,
        'END:VCARD'
    ].join('\n');
    
    new QRious({
        element: document.getElementById('qr'),
        size: 450, // Tu súper resolución HD
        background: '#003840',
        foreground: '#d4af37',
        level: 'M',
        value: vcard
    });
});
