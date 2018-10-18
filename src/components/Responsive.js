/*
 * test-semanticui.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import '../css/helper.css'

class Responsive extends Component {
  render() {
    return (
      <div className="">
        <div className="ui inverted teal vertical segment">
          <div className="ui grid page">
            <div className="stackable three column row centered">
              <div className="column">
                <div className="ui segment tac">orizontal section, column 1</div>
              </div>
              <div className="column">
                <div className="ui segment tac">orizontal section, column 2</div>
              </div>
              <div className="column">
                <div className="ui segment tac">orizontal section, column 3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui five column grid">
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
        </div>
        <div className="ui grid page">
          <div className="two column row">
            <div className="column">
              <div className="ui segment">
                <div className="ui vertical segment">
                  <p>Left column, row 1</p>
                </div>
                <div className="ui vertical segment">
                  <p>Left column, row 2</p>
                </div>
                <div className="ui vertical segment">
                  <p>Left column, row 3</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="row"> Right column, row 1</div>
              <div className="row"> Right column, row 2</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Responsive
