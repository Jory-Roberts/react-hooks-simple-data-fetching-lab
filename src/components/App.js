// create your App component here
import React, { useEffect, useState } from 'react';

const App = () => {
  const [image, setImage] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setImage(data.message);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error('Error fetching the image:', error);
        setIsLoaded(true);
      });
  }, []);

  return (
    <div>
      <p>
        {isLoaded ? (
          image ? (
            <img
              src={image}
              alt='A Random Dog'
            />
          ) : (
            'No image found'
          )
        ) : (
          'Loading'
        )}
      </p>
    </div>
  );
};
export default App;
