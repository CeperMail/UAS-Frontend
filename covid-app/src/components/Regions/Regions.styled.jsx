import styled from "styled-components";
import theme from "../../utils/constants/theme";

const StyledRegion = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');

  margin: 1rem;
  font-family: 'Poppins', sans-serif;
  background: #F8F9FA;
  padding-bottom: 1rem;
  text-align: center;

  .header {
    margin: 2rem 0;

    h2 {
      font-size: 2.5rem;
      color: ${theme.colors.primary};
    }

    h4 {
      font-size: 1.5rem;
      color: ${theme.colors.secondary};
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .card {
    border: 1px solid #ccc;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    background: #fff;
    max-width: 18rem;
    width: 100%;
    text-align: left;

    .card__header {
      font-size: 1.5rem;
      color: #073b4c;
      margin-bottom: 1rem;
    }

    .card__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.5rem 0;

      &.confirmed {
        color: #06d6a0;
      }

      &.recovered {
        color: #118AB2;
      }

      &.death {
        color: #EF476F;
      }

      span {
        display: flex;
        align-items: center;

        img {
          margin-left: 0.5rem;
          width: 20px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding-bottom: 3rem;
  }

  @media (min-width: 992px) {
    padding-bottom: 4rem;
  }
`;

export default StyledRegion;
