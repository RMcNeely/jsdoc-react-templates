import React from 'react'
import ProjectLogo from '../ProjectLogo/ProjectLogo'
import ProjectMenus from '../ProjectMenus/ProjectMenus'
import './nav-bar.css'

export default class NavBar extends React.Component {
  render () {
    let props = this.props
    return (
<>
  <nav>
    <ProjectLogo url={props.logoResource} />
    <h1>{props.projectTitle}</h1>
    <ProjectMenus />
  </nav>
</>
    )
  }
}
