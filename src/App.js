import { Box, colors, styled } from '@mui/material';
import Wrapper from './components/Wrapper';

const AppStyledBox = styled(Box)(({ Theme })=>({
  backgroundColor : colors.green[900],
  width:'100%',
  height:'100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'

}))

function App() {
  return (
      <AppStyledBox>
        <Wrapper/>
      </AppStyledBox>
  );
}

export default App;
