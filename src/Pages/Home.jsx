
import '../App.css'
import LetfArrow from '../assets/images/left-arrow.png'
import HeaderProfile from '../assets/images/60879629.jpg'
import Pin from '../assets/images/pin.png'


function Home() {
 
    return (
        <>
            <section className='home'>
              <header className='homeHeader'>
                <button className='homeBtn'><img className='img' src={LetfArrow} style={{width: "20px"}}/></button>
                <div className='homeTop'>
                  <h2 className='homeTop__heading'>LilRose</h2>
                  <p className='homeTop__text'>1,070 Tweets</p>
                </div>
              </header>
              <main className='hero'>
                <div className='hero__profile'>
                  <img className='hero__img' src={HeaderProfile}/>
                  <button className='hero__editBtn'>Edit profile</button>
                </div>
                <div className='hero__info'>
                  <h2 className='hero__heading'>LilRose</h2>
                  <p className='hero__email'>@LilRose__27</p>
                  <p className='hero__job'>Manual Tester at Abutech company</p>

                  <ul className='list'>
                    <li className='list__item list__item--location'>Current Location</li>
                    <li className='list__item list__item--link'>https://t.me/LilRose_27</li>
                    <li className='list__item list__item--born'>Born Februrary 11, 2000</li>
                    <li className='list__item list__item--joined'>Joined May 2020</li>
                  </ul>

                  <div className='follow'>
                     <h3 className='follow__num'>78</h3><p className='follow__text'>Following</p>
                     <h3 className='follow__num'>98</h3><p className='follow__text'>Followers</p>
                  </div>
                </div>
                
                  <ul className='home__nav'>
                    <li className='home__link--active'><a href='#'>Tweets</a></li>
                    <li className='home__link'><a href='#'>Tweets & replies</a></li>
                    <li className='home__link'><a href='#'>Media</a></li>
                    <li className='home__link'><a href='#'>Likes</a></li>
                  </ul>
              </main>
            </section>
        </>
    )
}

export default Home