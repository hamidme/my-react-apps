import { Box, colors} from "@mui/material";
import Wrapper from './components/Wrapper'



function App() {
  return (
    <Box
      sx={
      {
        bgcolor : colors.green[900],
        width:'100%',
        height:'100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
    >
      <Wrapper/>
    </Box>
  );
}

export default App;
