import React from 'react'
import ReactToPrint from 'react-to-print'

import Invoice from './Invoice'

import './App.css'

function App() {
  const ref = React.useRef()

  return (
    <div className="App">
      <div>
        <ReactToPrint
          trigger={() => <button>Imprimer le ticket</button>}
          content={() => ref.current}
        />
        <Invoice ref={ref} />
      </div>
    </div>
  )
}

export default App
