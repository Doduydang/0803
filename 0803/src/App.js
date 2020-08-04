import React, { Component } from 'react';
import 'antd/dist/antd.css';

import {ConnectedRouter} from 'connected-react-router';
import RoutesComponent from './view/shared/routes/RoutesComponent'
import {LocaleProvider} from 'antd';
import {Provider} from 'react-redux';
import {getAntdLanguage} from 'i18n';

 class App extends Component {
  render(){
  return (
    <LocaleProvider locale={getAntdLanguage}>
    <Provider>
    <ConnectedRouter>
      <RoutesComponent/>
      </ConnectedRouter>
    </Provider>
  </LocaleProvider>
  );
}
 }
export default App;
