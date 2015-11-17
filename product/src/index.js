import React from 'react'
import ReactDOM from 'react-dom'
import { TestToolkit } from 'toolkit'

window.React = React
window.ReactDOM = ReactDOM

class TestProduct extends React.Component {
  render() {
    const eq = window.React == window.React2

    return (
      <div>
        <h1>TestProduct</h1>
        <TestToolkit />
        <p>eq={eq.toString()}</p>
      </div>
    )
  }
}

export default function render(container) {
  ReactDOM.render(<TestProduct />, container)
}
