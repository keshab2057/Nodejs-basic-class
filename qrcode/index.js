//Generate QR code for the url on the terminal using package qr code

const QRCode = require("qrcode");

//mailFunction
const qrCode = async () => {
    // QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
    //     console.log(url)});-->yo code function bhitra function vhayo so yaslai hami le -->async and awiat lagako
    const result = await QRCode.toString('I am a pony!',{type:'terminal'});
        console.log(result);
};
qrCode();