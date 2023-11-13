import { Container, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';



const CartoonDetail = ({id})  => {
  const router = useRouter();

  const { id } = router.query;
    const [cartoon, setCartoon] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.sampleapis.com/cartoons/cartoons2D/${id}`)
        .then((response) => {
          setCartoons(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  if (!cartoon) return <div>Loading...</div>;


  return (
    <Container>
      <img
        src={cartoon.image ?? 'https://picsum.photos/200/300'}
        alt={cartoon.title}
        loading="lazy"
      />
      <Typography variant="h4">{cartoon.title}</Typography>
      <Typography variant="h5">{cartoon.year}</Typography>
      <Typography variant="h6">
        {cartoon.currency} {cartoon.genre}
      </Typography>
      <Typography variant="body">{cartoon.description}</Typography>
    </Container>
  );
};

export default CartoonDetail;

