import React from 'react'
import { Box, Typography } from '@mui/material'
import ProductCard from '../ProductCard/ProductCard'

function BestSellers(props) {
  return (
    <Box>
      <Box sx={{
        width: '1151px', height: '43px',alignItems:'center',
        display:'flex', justifyContent:'space-between',
        marginBottom:'19px', marginTop:'19px'}}>
        <Typography sx={{
          marginLeft:'28px', width: 118, height: 25,
          fontFamily: 'Arial', fontStyle: 'normal', fontWeight: 700,
          fontSize: 22, display:"flex", alignItems:'center',
          lineHeight: '25px', color:'black'}}>
          Bestsellers
        </Typography>
        <button style={{
          width: 131, height: 31, background: '#FFFFFF',
          border: '1px solid #F0E36A', borderRadius: 56, boxSizing:'border-box',
          fontFamily: 'Arial', fontStyle: 'normal', fontWeight: 700,
          fontSize: 16, color: '#000000', cursor:'pointer',
          marginRight:'20px', lineHeight: '18px'
        }}>
          Show more...
        </button>
      </Box>
      <Box sx={{
        display:'flex', width:'1151px'
      }}>
        {
          props.loading == true ? (
            <>
              <div>loading</div>
            </>
          ):(
            <>
              <ProductCard data={props.dataProduct[0]}/>
              <ProductCard data={props.dataProduct[1]}/>
              <ProductCard data={props.dataProduct[2]}/>
              <ProductCard data={props.dataProduct[3]}/>
            </>
          )
        }
      </Box>
    </Box>
  )
}

export default BestSellers