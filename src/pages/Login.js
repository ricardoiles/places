import React from 'react';
import Title from '../components/Title';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends React.Component {
  render (){
    return(
      <div className="row middle-xs">
          <div className="col-xs-12 col-sm-6">
            <div>
              <Title />
              <TextField
                floatingLabelText="Correo Electronico"
                type="email"
                className="textField"
              />
              <TextField
                floatingLabelText="Contraseña"
                type="password"
                className="textField"
              />
              <div className="Login-actions">
                <RaisedButton label="Ingresar" primary={true}/>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="Login-Background" style={{'backgroundImage': "url("+ process.env.PUBLIC_URL + '/images/login.jpg' +")"}}></div>
          </div>
      </div>
    )
  }
}