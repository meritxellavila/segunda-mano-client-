import React, { useState } from 'react'

function Favoritos(props) {

  const [favProduct, setFavProduct] = useState([])


  return (
    <div>
      <h2>Tus Favoritos:</h2>

      {favProduct.map((producto, index) => {
        return (
          <h2>{}</h2>
        )
      })}

    </div>
  )
}

export default Favoritos
