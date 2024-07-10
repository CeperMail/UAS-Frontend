import styled from 'styled-components';

const StyledNavbar = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');

  background-color: #00b4d8;
  padding: 1rem;
  color: #fff;
  max-height: 5rem;
  font-family: 'Poppins', sans-serif;

  @media (min-width: 992px) {
    padding: 1rem;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }

  h1 {
    font-size: 1rem;
    margin-right: 1rem;
    list-style: none;

    @media (min-width: 992px) {
      margin-right: 2rem;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-left: auto;

    @media (min-width: 992px) {
      margin-left: auto;
    }
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
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default StyledNavbar;
