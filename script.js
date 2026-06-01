window.addEventListener('DOMContentLoaded', () => {
    const nombre = document.getElementById('txt-nombre').innerText;
    const cargo = document.getElementById('txt-cargo').innerText;
    const telefono = document.getElementById('link-tel').innerText.replace(/\s+/g, '');
    const email = document.getElementById('link-mail').innerText;

    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${nombre}\nORG:La Bella Cucina\nTEL:${telefono}\nEMAIL:${email}\nEND:VCARD`;
    
    new QRious({
        element: document.getElementById('qr'),
        size: 450, // Lo genera gigante para mantener la nitidez en pantallas Retina
        background: '#003840',
        foreground: '#d4af37',
        level: 'M',
        value: vcard
    });
});
