import { Button, Rating, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Star1 from '../../media/star-fill.png'
import Star2 from '../../media/star-space.png'
import AddCart from '../../media/AddCart.png'

function ProductCard(props) {
  console.log(props.data)
  return (
    <Box sx={{
      background: '#FFFCFC', border: '1px solid #B4B1B1', boxSizing:'border-box',
      borderRadius: '5px', height: '395px', width: '280px',
      marginRight:'11px', display:'flex', alignItems:'center',
      flexDirection:'column', marginBottom:'84px', cursor:'pointer'
    }}
    >
      <img src={`${props.data.images[0].url}`}
        style={{
            height: '200px',
            width: '233.18031311035156px',
            borderRadius: '5px',
            objectFit:'cover',
            marginTop:'21px'
        }}
      />
      <Box sx={{
          width: '233.18031311035156px',
      }}>
        <Typography sx={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '37px',
            color: '#000000',
            marginTop:'15px'
        }}>
          {props.data.name}
        </Typography>
        <Typography sx={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '21px',
            color: '#000000',
            marginBottom:'7px'
        }}>
          ID: {props.data.id}
        </Typography>
        <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            marginBottom:'6px'
        }}>
          <Box sx={{
            display:'flex',
            marginLeft:'1.59px'
          }}>
            <Rating readOnly value={props.data.rating}/>
          </Box>
          <Typography sx={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '18px',
              color: '#D70000',
              marginRight:'6.59px',
              display:'flex',
              alignItems:'center',
              justifyContent:'center'
          }}>
            50% Off
          </Typography>
        </Box>
        <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            maxHeight:'28px',
            marginBottom:'3px'
        }}>
          <Typography sx={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '28px',
            color: '#000000',
            marginLeft:'1.59px'

          }}>
            $ {props.data.price}
          </Typography>
          <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            height:'46px',
            width:'46px',
            cursor:'pointer',
            borderRadius:'100px',
            // '&:hover': {
            //     background: "#E6E6E6",
            //  },
          }}
          >
            <img src={AddCart}/>
          </Box>
        </Box>
        <Typography sx={{
            width: '98px',
            height: '24px',
            background: 'rgba(0, 167, 17, 0.5)',
            border: '1px solid rgba(0, 202, 20, 0.5)',
            boxShadow: '5px 5px 20px rgba(196, 255, 202, 0.5)',
            borderRadius: '10px',
            fontFamily: 'Almarai',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '16px',
            color: '#FFFFFF',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
          Available
        </Typography>
      </Box>
    </Box>
  )
}

export default ProductCard