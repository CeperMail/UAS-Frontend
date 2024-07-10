import styled from 'styled-components';
import theme from '../../utils/constants/theme';

const StyledTable = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');

  margin: 1rem;
  font-family: 'Poppins', sans-serif;
  background: #ffffff;

  .overflow__atas {
    margin: 1rem;
    margin-bottom: 4rem;
  }

  .overflow__title {
    font-size: 3rem;
    color:  ${theme.colors.primary};
    text-align: center;
  }

  .overflow__sub {
    color: ${theme.colors.secondary};
    margin-bottom: 1rem;
    font-size: 1.3rem;
    text-align: center;
  }

  .overflow__container {
    display: flex;
    flex-direction: column;
    margin: auto;
    font-size: auto;
    width: 100%;
    overflow-x: auto; 
    overflow-y: auto; 
    height: 40rem; 
    padding: 3rem;
  }

  .overflow__table {
    width: 100%;
    border-collapse: collapse;
    overflow-x: auto; 
    max-height: 90rem; 
  }

  .overflow__table th,
  .overflow__table td {
    border: 1px solid #030202; 
    padding: 0.3rem; 
    text-align: center;
    margin: auto;
  }

  .overflow__tr {
    color: #06D6A0;
  }

  @media (min-width: 768px) {
    margin: 2rem;

    .overflow__table th,
    .overflow__table td {
      padding: 1rem;
    }
  }

  @media (min-width: 992px) {
    margin: 3rem;

    .overflow__table th,
    .overflow__table td {
      padding: 2rem;
    }
  }
`;

export default StyledTable;
