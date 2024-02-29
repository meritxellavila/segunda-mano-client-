import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import API_URL from '../utils/api'


function ListSearch() {

    const params = useParams()

    const [searchProduct, setSearchProduct] = useState(null)

    useEffect(() => {
        axios.get(`${API_URL}/products?name=${params.searchProduct}`)
    })
  return (
    <div>

    </div>
  )
}

export default ListSearch