import React from 'react'
import { Box} from '@mui/material';
import { Inputs } from './Inputs';
import styled from '@emotion/styled';

const StyledBox = styled(Box)({
    borderRadius: '20px',
    backgroundColor: 'white',
    margin: '0 auto',
    width:'60%',
    padding:10,
    display: 'flex',
    flexDirection: 'column'
  })


const Wrapper = () => {
  return (
    <StyledBox>
      <Inputs/>
    </StyledBox>
    
  )
}

export default Wrapper