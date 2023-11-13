import { useEffect, useState } from 'react';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import CardContentComponent from '@/components/card';
import CartoonDetail from '../[id]';


const Cartoons = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/cartoons/cartoons2D');
      const json = await resp.json();
      setData(json);
      console.log('Veri aldık');
    } catch (error) {
      console.error('Veri alınamadı veya işlenirken hata oluştu:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Cartoons</h1>
      <Grid>
        {data.map(cartoon => (
          <li key={cartoon.year}>
               <CardContentComponent cartoon={cartoon} />
          </li>
        ))}
        {/* <CartoonDetail id={2}  /> */}
      </Grid>
    </div>
  );
};

export default Cartoons;
