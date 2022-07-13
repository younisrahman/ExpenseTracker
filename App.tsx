import React, {useEffect} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from '@store';
import {Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <Text>App redux</Text>
    //   </PersistGate>
    // </Provider>
    <Text>App redux</Text>
  );
};

export default App;
