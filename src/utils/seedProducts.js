import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore"

const products = [
    {
        id: "1",
        name: "Remera Kloudd Blanco",
        stock: 20,
        category: "remeras",
        image:"../../../public/remera-negra.jpg",
        price: 15000
    },
    {
        id: "2",
        name: "Remera Kloudd Negra",
        stock: 20,
        category: "remeras",
        image: "../../../public/remera-blanca.jpg",
        price: 15000
    },    
    {
        id: "3",
        name: "Buzo Negro Kloudd",
        stock: 20,
        category: "buzos",
        image:"../../../public/buzo-negro.jpg",
        price: 25000
    },    
    {
        id: "4",
        name: "Buzo Blanco Kloudd",
        stock: 20,
        category: "buzos",
        image:"../../../public/buzo-blanco.jpg",
        price: 25000
    },    
    {
        id: "5",
        name: "Pantalon Negro Kloudd",
        stock: 20,
        category: "pantalones",
        image:"../../../public/pantalon-negro.jpg",
        price: 20000
    },    
    {
        id: "6",
        name: "Pantalon Cemento Kloudd",
        stock: 20,
        category: "pantalones",
        image:"../../../public/pantalon-cemento.jpg",
        price: 20000
    },
]

const seedProducts = () => {
    const productsRef = collection(db, "products")
    products.map(( { id, ...dataProduct } ) => {
        addDoc(productsRef, dataProduct)
    })

    console.log("productos subidos")
    return
}

seedProducts()