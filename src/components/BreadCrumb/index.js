// styles
import { Wrapper, Content } from './BreadCrumb.style'

// proptypes can use on developer mode only can't use on production
import PropTypes from 'prop-types';

// links
import { Link } from 'react-router-dom'

function BreadCrumb({ movieTitle }) {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>

      </Content>
    </Wrapper>
  )
}

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string
}

export default BreadCrumb
