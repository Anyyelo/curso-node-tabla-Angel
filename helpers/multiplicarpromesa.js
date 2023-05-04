const fs=require('fs');

const crearArchivo=async(base=5,listar,rango)=>{
    try{
        let salida='';
        for (var i = 1; i <=rango;i++){
        salida+=`${base} x ${i} =${base*i}\n`;
        }

        if(listar){
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`
    }
    catch(err){
        throw err;
    }
}

module.exports ={
    crearArchivo
}
