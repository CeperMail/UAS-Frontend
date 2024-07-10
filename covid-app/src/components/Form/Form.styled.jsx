import styled from 'styled-components';
import theme from '../../utils/constants/theme';

const StyledForm = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');

  .container {
    margin: 1rem;
    background-color: #fff;
    padding: 2rem;
    font-family: 'Poppins', sans-serif;
  }

  .form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .form__image {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
  }

  .form__right {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  .form__title {
    font-size: 36px;
    color: ${theme.colors.primary};
    text-align: center;
    margin-bottom: 2rem;
  }

  .form__button {
    padding: 0.5rem 7rem;
    background-color: #4361ee;
    color: #fff;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .form__label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #262926;
  }

  .form__input {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 3px;
    border: 1px solid #4361ee;
    width: 100%;
    max-width: 20rem;
  }

  @media (min-width: 768px) {
    .form {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .form__left {
      flex-basis: 50%;
    }

    .form__right {
      flex-basis: 50%;
      margin-top: 0;
    }

    .form__image {
      margin-bottom: 0; 
      max-width: 80%; 
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 3rem auto;
    }

    .form {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }

    .form__left {
      flex-basis: 50%;
    }

    .form__right {
      flex-basis: 50%;
    }
  }
`;

export default StyledForm;
