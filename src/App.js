// components
import Header from './components/Header';
import Home from './components/Home';

// style
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
       <GlobalStyle />
      <Header/>
      <Home />
    </div>
  );
}

export default App;
