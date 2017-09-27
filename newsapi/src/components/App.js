import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainScreen from './Main'
import MangaList from './MangaList'

export default App = StackNavigator({
  Main: { screen: MainScreen },
  Manga: { screen: MangaList }
});

