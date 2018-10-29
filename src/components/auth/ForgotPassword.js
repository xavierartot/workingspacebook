/*
 * SignIn
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 */
import React, { Component } from 'react'
import { Message, Form, Input, Button, } from 'semantic-ui-react'

class SignIn extends Component {
  state = {
    email: '',
    errorEmail: false,
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  submitButton = (event) => {
    console.log(this.state)
    this.setState(() => ({
      errorEmail: !this.state.errorEmail,
    }))
    // then false... if the email exist in DB
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
          content="dddddd"
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
          placeholder="Email"
          type="email"
        />
        <Button
          active={false}
          circular
          color="teal"
          fluid
          loading={this.state.errorEmail}
          onClick={this.submitButton}
          size="large"
        >Submit
        </Button>
        <div className="ui error message" />
      </Form>
    )
  }
}
export default SignIn
