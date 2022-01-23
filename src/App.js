
import "./App.css"
import useToken from './Hook/UseToken'; 
import UnAuthorized from './Pages/UnAuthorized'
import AuthorizedApp from './Pages/Authorized';



function App() {

  const [token] = useToken ()

  if (token) {
    return <AuthorizedApp/>
  }else {
     return <UnAuthorized/>
  }
      
  
}
export default App;
