import { Card } from '@mui/material'
import React from 'react'
import QuoteBody from './QuoteBody'
import QuoteHeader from './QuoteHeader'

const wrapper = () => {
  return (
    <Card
      sx={
        {
          textAlign: 'center',
          margin: 'auto',
          width:{xs: '60%', md: '50%'},
          //height: 230,
          padding: '20px',
          borderRadius: '20px'
      }
    }
    >
      <QuoteHeader/>
      <QuoteBody/>
    </Card>
  )
}

export default wrapper
