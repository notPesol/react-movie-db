// styles
import { Wrapper, Content } from './BreadCrumb.style'

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

export default BreadCrumb
