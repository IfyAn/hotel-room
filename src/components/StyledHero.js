import styled from 'styled-components'
import background from '../images/background.jpg';


const StyledHero = styled.header`
min-height: 50vh;
background: url(${props=>props.img}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`
export default StyledHero