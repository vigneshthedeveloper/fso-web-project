import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <>
        <div className='logo-bar'>
            <h1 className='logo'>FSO</h1>
            <p className='fso-logo'>Fate Supreme Organization</p>
        </div>
        <div className='menu-bar'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <hr className='line1'/>
        <div className="title-bar">
          <h1 className="title">Fate Supreme Organization</h1>
          <p className="title-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus aperiam consectetur quam officiis, ipsam quaerat eveniet ex, optio repellat cum praesentium debitis odio voluptas soluta eos doloremque veritatis fugiat.</p>
        </div>
    </>
  )
}

export default Home;