import './styles/global.css';

import { Habit } from './components/Habit';

function App() {
  return (
    <div className="container p-10">
      <div className="flex justify-between">
        <Habit completed={1}/>
        <Habit completed={2}/>
        <Habit completed={3}/>
      </div>
    </div>
  )
}

export default App
