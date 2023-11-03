import { useEffect, useState } from 'react';
import { fetchCharacters } from '../api';
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import CardContentComponent from '../../components/CardContentComponent';
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getCharacters = async () => {
    const charactersData = await fetchCharacters();
    setCharacters(charactersData);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const handleSearchChange = (e) => { //
    setSearchQuery(e.target.value);
  };


  const filteredCharacters = searchQuery //
    ? characters.filter((character) =>
        character.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : characters;

  return (
    <Stack spacing={2}>
      <TextField
        id="search"
        label="Search Character"
        variant="outlined"
        size="small"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{ width: 300 }}
      />
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        {filteredCharacters.map((character) => (
          // <Card key={character.id} sx={{ width: '150px' }}>
          //   <CardMedia component="img" alt="character" height="140" image={character.image} />
          //   <CardContent>
          //     <Typography variant="h5" component="div">
          //       {character.name}
          //     </Typography>
          //     <Typography variant="body2" color="text.secondary">
          //       {character.gender} {character.status}
          //     </Typography>
          //   </CardContent>
          //   <CardActions>
          //     <IconButton aria-label="add to favorites">
          //       <FavoriteIcon color="error" />
          //     </IconButton>
          //     <Button size="small" variant="text" onClick={() => handleCharacterSelect(character)}>
          //       Details
          //     </Button>
          //   </CardActions>
          // </Card>
          <CardContentComponent character= {character}  key={character.id} sx={{ width: '150px' }} />

        ))}
      </Stack>
    </Stack>
  );
};

export default Characters;
