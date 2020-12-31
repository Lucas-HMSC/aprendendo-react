import React from 'react';
import Checkbox from './Form/Checkbox';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [frutas, setFrutas] = React.useState('');
  const [linguagens, setLinguagens] = React.useState(['JavaScript']);

  return (
    <form>
      <h2>Checkbox</h2>
      <Checkbox
        options={['JavaScript', 'Python', 'Java']}
        value={linguagens}
        setValue={setLinguagens}
      />
      <h2>Cores</h2>
      <Radio options={['Azul', 'Verde']} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio
        options={['Limão', 'Laranja', 'Uva']}
        value={frutas}
        setValue={setFrutas}
      />
      <Select
        options={['Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
    </form>
  );
};

export default App;
