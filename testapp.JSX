// Import React and necessary components
import React from 'react';

// React component for the image gallery
function ImageGallery() {
  const images = [
    { src: 'Anus 1.jpeg', alt: 'Volupté Florale', caption: 'Volupté Florale', page: 'page1.html' },
    // Add other images here with similar structure
  ];

  const redirectToPage = (page) => {
    window.location.href = page;
  };

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <div key={index} onClick={() => redirectToPage(image.page)}>
          <img src={image.src} alt={image.alt} />
          <p>{image.caption}</p>
        </div>
      ))}
    </div>
  );
}

// React component for the main page
function App() {
  return (
    <div className="container">
      <h1>Voluptés céramiques</h1>
      <ImageGallery />
      <footer>
        <div className="entreprise-info">
          <p>Voluptés Céramiques</p>
          <p>La Ferme de la Vauve 91000 Massy-Palaiseau</p>
          <p>Contact : 06 84 04 74 71</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
