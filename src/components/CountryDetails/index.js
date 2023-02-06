import { useParams } from 'react-router-dom';
import countriesDATA from '../../countries.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function CountryDetails() {
  const [country, setCountrie] = useState(countriesDATA);
  const params = useParams();

  const oneCountry = country.filter((c) => {
    return c.alpha3Code === params.alpha3Code;
  })[0];

  function returnName(element) {
    let filteredName = country.map((e) => {
      if (e.alpha3Code === element) {
        return e.name.common;
      }
    });
    return filteredName;
  }

  return (
    <div className="col-7">
      <h1>{`${oneCountry.name.common}`}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{`${oneCountry.capital}`}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {`${oneCountry.area} km`}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {oneCountry.borders.map((border) => {
                  return (
                    <li>
                      <Link to={`/${border}`}>{returnName(border)}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
