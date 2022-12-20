import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { consultarBDD } from "../../assets/funciones";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useDarkModeContext } from "../../context/DarkModeContext";
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    const {darkMode} = useDarkModeContext()

    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const prod = productos.find(product => product.id === parseInt(id))
            setProducto(prod)
        })
        
    }, []);

    return (
        <div className={`card mb-3 container itemDetail ${darkMode ? 'text-white bg-secondary' : 'border-light'}`}>
            <ItemDetail item={producto} />
        </div>
    );
}

export default ItemDetailContainer;