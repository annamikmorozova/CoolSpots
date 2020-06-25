import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {auth} from '../store/reducer';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props;

  return (
    <Container className="App">
      <Form className="form" onSubmit={handleSubmit} name={name}>
        <h2>{displayName}</h2>
        {name === 'signup' ? (
          <div>
            <Col>
              <FormGroup>
                <Label className="label-text-style" for="exampleFName">
                  First Name
                </Label>
                <Input
                  name="fname"
                  type="text"
                  placeholder="Enter First Name"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="label-text-style" for="exampleLName">
                  Last Name
                </Label>
                <Input name="lname" type="text" placeholder="Enter Last Name" />
              </FormGroup>
            </Col>
          </div>
        ) : null}
        <Col>
          <FormGroup>
            <Label className="label-text-style" for="exampleEmail">
              Email
            </Label>
            <Input name="email" type="text" placeholder="Enter Email" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label className="label-text-style" for="examplePassword">
              Password
            </Label>
            <Input name="password" type="password" placeholder="********" />
          </FormGroup>
        </Col>
        <Button className="button-submit" variant="primary" type="submit">
          {displayName}
        </Button>
        {error && error.response && <div> {error.response.data} </div>}
        <Button className="button-submit" href="/auth/google">
          {displayName} with Google
        </Button>
      </Form>
    </Container>
  );
};

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  };
};

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const firstName = formName === 'signup' ? evt.target.fname.value : null;
      const lastName = formName === 'signup' ? evt.target.lname.value : null;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(firstName, lastName, email, password, formName));
    }
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
