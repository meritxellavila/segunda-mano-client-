import React, { useEffect, useState } from 'react'
import axios from "axios";
import API_URL from "../utils/api"
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function HomePage() {
    const [allProducts, setAllProducts] = useState(null)

    useEffect(() => {
        axios.get(`${API_URL}/products`)
        .then((response) => {
            console.log(response.data)
            setAllProducts(response.data)
        })
        .catch((error) => {
            console.log(error)
            return <h1>No se han encontrado productos</h1>
        })
    }, [])

    if (allProducts === null) {
        return <h1>Cargando...</h1>
    }

    return (
        <div>
            <Navbar />
            
                {allProducts.map((eachProduct) => {
                    return (
                        <div key={eachProduct.id}>
                            <Link to={`/ProductDetall/${eachProduct.id}`}>
                                <img src={eachProduct.img} alt=""  width={"100%"}/>
                                <h2>{eachProduct.name}</h2>
                                <h2>{eachProduct.description}</h2>
                                <p>{eachProduct.price}</p>
                            </Link>
                        </div>
                    )
                })}

        </div>
    )
}

export default HomePage
