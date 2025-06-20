import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Basic from "./Basic"

const AnotherElement = (
  <a href = 'https://google.com' target = '_blank'>visit Google</a>
)

const username = 'and js'
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target : '_blank'},
  'click me to visit google',
  username

)

createRoot(document.getElementById('root')).render(
 <>
    {reactElement}
    <App/>
    </>
  
)
