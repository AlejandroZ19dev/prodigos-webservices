import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginScreen from "./containers/onboarding/Login";
import 'antd/dist/antd.css';
import RegistrationScreen from "./containers/onboarding/Registration/Registration";
import RecoverPasswordScreen from "./containers/onboarding/RecoverPassword/RecoverPassword";
import ServiceSelectorScreen from "./containers/mainHome/ServiceSelector/ServiceSelectorScreen";
import AccompanimentScreen from "./containers/mainHome/createService/Accompaniment/AccompanimentScreen";
import { Route,Switch, Redirect } from "react-router-dom";
import {Logo} from "./common/components/Logo/Logo";
import {Row} from  "antd";

function App() {
  return (
    <div className="App">
      <header className={'App-header'} >
          <Row className={'header-right'}>
           <Logo size={1.5}/>
          </Row>
      </header>
        <Row justify="center" align="middle" className={'App-body'}>
            <Switch>
                <Route  path="/app" component={App}/>
                <Route  exact path="/login" component={LoginScreen}/>
                <Route  path="/registro" component={RegistrationScreen}/>
                <Route  path="/servicios" component={ServiceSelectorScreen}/>
                <Route  path="/formulario-cuidado-acompanamineto" component={AccompanimentScreen}/>
                <Route  path="/recuperar-contrasena" component={RecoverPasswordScreen}/>
                <Route component={() => <Redirect to={'/'}/>} />
            </Switch>
        </Row>
        <footer className={'App-footer'}>
            <p>Todos los derechos reservados por Pródigos  2020 </p>
        </footer>
    </div>
  );
}

export default App;
