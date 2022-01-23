import Tweets from '../Components/Tweets/Tweets';
import {NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'


function Users() {
    const [usersData, setUsersData] = useState([])
    
    
    useEffect(() => {
        
        fetch(`https://reqres.in/api/users?page=${1}`)
        .then((res) => res.json())
        .then((data) => {
            setUsersData(data.data);
        });
        
    }, []);
    
    return (
        <>
        <div className='tweet'>
            <Tweets/>
            <h2>Users</h2>
            {
                usersData.map((item) => {
                    return(
                        <ul className='tweet'>
                            <li className='tweet-item' key={item.id}>
                            <NavLink to={`/profile/${item.id}`}>     
                                <img className='tweet-avatar' src={item.avatar} alt='avatar'/>
                                <h3 className='tweet-heading'>{item.first_name}</h3>
                                <h3 className='tweet-heading'>{item.last_name}</h3>
                                <p className='tweet-email'>{item.email}</p>
                                </NavLink>
                            </li>
                        </ul>
                    )
                })
            }    
        </div>
        </>
    )   
}
export default Users