import React, { useEffect, useState} from 'react'
import { Container, Box } from '@mui/material'
import Benefits from '../../components/Benefits/Benefits'
import Carousels from '../../components/Carousels/Carousels'
import BestSellers from '../../components/BestSellers/BestSellers'
import productApi from '../../api/productApi'

function Home() {
  const [dataProduct, setDataProduct] = useState()
  const [loading, setLoading] = useState(true)

  async function getProductData(){
    setLoading(true)
    await productApi.getAllProduct().then(
      r => {
        setDataProduct(r.data.result)
        setLoading(false)
      }
    ).catch(
      err => {
        alert(err)
        setLoading(false)
      }
    )
  }
  
  useEffect(() => {
    getProductData()
    return () => {
    }
  }, [])
  
  return (
    <Box sx={{display:'flex',justifyContent:'center',marginTop:'11px', flexDirection:'column'}}>
      <Container>
        <Box sx={{display:'flex'}}>
          <div style={{width:'280px', height:'628px', background:'pink'}}/>
          <Carousels dataProduct={dataProduct}/>
        </Box>
        <Benefits/>
      </Container>
      <Container>
        <BestSellers dataProduct={dataProduct} loading={loading}/>
      </Container>
    </Box>
  )
}

export default Home