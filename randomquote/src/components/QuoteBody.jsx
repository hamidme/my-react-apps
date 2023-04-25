import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, Divider, Grid, IconButton, Typography } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Twitter, WhatsApp } from '@mui/icons-material';
import Quotes from './Quotes'
import { useState } from 'react';
import { Buttons } from './Buttons';

const QuoteBody = () => {
  const [myQuote, setMyQuote] = useState(Quotes[0].quote[0])
  const [quoteAuthor, setQuoteAuthor] = useState(Quotes[0].author)
  const [open, setOpen] = useState(false);
  const [quoteToFriend, setQuoteToFriend] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const tweetQuote = function (){
    const tweetQuoteUrl = `https://twitter.com/intent/tweet?hashtags=QuotestoShapeyourDay&text=${myQuote} - ${quoteAuthor}`
    window.open(tweetQuoteUrl, '_blank')
  }

  // const handlePostToFriend = function (e){
  //   setQuoteToFriend(e.target.value)
  // }
  const WhatsAppQuote = function (){
    const WhatsAppQuoteUrl = `https://web.whatsapp.com/send/?phone=${quoteToFriend}&text=${myQuote} - ${quoteAuthor}%21&type=phone_number&app_absent=0`
    window.open(WhatsAppQuoteUrl, '_blank')
  }
  
  const genRanNum = function(){
    const randQuote = Math.floor(Math.random()*Quotes.length)
    const innerQuoteLength = Quotes[randQuote].quote.length
    const randSubQuote = Math.floor(Math.random()*innerQuoteLength)
    setMyQuote(Quotes[randQuote].quote[randSubQuote])
    setQuoteAuthor(Quotes[randQuote].author)
  }
  return (
    <Box>
      <Box>
        <Grid container my={2}>
          <Grid item xs={1}>
              <FormatQuoteIcon/>
          </Grid>
          <Grid item xs={10}>
              <Typography variant='body' p={1}>
                {myQuote}
              </Typography>
          </Grid>
          <Grid item xs={1}>
            <Box>
              <FormatQuoteIcon/>
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <Typography gutterBottom variant='body2' sx={{textAlign:'end', mr:1,fontStyle:'italic'}}>
            - {quoteAuthor}
          </Typography>
        </Grid>
      </Box>
      <Box>
        <Divider variant="middle" />
        <Grid container spacing={1} alignItems='center' justifyContent='center' mt='5px'>
          <Grid display='flex' flexDirection='row' item xs>
            <Avatar sx={{bgcolor:'white', border: 'solid 1px green', cursor:'pointer', margin:'0 4px'}}>
              <Button onClick={handleClickOpen} title='Share with a WhatsApp contact' >
                <WhatsApp  color='success'/>
              </Button>
            </Avatar>
            <Dialog
              sx= {{backgroundColor: '#1b5e20'}}
              open={open}
              onClose={handleClose}
            >
              <DialogContent>
                  <Typography variant='body' p={1} id="alert-dialog-description">
                    {myQuote}
                  </Typography>
                  <Typography  gutterBottom variant='body2' sx={{textAlign:'end', mr:1,fontStyle:'italic'}}>
                  - {quoteAuthor}
                  </Typography>
                  {/*<TextField
                    fullWidth
                    variant="filled"
                    placeholder='971565738847'
                  />*/}
              </DialogContent>
              <DialogActions>
                <Buttons
                  /*onChange={handlePostToFriend}*/
                  onClick = {WhatsAppQuote}
                  value = {quoteToFriend}
                  text = 'Share with a WhatsApp contact'
                />
              </DialogActions>
            </Dialog>
            <Avatar sx={{bgcolor:'white', border: 'solid 1px green', cursor:'pointer', margin: '0 4px'  }}>
              <IconButton href='#' title='Tweet Quote' onClick={tweetQuote}>
                <Twitter color='success'/>
              </IconButton>
            </Avatar>
          </Grid>
  
          <Grid xs>

          </Grid>
          <Grid item xs md textAlign='end'>
            <Buttons
              onClick={genRanNum}
              text = 'New Quote'
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default QuoteBody