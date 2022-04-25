import React from 'react'
import Icon from '../../media/Benefit.png'
import { Box } from '@mui/material'

function Benefits(){
  return(
    <Box sx={{marginTop:'8px', display:'flex', justifyContent:'space-between'}}>
      <Benefit/>
      <Benefit/>
      <Benefit/>
      <Benefit/>
    </Box>
  )
}

function Benefit() {
  return (
    <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'279px',
        height:'94px',
        background: '#F8F8F8',
        border: '1px solid #DFD8D8',
        boxSizing: 'border-box',
        borderRadius: '5px',
    }}>
      <div style={{maxHeight:'30px', marginRight:'14.5px'}}>
        <img src={Icon}/>
      </div>
      <div>
        <div style={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '28px',
        }}>
            Free Shipping
        </div>
        <div style={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '16px',
        }}>
            For order from 50%
        </div>
      </div>
    </div>
  )
}

export default Benefits