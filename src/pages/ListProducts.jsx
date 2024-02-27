import React, { useEffect, useState } from 'react'
import API_URL from '../utils/api'

export default function ListProducts() {
  const [categoryProducts, setCategoryProducts] = useState(null)

  useEffect(() => {
    axios.get(`${API_URL}/products?category=ropa`)
    .then((response) => {
      console.log(response.data)
      setCategoryProducts(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  if (categoryProducts === null) {
    return <h2>Buscando</h2>
  }


  return (
    <div>
      {categoryProducts.map((eachProductCategory) => {
        return(
          <div key={eachProductCategory.id}>
            <img src={eachProductCategory.img} alt="" />
          </div>
        )
      })}
    </div>
  )
}