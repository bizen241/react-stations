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
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      if (!response.ok) {
        return
      }

      const json = await response.json()
      const { message } = json

      const url = new URL(message)
      setDogUrl(url.toString())
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <div className="page__outer">
      <header className="page-header__outer-wrapper">
        <div className="page-header__inner-wrapper">
          <div className="page-header__content">Dog App</div>
        </div>
      </header>
      <div className="page-content__outer-wrapper">
        <div className="page-content__inner-wrapper">
          <h2 className="title">Image</h2>
          <div className="image__wrapper">
            <img className="image__content" src={dogUrl} alt="dog"></img>
          </div>
          <button className="button" onClick={updateUrl}>
            Random
          </button>
        </div>
      </div>
    </div>
  )
}
