import  { useEffect, useState } from 'react';

const PostBody = ({ id }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(null); // Hata durumu için bir state ekledik

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          // İstek başarısızsa hata durumunu ayarla
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setText(data.body);
      })
      .catch((err) => {
        // Hata durumunda hatayı yakala ve error state'ini güncelle
        setError('Something went wrong');
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>; // Hata durumunda hata mesajını göster
  }

  return <div>{text}</div>;
};

export default PostBody;
