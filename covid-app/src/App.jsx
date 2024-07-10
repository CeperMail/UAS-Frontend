import { Routes, Route } from 'react-router-dom';
import { FormProvider } from './components/context/FormContext.jsx';
import { ThemeProvider } from 'styled-components';
import theme from './utils/constants/theme';
import HomePage from './pages/pages/Home';
import Indonesia from './pages/pages/Indonesia';
import Provinsi from './pages/pages/Provinsi';
import About from './pages/pages/About';
import Layout from './Layout/index.jsx';

function App() {
  return (
     <ThemeProvider theme={theme}>
        <FormProvider>
          <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/indonesia" element={<Indonesia />} />
                <Route path="/provinsi" element={<Provinsi />} />
                <Route path="/about" element={<About />} />
              </Routes>
          </Layout>
        </FormProvider>
     </ThemeProvider>
  );
}

export default App;
