import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Gallery from './components/gallery/gallery.component';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
