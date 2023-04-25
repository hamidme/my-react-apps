import React from 'react'
import Typography from '@mui/material/Typography'


const QuoteHeader = () => {
  return (
    <Typography variant='h5'
      sx={
        {
          fontWeight:500,
          py:'10px'
      }
    }
    >
      Quotes to Shape your Day
    </Typography>
  )
}

export default QuoteHeader
