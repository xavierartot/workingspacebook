/*
 * SignIn
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signIn } from '../../store/actions/auth'
import { Message, Form, Input, Button, Segment } from 'semantic-ui-react'
import ModalForgetEmail from '../modals/ModalForgetEmail'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    errorForm: false,
    errorField: false,
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.signIn({ email: this.state.email, password: this.state.password })
  }
  render() {
    const { authError } = this.props
    // if (!authError) {
    // <Redirect to="/admin/" />
    // }
    console.log(authError)
    return (
      <Form
        className="formWidth"
        error
        loading={false}
        onSubmit={this.handleSubmit}
        size="large"
        success={false}
        widths="equal"
      >
        { !authError ||
          <Message
            content="You can only sign up for an account once with a given e-mail address."
            error
            header="Action Forbidden"
          />
        }
        <Form.Field
          control={Input}
          error={false}
          icon="at"
          iconPosition="left"
          id="email"
          onChange={this.handleChange}
          placeholder="E-mail address"
          required
          type="email"
        />
        <Form.Field
          control={Input}
          error={false}
          icon="lock"
          iconPosition="left"
          id="password"
          onChange={this.handleChange}
          placeholder="Password"
          required
          type="password"
        />
        <Segment basic className="d-flex center doubleButtons">
          <Button
            active={false}
            circular
            color="teal"
            content="Join"
            icon="sign language"
            labelPosition="left"
            loading={false}
            size="large"
          />
          <ModalForgetEmail>
            Forget Your Password
          </ModalForgetEmail>
        </Segment>
      </Form>
    )
  }
}
function mapStateToProps(state, props) {
  return {
    authError: state.auth.authError,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    signIn: creds => dispatch(signIn(creds)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

