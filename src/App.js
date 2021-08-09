// components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';

// Context
import UserProvider from './context';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// style
import { GlobalStyle } from './GlobalStyle';


function App() {
  return (
    <Router>
      <UserProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:movieId" element={<Movie />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
