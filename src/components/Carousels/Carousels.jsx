import React from 'react'
import { Box } from '@mui/material'

function Carousels(){
  return(
    <Box>
      <Carousel Large ImageUrl='https://maccare.vn/wp-content/uploads/2021/03/macbook-air-2022.jpeg'/>
      <Box sx={{display:'flex'}}>
        <Carousel ImageUrl='https://www.hnmac.vn/media/data/Macbook-Air-2022-920x613.jpg'/>
        <Carousel ImageUrl='https://cafefcdn.com/203337114487263232/2022/1/10/-16418166232861739111682.jpg'/>
        <Carousel ImageUrl='https://fdn.gsmarena.com/imgroot/news/21/09/apple-iphone-13-in-for-review/-1220x526/gsmarena_000.jpg'/>
      </Box>
    </Box>
  )
}

function Carousel(props) {
  return (
    <img
        style={{objectFit:'cover', marginLeft: props.Large == true ? 10 : 10, marginBottom: props.Large == true ? 7 : 'none'}}
        width={props.Large == true ? 862 : 280}
        height={props.Large == true ? 386 : 224}
        preview={false}
        src={props.ImageUrl}
    />
  )
}

export default Carousels