import React from 'react'
import ReactDom from 'react-dom'
import DocumentationTemplate from './src/containers/DocumentationTemplate'

ReactDom.render(React.createElement(DocumentationTemplate, {}), document.querySelector("#app"))
