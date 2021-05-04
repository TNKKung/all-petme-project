const expressFunction = require("express");
const expressApp = expressFunction();
const generatePayload = require('promptpay-qr') 
const qrcode = require('qrcode') 
const fs = require('fs') 

const mobileNumber = '0640630406' 
const amount = 1000
const payload = generatePayload(mobileNumber, { amount }) 
console.log(payload)

const options = { type: 'svg', color: { dark: '#000', light: '#fff' } }
qrcode.toString(payload, options, (err, svg) => {
    if (err) return console.log(err)
    fs.writeFileSync('./qr.svg', svg)
    console.log(svg)
})


  