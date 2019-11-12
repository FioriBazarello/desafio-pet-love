import React, { useState } from 'react';

import './App.css';
import InputMask from 'react-input-mask';

import Card from './components/card';
import Input from './components/input';
import Button from './components/button';

const App = () => {
  const [cep, setCep] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const handleValueChange = (event) => {
    let newValue = event.target.value.replace('-', '');

    setCep(newValue);
  }

  const handleSearchClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:3001/cep/${cep}`);
      const json = await response.json();

      setData(json);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="app">
      <section>
        <Card id='search-card'>
          <InputMask mask="99999-999" maskChar={null} placeholder='00000-000' value={cep} onChange={handleValueChange}>
            {(inputProps) => <Input id='search-input' {...inputProps} error={data.error && data.message} />}
          </InputMask>
          <Button id='search-submit-button' isLoading={isLoading} onClick={handleSearchClick}>Buscar CEP</Button>
        </Card>
      </section>
      <section>
        {
          !data.error && data.cep &&
          <Card id='result-card'>
            <p><b>CEP: </b>{data.cep}</p>
            <p><b>Estado: </b>{data.uf}</p>
            <p><b>Cidade: </b>{data.localidade}</p>
            <p><b>Logradouro: </b>{data.logradouro}</p>
          </Card>
        }
      </section>
    </div>
  );
}

export default App;
