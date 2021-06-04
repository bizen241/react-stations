// DO NOT DELETE

import React, { useCallback, useEffect, useState } from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('')
  const [isLoading, setLoading] = useState(true)

  const updateUrl = useCallback(async () => {
    try {
      setLoading(true)

      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const json = await response.json()
      const { message } = json

      const url = new URL(message)
      setDogUrl(url.toString())
    } catch (e) {
      console.error(e)
    } finally {
      setTimeout(() => setLoading(false), 3000)
    }
  }, [])

  useEffect(() => {
    updateUrl()
  }, [updateUrl])

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
            {dogUrl && (
              <img className="image__content" src={dogUrl} alt="dog"></img>
            )}
          </div>
          <button className="button" onClick={updateUrl} disabled={isLoading}>
            Random
          </button>
        </div>
      </div>
    </div>
  )
}
