
import './App.css';
import Container from './components/Container';
import Giphyapi from './components/Giphy-api';




function App() {
  return (
    <div className="App">
      <Container giphs={Giphyapi} />
      
     
    </div>
    
      
  );
}

export default App;