import React, { Component } from 'react';
import authService from '../../utils/authService';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import toastr from 'toastr';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loggedIn: authService.isAuthenticated(),
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    let key = e.target.name;
    this.setState({
      [key]: e.target.value
    });
  }

  render = () => {

    const { target } = this.props.location.state || { target: { pathname: '/admin' } };

    if (this.state.loggedIn) {
      return <Redirect to={target} />;
    }

    return (
      <div className="login-box">
        <h1>عضویت</h1>

        <Form horizontal={true}>
          <FormGroup>

            <ControlLabel>آدرس ایمیل</ControlLabel>
            <FormControl
              type="string"
              placeholder="Email"
              size={{ length: 40 }}
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />

            <ControlLabel>رمز</ControlLabel>
            <FormControl
              type="password"
              placeholder="Password"
              length={'40px'}
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />

            <Button className='btn btn-success mt' block onClick={this.login}>ورود</Button>
          </FormGroup>
        </Form>
      </div>
    );
  };

  login = () => {
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    authService.signIn(data, () => {
      this.setState({
        loggedIn: authService.isAuthenticated(),
      }, () => {
        if(!this.state.loggedIn) toastr.error('در ورود به حساب کاربری مشکل وجود دارد. لطفا ایمیل یا پسورد خود را چک نمایید.');
        else toastr.success('ورود شما موفقیت آمیز بود');
      })
    })
  };
}

export default Login;