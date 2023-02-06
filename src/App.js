import { Navbar } from './components/Navbar';
import { CountryDetails } from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import { CountriesList } from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList />

          {/* React-Router Route rendering the CountryDetails should go here */}
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
