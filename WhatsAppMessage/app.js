const form = document.querySelector('form');
const COUNTRY_CODE = '52';

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = Object.fromEntries(
        new FormData(e.target)
    );
    sendWhatsAppMessage(formData);
});


function sendWhatsAppMessage({name, lastname, password, city, state, phone}) {
    const phoneNumber = `${COUNTRY_CODE}${phone}`;
    const message = `Hola ${name} ${lastname}, tu contraseña es: ${password}, tu ciudad es: ${city}, tu estado es: ${state}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}
