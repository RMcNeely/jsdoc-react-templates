import React from 'react'
import NavBar from '../NavBar/NavBar'

export default class DocumentationTemplate extends React.Component {
  render () {
    return (
      <div>
        <NavBar logoResource={''} projectTitle={'Demo Project'} />
        <div>Hello documentation!</div>
        <div>"Wow, they really are strict about that backslash"</div>
      </div>
    )
  }
}
