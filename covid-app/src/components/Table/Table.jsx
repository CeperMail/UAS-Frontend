import { useFormState } from '../context/FormContext';
import StyledTable from './Table.styled';

function Table() {
  const { provinces } = useFormState();

  return (
    <StyledTable>
      <div className="overflow__atas">
        <h2 className="overflow__title">Provinsi</h2>
        <h4 className="overflow__sub">Data Covid Berdasarkan Provinsi</h4>
        <div className="overflow__container">
          <table className="overflow__table">
            <thead>
              <tr>
                <th>No</th>
                <th>Kota</th>
                <th>Kasus</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
                <th>Dirawat</th>
              </tr>
            </thead>
            <tbody>
              {provinces.map((province, index) => (
                <tr key={index} className="overflow__tr">
                  <td>{index + 1}</td>
                  <td>{province.name}</td>
                  <td>{province.numbers.confirmed}</td>
                  <td>{province.numbers.recovered}</td>
                  <td>{province.numbers.death}</td>
                  <td>{province.numbers.treatment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </StyledTable>
  );
}

export default Table;
