import "./App.css";

function App() {
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
    }
  }

  return (
    <div className="container">
      <div className="logo">
        <img src="/photography-group.png" alt="Photography Group" />
      </div>
      <div
        className="file-drop"
      >
        <div className="text">Arraste a imagem para cá</div>
      </div>
      <div className="preview">
        <div className="image">
          <img
            src="https://loremflickr.com/600/600?random=1"
            alt="Lorem Flickr"
          />
        </div>
        <div className="image">
          <img
            src="https://loremflickr.com/600/600?random=2"
            alt="Lorem Flickr"
          />
        </div>
        <div className="image">
          <img
            src="https://loremflickr.com/600/600?random=3"
            alt="Lorem Flickr"
          />
        </div>
        <div className="image">
          <img
            src="https://loremflickr.com/600/600?random=4"
            alt="Lorem Flickr"
          />
        </div>
        <div className="image">
          <img
            src="https://loremflickr.com/600/600?random=5"
            alt="Lorem Flickr"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
