import React, {useEffect} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Navigation from '@navigation';
import {store, persistor} from '@store';
import SplashScreen from 'react-native-splash-screen';
import {Text} from 'react-native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
        {/* <Text>Hello</Text> */}
      </PersistGate>
    </Provider>
  );
};

export default App;
