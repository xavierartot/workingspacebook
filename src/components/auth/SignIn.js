/*
 * SignIn
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 */
import React, { Component } from 'react'
import { Message, Form, Input, Button, Segment, Label, Image, Icon } from 'semantic-ui-react'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    errorForm: false,
    errorField: false,
    name: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <Form
        className="formWidth"
        error={false}
        loading={false}
        onSubmit={this.handleSubmit}
        size="large"
        success={false}
        widths="equal"
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
          <Button
            active={false}
            circular
            color="teal"
            content="forget"
            icon="sitemap"
            labelPosition="left"
            loading={false}
            size="large"
          />
        </Segment>
        <div className="ui error message" />

      </Form>
    )
  }
}
export default SignIn

