import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API_URL from '../utils/api'

function ProductDetall() {
    const params = useParams()
    console.log(params)

    const [details, setDetails] = useState(null)

    useEffect(() => {
        axios.get(`${API_URL}/products/${params.productId}`)
        .then(() => {

        })
        .catch(() => {
            
        })
    })
    return (
        <div>
            <h1>Hello from products details</h1>
        </div>
    )
}

export default ProductDetall
