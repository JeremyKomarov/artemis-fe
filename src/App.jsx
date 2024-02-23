import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Activities from './pages/Activities';
import Vision from './pages/Vision';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="activities" element={<Activities />} />
          <Route path="vision" element={<Vision />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
