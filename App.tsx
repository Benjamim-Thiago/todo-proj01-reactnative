import { StatusBar } from 'react-native';
import { Home } from './src/screen/Home';
import { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
          />
      <Home />
    </Fragment>
  );
}