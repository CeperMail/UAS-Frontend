import { createContext, useContext, useEffect, useReducer } from 'react';
import ENDPOINTS from '../../utils/constants/endpoints';

const FormStateContext = createContext();
const FormDispatchContext = createContext();

const initialState = {
  provinsi: '',
  status: '',
  jumlah: '',
  provinces: [],
};

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_PROVINSI':
      return { ...state, provinsi: action.payload };
    case 'SET_STATUS':
      return { ...state, status: action.payload };
    case 'SET_JUMLAH':
      return { ...state, jumlah: action.payload };
    case 'SET_PROVINCES':
      return { ...state, provinces: action.payload };
    case 'UPDATE_PROVINCES':
      return { ...state, provinces: action.payload };
    case 'RESET_FORM':
      return { ...state, provinsi: '', status: '', jumlah: '' };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export function FormProvider({ children }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    const fetchProvincesData = async () => {
      try {
        const response = await fetch(ENDPOINTS.INDONESIA());
        const data = await response.json();
        dispatch({ type: 'SET_PROVINCES', payload: data.regions });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProvincesData();
  }, []);

  return (
    <FormStateContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormStateContext.Provider>
  );
}

export function useFormState() {
  const context = useContext(FormStateContext);
  if (context === undefined) {
    throw new Error('useFormState must be used within a FormProvider');
  }
  return context;
}

export function useFormDispatch() {
  const context = useContext(FormDispatchContext);
  if (context === undefined) {
    throw new Error('useFormDispatch must be used within a FormProvider');
  }
  return context;
}
