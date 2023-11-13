import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';


function CardContentComponent(props){

const {cartoon} = props;
const [selectedCartoon, setSelectedCartoon] = useState(null);

const handleCartoonSelect = (cartoon) => { //
  setSelectedCartoon(cartoon);
};
return(
    <Card key={cartoon.id} sx={{ width: '150px' }}>
    <CardMedia component="img" alt="cartoon" height="140" image={cartoon.image} />
    <CardContent>
      <Typography variant="h5" component="div">
        {cartoon.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {cartoon.year} {cartoon.genre}
      </Typography>
    </CardContent>
    <CardActions>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon color="error" />
      </IconButton>
      <Button size="small" variant="text" onClick={() => handleCartoonSelect(cartoon)}>
        Details
      </Button>
    </CardActions>
  </Card>)
}
export default CardContentComponent;