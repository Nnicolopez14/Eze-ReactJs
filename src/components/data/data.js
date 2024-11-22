const products = [
    {
        id: "1",
        name: "Remera Kloudd Blanco",
        stock: 20,
        category: "remera",
        image:"../../../public/remera-negra.jpg",
        price: 15000
    },
    {
        id: "2",
        name: "Remera Kloudd Negra",
        stock: 20,
        category: "remera",
        image: "../../../public/remera-blanca.jpg",
        price: 15000
    },    
    {
        id: "3",
        name: "Buzo Negro Kloudd",
        stock: 20,
        category: "buzo",
        image:"../../../public/buzo-negro.jpg",
        price: 25000
    },    
    {
        id: "4",
        name: "Buzo Blanco Kloudd",
        stock: 20,
        category: "buzo",
        image:"../../../public/buzo-blanco.jpg",
        price: 25000
    },    
    {
        id: "5",
        name: "Pantalon Negro Kloudd",
        stock: 20,
        category: "pantalon",
        image:"../../../public/pantalon-negro.jpg",
        price: 20000
    },    
    {
        id: "6",
        name: "Pantalon Cemento Kloudd",
        stock: 20,
        category: "pantalon",
        image:"../../../public/pantalon-cemento.jpg",
        price: 20000
    },
]


/*
const promesa = new Promise ((resolve, reject) => {
    if(condicion){
        resolve("se resolvio")
    }else {
        reject("se rechazo")
    }
    })
*/

const getProducts = () => {
    return new Promise ((resolve, reject) => {
        
        setTimeout( ()=>{
            resolve(products)
        }, 2000)
    })
}

export { getProducts }