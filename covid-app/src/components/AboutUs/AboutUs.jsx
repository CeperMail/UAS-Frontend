import styled from 'styled-components';
import theme from '../../utils/constants/theme';

const StyledAbout = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');

  .about__container {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
  }
  
  .about__title {
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-align: center;
    color: ${theme.colors.primary};
  }
  
  .about__description {
    font-size: 1.25rem;
    line-height: 1.6;
    margin-bottom: 15px;
    text-align: justify;
  }
`;

export default StyledAbout;
