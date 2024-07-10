import styled from "styled-components";
import theme from "../../utils/constants/theme";

const StyledCard = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');

  margin: 1rem;
  font-family: 'Poppins', sans-serif;
  background: #F8F9FA;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    padding-bottom: 3rem;
  }

  @media (min-width: 992px) {
    padding-bottom: 4rem;
  }

  .card__text {
    margin: 1rem;
    margin-bottom: 4rem;
  }

  .card__title {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 3rem;
    color: ${theme.colors.primary};
  }

  .card__sub {
    color: ${theme.colors.secondary};
    margin-bottom: 1rem;
    font-size: 1.3rem;
    text-align: center;
  }

  .card__box {
    text-align: center;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
    }
  }

  .card__card {
    border: 1px solid #ccc;
    border-radius: 1rem;
    padding: 3rem;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    margin: auto;
    margin-bottom: 2rem;
    max-width: 20rem;
    width: 100%;

    @media (min-width: 768px) {
      margin-right: 2rem;
      max-width: 30rem;
      width: 80%;
      margin: 1rem;
    }

    @media (min-width: 992px) {
      margin: auto;
      max-width: 30rem;
      width: 30%;
    }
  }

  .card__category {
    color: #073b4c;
  }

  .card__confirmed {
    color: #06d6a0;
  }

  .card__recovered {
    color: #118AB2;
  }

  .card__death {
    color: #EF476F;
  }
`;

export default StyledCard;
