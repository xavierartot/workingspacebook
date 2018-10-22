/*
 * Join.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 */
import React, { Component } from 'react'
import { Message, Form, Input, Button, Segment, Label, Image, Icon } from 'semantic-ui-react'

class Join extends Component {
  render() {
    return (
      <Form
        error={false}
        loading={false}
        onSubmit={this.join}
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
          icon="at"
          iconPosition="left"
          placeholder="E-mail address"
          required
          type="email"
        />
        <Form.Field
          control={Input}
          error={false}
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          required
          type="password"
        />
        <Button
          active={false}
          color="teal"
          fluid
          loading={false}
          size="large"
        >Join
        </Button>
        <div className="ui error message" />

      </Form>
    )
  }
}
export default Join
