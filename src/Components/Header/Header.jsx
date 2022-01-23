import '../../App.css'
import { NavLink } from "react-router-dom";
import useToken from "../../Hook/UseToken";
import Logo from '../../assets/images/twitter.png'
import HeaderProfile from '../../assets/images/60879629.jpg'
import ProfileBtn from '../../assets/images/profile-btn.png'

function Header (){

    const [token] = useToken()

    return(
        <>
            <header className="header">
               
                <nav>
                    <ul className="nav">
                        <a className="logo" href="#">
                          <img src={Logo} alt="Logo" style={{width: "50px", height: "50px", display: "block"}} />
                        </a>
                        {!token && <li>
                            <NavLink to='/login'>Login</NavLink>
                        </li>}
                        <li className="nav__item nav__item--home">
                        <NavLink  className="link" to='/' >Home</NavLink>
                        </li>
                        <li className="nav__item nav__item--explore">
                            <NavLink className={"link"} to='/explore' >Explore</NavLink>
                        </li>
                        <li className="nav__item nav__item--notifications">
                            <NavLink className={"link"} to='/notification'>Notifications</NavLink>
                        </li>
                        <li className="nav__item nav__item--messages">
                            <NavLink className={"link"} to='/messages' >Messages</NavLink>
                        </li>
                        <li className="nav__item nav__item--bookmarks">
                            <NavLink className={"link"} to='/bookmarks' >Bookmarks</NavLink>
                        </li>
                        <li className="nav__item nav__item--lists">
                            <NavLink className={"link"} to='/users' >Lists</NavLink>
                        </li>
                        <li className="nav__item nav__item--profile">
                            <NavLink className={"link"} to='/' >Profile </NavLink>
                        </li>
                        <li className="nav__item nav__item--more">
                            <NavLink className={"link"} to='/more' >More</NavLink>
                        </li>
                    </ul>
                    <button className="nav__button">Tweets</button>
                </nav>
                <div className="header__profile profileHeader">
                    <img src={HeaderProfile} style={{width: '50px', height: '50px', borderRadius: "50%", border:"1px solid #C4C4C4"}}/>
                    <div className="profileHeader__wrapper">
                       <h3 className="profileHeader__heading">LilRose</h3>
                       <p className="profileHeader__link"><a href="https://t.me/LilRose_27">@LilRose__27</a></p>
                    </div>
                    <button className="profileHeader__btn"><img src={ProfileBtn}/></button>
                </div>
            </header>
        </>
    )
}

export default Header