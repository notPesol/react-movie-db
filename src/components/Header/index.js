// Links
import { Link } from 'react-router-dom';

// logo img
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

// styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.style';


import { useContext } from 'react';
// Context
import { Context } from '../../context';

function Header() {
  const [user, setUser] = useContext(Context);
  console.log(user);

  const handleClick = () => {
    setUser(undefined);
  }

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        {user ? (
          <div>
            <span>Logged in as: {user.username}</span> | <button onClick={handleClick}>Logout</button>
          </div>)
          : (
            <Link to="/login"><span>Login</span></Link>
          )
        }
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  )
}

export default Header
