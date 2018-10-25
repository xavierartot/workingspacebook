/*
 * ModuleFilter.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class ModuleFilter extends Component {
  render() {
    return (
      <div className="ModuleFilter">
        <Button.Group positive size="medium">
          <Button compact>
            Trending
          </Button>
          <Button.Or />
          <Button compact>
            Most popular
          </Button>
          <Button.Or />
          <Button compact>
            $$$
          </Button>
          <Button.Or />
          <Button compact>
            prime
          </Button>
        </Button.Group>
      </div>
    )
  }
}
export default ModuleFilter
