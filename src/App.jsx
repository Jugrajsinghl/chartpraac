import { useState } from 'react'
import Line from './compo/line'
import './App.css'
import BarChartdd from './compo/barchart'
import LineChartdd from './compo/LinesChart'
import Forms from './compo/Forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main'>
    <div className='div-1'>
      {/* hello */}
      <Line/>
    </div>
    <div className='div-1'>
      {/* hello */}
      <BarChartdd/>
    </div>
     <div className='div-1'>
      {/* hello */}
      <LineChartdd/>
    </div>
       
    </div>
    <div>
      <Forms/>
    </div>
    </>
  )
}

export default App
