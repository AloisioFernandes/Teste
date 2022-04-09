import { useState } from 'react'

import "./App.css";

function App() {
  const [images, setImages] = useState([])

  const dragEvents = {
    onDragEnter: (e) => {
      e.preventDefault();
    },
    onDragLeave: (e) => {
      e.preventDefault();
    },
    onDragOver: (e) => {
      e.preventDefault();
    },
    onDrop: (e) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files)
      const images = files.map((file) => {
        const { name, size } = file
        return { name, size, preview: URL.createObjectURL(file) }
      })
      setImages(images)
    }
  }

  return (
    <div className="container">
      <div className="logo">
        <img src="/photography-group.png" alt="Photography Group" />
      </div>
      <div
        className="file-drop"
        {...dragEvents}
      >
        <div className="text">Arraste a imagem para cá</div>
      </div>
      <div className="preview">
        {images.map((image) => {
          return (
            <div className="image" key={image.name}>
              <img
                src={image.preview}
                alt={image.name}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
