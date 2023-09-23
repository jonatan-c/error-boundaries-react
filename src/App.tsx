import { useEffect, useState } from 'react'
import './App.css'
import { ErrorBoundary } from './utilities/ErrorBoundaries'
import ComponentTestAsync from './components/ComponentTestAsync'
import ComponentTest from './components/ComponentTest'

function App() {

  const [name, setName] = useState<string | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setName('John')
    }, 2000)
  }, [])

  return (
    <>
     <div className='App'>
      <ErrorBoundary 
          fallBackComponent={<div>Something went wrong</div>}
          resetCondition={name}
        >
        <ComponentTestAsync />
        <ComponentTest name={"Jonatan"} />
      </ErrorBoundary>
     </div>
    </>
  )
}

export default App
