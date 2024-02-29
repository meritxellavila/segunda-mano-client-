import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import axios from 'axios'
import API_URL from '../utils/api'

function Navbar() {

  //1.estado
  const [search, setSearch] = useState("")

  
  const handleSearch = (event) => {
    let inputSearch = event.target.value
    console.log(inputSearch)
    setSearch(inputSearch)
  }


  const handleBuscar = (e) => {
    e.preventDefault()

    axios.get("")

    console.log("buscando", e)
  }
  // flujo controlado del campo
  // boton
  //cuando clique llamar backend, pedir que devuelva todos los productos

  return (
    <div>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="log" width={"60px"} />
        </Link>
        <button onClick={handleBuscar}>Buscar
          <input onChange={handleSearch} className='buscador' type="search" name="busquedaproducto" placeholder='Buscar...' />
        </button>
        <Link to={"/AddProduct"}>
          <p id='up-product'>➕Subir Producto</p>
        </Link>
        <Link to={"/favoritos"}>
          <p id='fav'>❤️Favoritos</p>
        </Link>
        <div className='categorias'>
          <ul>
            <Link to={`/ListProducts/tecnologia`}>
              <li>Tecnologia</li>
            </Link>
            <br />
            <Link to={"/ListProducts/ropa"}>
              <li>Ropa</li>
            </Link>
            <br />
            <Link to={"/ListProducts/veichulo"}>
              <li>Veichulos</li>
            </Link>
            <br />
            <Link to={"/ListProducts/casa"}>
              <li>Casa</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar