import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.linkedin.com/in/bibashshresthaa/" target="_blank">
          <img style= {{borderRadius:'50%', scale:1.2}}src={"https://media.licdn.com/dms/image/v2/D4D03AQEPguYvdkzauQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724430572736?e=1744243200&v=beta&t=ce2A4vdlyTW-X_GO9M2DrG-S0_cRdOGXfYBMNwMUx8I"} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Bibash Shrestha</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the image to view my details 
      </p>
    </>
  )
}

export default App
