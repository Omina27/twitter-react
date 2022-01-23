import {Routes, Route} from 'react-router-dom'
import Header from  './../Components/Header/Header'
import Home from "./Home"
import Profile from "./Profile"
import Explore from "./Explore"
import Notification from './Notification'
import Messages from './Messages'
import Bookmarks from './Bookmarks'
import Lists from './Lists'
import More from './More'
import Users from './Users'


function AuthorizedApp () {
  return(
    <>
      <Header/>
      <Routes>
        <Route path= '/' element={<Home/>}/>
        <Route path= '/explore' element={<Explore/>}/>
        <Route path= '/notification' element={<Notification/>}/>
        <Route path= '/messages' element={<Messages/>}/>
        <Route path= '/bookmarks' element={<Bookmarks/>}/>
        <Route path= '/lists' element={<Lists/>}/>
        <Route path= '/users' element={<Users/>}/>
        <Route path= '/more' element={<More/>}/>
        <Route path= '/profile/:username' element={<Profile/>}/>
      </Routes>
    </> 

  )
}
export default AuthorizedApp;