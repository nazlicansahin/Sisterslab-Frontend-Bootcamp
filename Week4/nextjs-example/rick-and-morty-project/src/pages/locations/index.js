import { fetchLocations } from "../api.js";
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

// https://rickandmortyapi.com/api/location
const Locations =() => {

    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleLocationSelect = (location) => { //
      setSelectedLocation(location);
    };
    const getlocations = async () => {
        const locationsData = await fetchLocations();
        setLocations(locationsData);
      };
 
      
  useEffect(() => {
    getlocations();
  }, []);
  return ( 
    <Stack spacing={2}>
    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
      {locations.map((location) => (
   <Card key={location.id} sx={{ width: '150px' }}>
            <CardMedia component="text" alt="location" height="140" image={location.image} />
            <CardContent>
              <Typography variant="h5" component="div">
                {location.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {location.type} {location.dimension}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon color="error" />
              </IconButton>
              <Button size="small" variant="text" onClick={() => handleLocationSelect(location)}>
                Details
              </Button>
            </CardActions>
          </Card>
             ))}
        </Stack>
    </Stack>
  )
}

export default Locations;