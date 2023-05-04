
const {crearArchivo} = require('./helpers/multiplicarpromesa');
// const argv= require('yargs').argv;// para llamarlo y usar el argv directamente
const argv=require('./config/yargs');


console.clear();//limpiar la consola siempre al iniciar

//console.log(process.argv);//ver que dato se envio desde la consola
// manera de obtener el dato enviado desde la consola
// const [, , arg3='base=5']=process.argv;
// const[, base=5]=arg3.split('=');
// console.log(base);

console.log(process.argv);
console.log(argv);

crearArchivo(argv.b,argv.l,argv.r)
    .then(nombreArchivo=>console.log(nombreArchivo,'creado'))
    .catch(err=>console.log(err));