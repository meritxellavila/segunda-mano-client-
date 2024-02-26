import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <img src={logo} alt="log" width={"60px"}/>
            <input className='buscador' type="search" name="busquedaproducto" placeholder='Buscar...' />
            <Link to={"/AddProduct"}>
                <p id='up-product'>Subir Producto</p>
            </Link>
            <Link to={"/Favoritos"}>
                <p id='fav'>Favoritos</p>
            </Link>
        </nav>
    </div>
  )
}

export default Navbar