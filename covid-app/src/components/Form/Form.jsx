import { useFormState, useFormDispatch } from '../context/FormContext';
import StyledForm from './Form.styled';
import vektor2 from '../../assets/images/vektor2.png';
import Button from '../ui/Button/Button';

function Form() {
  const { provinsi, status, jumlah, provinces } = useFormState();
  const dispatch = useFormDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProvinceData = [...provinces];
    const index = updatedProvinceData.findIndex((item) => item.name === provinsi);

    if (index !== -1) {
      const newData = { ...updatedProvinceData[index].numbers };
      let newCases = parseInt(jumlah);

      switch (status) {
        case 'sembuh':
          newData.recovered += newCases;
          newData.treatment -= newCases;
          break;
        case 'meninggal':
          newData.death += newCases;
          newData.treatment -= newCases;
          break;
        case 'dirawat':
          newData.treatment += newCases;
          newData.confirmed += newCases;
          break;
        default:
          console.error('Status tidak valid');
          return;
      }

      updatedProvinceData[index].numbers.recovered = newData.recovered;
      updatedProvinceData[index].numbers.death = newData.death;
      updatedProvinceData[index].numbers.treatment = newData.treatment;
      updatedProvinceData[index].numbers.confirmed = newData.confirmed;

      dispatch({ type: 'UPDATE_PROVINCES', payload: updatedProvinceData });
      dispatch({ type: 'RESET_FORM' });
    }
  };

  return (
    <StyledForm>
      <div className="container">
        <h2 className="form__title">Form Covid</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__left">
            <img src={vektor2} alt="Descriptive Alt Text" className="form__image" />
          </div>
          <div className="form__right">
            <label className="form__label">Provinsi</label>
            <select
              className="form__input"
              onChange={(e) => dispatch({ type: 'SET_PROVINSI', payload: e.target.value })}
              value={provinsi}
            >
              <option value="" hidden>Pilih Provinsi</option>
              {provinces.map((item, index) => (
                <option key={index} value={item.name}>{item.name}</option>
              ))}
            </select>
            <br />
            <label className="form__label">Status</label>
            <select
              className="form__input"
              value={status}
              onChange={(e) => dispatch({ type: 'SET_STATUS', payload: e.target.value })}
            >
              <option value="">Select Status</option>
              <option value="sembuh">Sembuh</option>
              <option value="meninggal">Meninggal</option>
              <option value="dirawat">Dirawat</option>
            </select>
            <br />
            <label className="form__label">Jumlah:</label>
            <input
              className="form__input"
              type="number"
              onChange={(e) => dispatch({ type: 'SET_JUMLAH', payload: e.target.value })}
              value={jumlah}
            />
            <br />
            <Button variant="primary" size="medium" full type="submit">Add Data</Button>
          </div>
        </form>
      </div>
    </StyledForm>
  );
}

export default Form;
