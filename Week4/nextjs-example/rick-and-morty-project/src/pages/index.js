import { Stack } from '@mui/material';
import Characters from './characters';
import Locations from './locations';
import Episodes from './episodes';
const Home = () => {
  return (
    <Stack spacing={1}>
      <h1>Rick and Morty Characters</h1>
      <Characters />
      <Locations />
      <Episodes />
    </Stack>
  );
};

export default Home;
