const fs=require('fs');

const crearArchivo=(base=5)=>{
    let salida='';
    for (var i = 1; i <=10;i++){
    salida+=`${base} x ${i} =${base*i}\n`;
    }
    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`,salida);

    console.log(`tabla-${base}.txt creada`);
    
}

module.exports ={
    crearArchivo
}
