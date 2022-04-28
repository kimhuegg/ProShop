import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import productApi from '../../api/productApi';
import ProductCard from '../../components/ProductCard/ProductCard'
import { Box, Typography } from '@mui/material'


function SearchResult() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const location = useLocation()
    const {product} = location
    useEffect(() => {
        console.log(location)

        productApi.search(location.state).then((res) => {
            console.log(res.data.products)
            setLoading(false)
            setData(res.data.products.result)
        }).catch((error) => {
            throw Error(error)
        })
    }, [product, location])
    return (
        <Box sx={{
            display:'flex', width:'1151px'
          }}>
            {
                loading ?
                    <div>loading</div>
                    : ""
            }
            {
                data.map((item) => <ProductCard data={item} />)

            }

        </Box>
    )
}

export default SearchResult