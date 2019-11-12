import { useState, useEffect } from 'react';

export const useLocation = () => {
  const [lat, setLat] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    )
  }, []) //empty array as second argument to invoke useEffect just one time - componentDidMoun

  
  return [lat, errorMessage]
}

