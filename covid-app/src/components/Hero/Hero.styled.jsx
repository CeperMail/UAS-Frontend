import styled from 'styled-components';
import theme from '../../utils/constants/theme';

const StyledHero = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');

  .container {
    margin: 1rem;
    font-family: 'Poppins', sans-serif;
    background-color: #FFFFFF;
  }

  .hero {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero__left {
    margin-bottom: 1rem;
  }

  .hero__title {
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 3rem;
  }

  .hero__sub {
    color: ${theme.colors.secondary};
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  .hero__description {
    color: #64748b;
    margin-bottom: 1rem;
    font-size: 1rem;
    text-align: justify;
  }

  .hero__image {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .hero__image {
      max-width: 90%;
      height: auto;
      border-radius: 25px;
      margin: auto;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: auto;
    }

    .hero {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }

    .hero__left {
      flex-basis: 50%;
    }

    .hero__right {
      flex-basis: 50%;
    }

    .hero__image {
      margin-left: 3rem;
    }
  }
`;

export default StyledHero;
