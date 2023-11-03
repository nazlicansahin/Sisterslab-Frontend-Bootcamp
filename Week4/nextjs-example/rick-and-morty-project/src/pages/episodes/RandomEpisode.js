import { useState } from 'react';

import Episodes from "./index";
const RandomEpisode = () => {
    
const [id, setId] = useState(1);
return (
  <div>
    <button onClick={() => setId(Math.floor(Math.random() * 100) + 1)}>
      Episodes
    </button>
    <Episodes />
  </div>
);}

export default RandomEpisode;