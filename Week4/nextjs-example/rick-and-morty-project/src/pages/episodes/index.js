import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  IconButton,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Episodes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/episode');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.results); // Access the 'results' property
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!Array.isArray(data)) {
    return <p>Data is not an array.</p>;
  }

  return (
    <div>
      <h1>Episodes</h1>

      <Stack spacing={2}>
    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
      {data.map((data) => (
   <Card key={data.id} sx={{ width: '150px' }}>
            <CardMedia component="text" alt="data" height="140" image={data.air_date} />
            <CardContent>
              <Typography variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.episode} {data.characters}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon color="error" />
              </IconButton>
              <Button size="small" variant="text" onClick={() => handledataSelect(data)}>
                Details
              </Button>
            </CardActions>
          </Card>
             ))}
        </Stack>
    </Stack>
    </div>
  );
};

export default Episodes;
