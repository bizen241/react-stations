// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState('./dog1.jpg')

  const updateUrl = React.useCallback(async () => {
    await fetch('https://dog.ceo/api/breeds/image/random')
    setDogUrl('https://avatars.githubusercontent.com/u/298748')
  }, [])

  return (
    <div>
      <header>Header</header>
      <h2>Hello</h2>
      <img src={dogUrl}></img>
      <button onClick={updateUrl}>Button</button>
    </div>
  )
}
