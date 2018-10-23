/*
 * Login.js
 *
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Message, Form, Input, Button, Segment, Label, Image, Icon } from 'semantic-ui-react'

class Login extends Component {
  state = {
    email: '',
    password: '',
    email: '',
    lastName: '',
    firstName: '',
    errorForm: false,
    errorField: false,
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
    console.log(this.state)
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }
  render() {
    const { handleChange } = this.props
    return (
      <Form
        className="formWidth"
        error={false}
        loading={false}
        onSubmit={this.handleSubmit}
        size="big"
        success={false}
      >
        <Message
          content="You're all signed up for the newsletter"
          header="Form Completed"
          success
        />
        <Message
          content="You can only sign up for an account once with a given e-mail address."
          error
          header="Action Forbidden"
        />

        <Form.Field
          control={Input}
          error={false}
          icon="user"
          iconPosition="left"
          id="firstName"
          onChange={this.handleChange}
          placeholder="First Name"
          required
          type="text"
          value={this.state.firstName}
        />
        <Form.Field
          control={Input}
          error={false}
          icon="user"
          iconPosition="left"
          id="lastName"
          onChange={this.handleChange}
          placeholder="Last Name"
          required
          type="text"
          value={this.state.lastName}
        />
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
          value={this.state.email}
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
          value={this.state.password}
        />
        <Button
          active={false}
          circular
          color="teal"
          fluid
          loading={false}
          size="large"
        >Sign Up
        </Button>
        <div className="ui error message" />

      </Form>
    )
  }
}
export default Login
