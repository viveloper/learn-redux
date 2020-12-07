import React from 'react';
import InputForm from './components/InputForm';
import Todos from './components/Todos';
import User from './components/User';

function App({ store }) {
  return (
    <>
      <User store={store} />
      <InputForm store={store} />
      <Todos store={store} />
    </>
  );
}

export default App;
