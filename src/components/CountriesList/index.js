import { Link } from 'react-router-dom';
import countriesDATA from '../../countries.json';
import { useState } from 'react';

export function CountriesList(props) {
  const [country, setCountrie] = useState(countriesDATA);

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {' '}
        {country.map((c) => {
          return (
            <Link
              to={`/${c.alpha3Code}`}
              className="list-group-item list-group-item-action"
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${c.alpha2Code.toLowerCase()}.png`}
                alt="Flag"
              />

              <strong>{c.name.common}</strong>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
