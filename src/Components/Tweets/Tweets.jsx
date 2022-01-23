
import {useNavigate, useParams} from "react-router-dom"
import { useState, useEffect } from "react"


function Tweets (){
    
    const history = useNavigate()
    const {username} = useParams()
    const [singleUser, setSingleUser] = useState([])
    
    useEffect(() => {
        fetch(`https://reqres.in/api/users/${username}`)
          .then((res) => res.json())
          .then((data) => setSingleUser(data.data));
      }, []);
    
    return (
        <>
        <ul className="tweet">
            <li key={singleUser?.id}>
               <img src={singleUser?.avatar} alt={singleUser?.first_name} />
               <h3>{singleUser?.first_name}</h3>
               <h3>{singleUser?.last_name}</h3>
               <p>{singleUser?.email}</p>
            </li> 
        </ul>
        
        <button className="tweet-btn" onClick={e => history('/')}>Go Home</button>
        </>
        )
    }
    
    export default Tweets