import {NativeBaseProvider, ToastProvider} from 'native-base';
import React from 'react';
import Home from './src/screens/Home';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <ToastProvider>
        <Home />
      </ToastProvider>
    </NativeBaseProvider>
  );
};

export default App;
