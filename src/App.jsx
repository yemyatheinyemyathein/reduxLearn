import './App.css'
import CakeView from './features/cake/CakeView'
import ICeCreamVierw from './features/icecream/IceCreamView'
import { UserVierw } from './features/user/UserVierw'

function App() {
  return (
    <>
      <CakeView/> 
      <ICeCreamVierw/>
      <UserVierw/>
    </>
  )
}

export default App
