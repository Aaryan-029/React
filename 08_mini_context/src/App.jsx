
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/userContext'
import UserContextProvider from './context/userContextProvider'

function App() {
  

  return (
    <UserContextProvider>
    <h1>Context</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
