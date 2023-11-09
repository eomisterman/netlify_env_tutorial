import './App.css'



function App() {
  return (
    <>
      <h1>VITE_ANOTHER_VAR:</h1>
      <div>
        {import.meta.env.VITE_ANOTHER_VAR}
      </div>
    </>
  )
}

export default App
