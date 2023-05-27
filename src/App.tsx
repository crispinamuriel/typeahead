import Typeahead from "./Typeahead";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// https://6272cd826b04786a09fd47ed.mockapi.io/api/v1/cities?name=
export const App = () => {
  return (
    <>
      <h1>Crispina's Typeahead Component</h1>
      <div className="App">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Made with: Vite + React</h2>
      <Typeahead />
      <div className="card">
        <p>
          Enter a query in the input above. For example you can enter  <code>new</code> To see the typeahead component in action.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more about these technologies.
      </p>
    </>
  )
}

export default App
