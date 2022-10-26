var obj1 = {a:12}
console.log(obj1)


obj2 = obj1
console.log(obj2)

obj2.b = 72
console.log(obj2, obj1)
cadena = '{"a":1}'


objecto = JSON.parse(cadena)
console.log(cadena,objecto)

obj1 = {a:12, b:new Date()}
console.log(JSON.stringify(obj1))
obj2 = obj1

var factura = {
    id:1,
    fecha: new Date(),
    cliente: {
        nombre: 'Juan',
        id:"id1",
        direccion: {
            calle: 'av la estacion',
            dp:5876
},
lineas : [
        {  
        nombre:"product1",
    cantidad: 1,
    precio :12.5
    },
    {  
    nombre:"product2",
    cantidad: 3,
    precio :1.5
    }       
]
    }
}

console.log(JSON.stringify(factura,null,4));


