import styled from 'styled-components';

const StyledFooter = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');

  background-color: #00b4d8;
  padding: 1.5rem;
  color: #fff;
  max-height: 5rem;
  font-family: 'Poppins', sans-serif;

  @media (min-width: 992px) {
    padding: 0;
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }

    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .brand {
    font-size: 0.5rem;
    margin-right: 0rem;
    list-style: none;
    align-self: flex-start;

    @media (min-width: 992px) {
      font-size: 1rem;
      margin-right: 1rem;
      list-style: none;
      margin-left: 20px;
    }

    h1 {
      margin: 0;
    }

    p {
      font-size: 8px;
      margin-bottom: 0;

      @media (min-width: 992px) {
        font-size: 0.8rem;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-left: auto;

    @media (min-width: 992px) {
      margin-left: auto;
    }

    li {
      margin-right: 1rem;
      font-size: 12px;

      @media (min-width: 768px) {
        margin-right: 0.5rem;
      }

      @media (min-width: 992px) {
        margin-right: 2rem;
      }

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default StyledFooter;
