import React from 'react'
import { Button, colors, OutlinedInput, styled} from '@mui/material';
import { useState } from 'react';

const StyledInput = styled(OutlinedInput)({
  borderRadius: '10px',
  margin: '10px',
  backgroundColor: colors.green[100],
})

const StyledButton = styled(Button)({
  borderRadius: '10px',
  margin: '10px',
  padding:10,
  backgroundColor: colors.green[500],
  fontSize: '18px'
})

export const Inputs = () => {
  const [getMsg, setGetMsg] = useState('')

  const [grabPhoneNum, setGrabPhoneNum] = useState('')

  const collectPhone = function(e){
    setGrabPhoneNum(e.target.value)
  }

  const collectMessage = function(e){
    setGetMsg(e.target.value)
  }

  const handleWhatsAppMsg = function (){
    const WhatsAppMsgUrl = `https://web.whatsapp.com/send/?phone=${grabPhoneNum}&text=${getMsg}%21&type=phone_number&app_absent=0`
    window.open(WhatsAppMsgUrl, '_blank')
  }

  return (
    <>
      <StyledInput
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder="Write a message"
          onChange={collectMessage}
          value={getMsg}
        />
        <StyledInput
          id="outlined-static"
          placeholder="Phone number, Example: +971XXXXXXXXXXX"
          onChange={collectPhone}
          value={grabPhoneNum}
        />
      <StyledButton onClick={handleWhatsAppMsg} variant="contained" color='success'>SEND</StyledButton>
    </>
  )
}
