
import { Button } from '@mui/material'
import React from 'react'

export const Buttons = ({onClick, text}) => {
  return (
      <Button
        variant='contained'
        color='success'
        onClick={onClick}
        sx={
          {
            borderRadius:'20px',
            fontSize: { xs:'10px', sm:'14px'},
            width: {xs:'100%'}  
          }
        }
        >
        {text}
      </Button>
  )
}
