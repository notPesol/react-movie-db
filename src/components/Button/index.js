// styles
import { Wrapper } from './Button.style';
function Button({ text, callback }) {
  return (
    <Wrapper onClick={() => callback(true)}>
      {text}
    </Wrapper>
  )
}

export default Button
