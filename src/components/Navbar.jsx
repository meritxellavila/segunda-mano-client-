import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import axios from 'axios'
import API_URL from '../utils/api'

function Navbar() {

  //1.estado
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])

  // flujo controlado del campo
  const handleSearch = (event) => {
    let inputSearch = event.target.value
    console.log(inputSearch)
    setSearch(inputSearch)
  }


  const handleBuscar = (e) => {
    e.preventDefault()

    axios.get(`${API_URL}/products?name=${search}`)
      .then((response) => {
        console.log(response.data)
        setSearchResult(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  // boton
  //cuando clique llamar backend, pedir que devuelva todos los productos

  return (
    <div>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="log" width={"60px"} />
        </Link>
        <button className='results' onClick={handleBuscar}>
          <span className="results-icon">🔎</span>
          <input onChange={handleSearch} className='buscador' type="search" name="busquedaproducto" placeholder='Buscar...' />
          {searchResult.map((eachSearch) => {
            return(
              <div id='resultados' key={eachSearch.id}>
                <Link to={`/ProductDetall/${eachSearch.id}`}>
                  <img src={eachSearch.image} alt="imagen" />
                  <h5>{eachSearch.name}</h5>  
                </Link>
              </div>
            )
          })}
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
            <Link to={"/ListProducts/vehiculos"}>
              <li>Vehiculos</li>
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