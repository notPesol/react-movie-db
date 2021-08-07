// styles
import { Wrapper, Content } from './Grid.style';

// proptypes can use on developer mode only can't use on production
import PropTypes from 'prop-types';

function Grid({ header, children }) {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}

Grid.propTypes = {
  header: PropTypes.string,
  children: PropTypes.array
}

export default Grid
