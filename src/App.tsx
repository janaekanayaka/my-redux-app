import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Counter from './component/Counter';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;