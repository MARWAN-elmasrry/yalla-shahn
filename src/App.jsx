import React, { Component } from 'react';
import './style.css'

import logo from './images/logo2.png'
import Yalla from './images/Yalla-Shahn-info2.png'
import Phone from './icons/phone-call.png'
import Email from './icons/email.png'
import Facebook from './icons/facebook.png'
import Insta from './icons/instagram.png'
import Whats from './icons/whatsapp-logo.png'

import InstallButton from './InstallButton'

class App extends Component {
    state = {  } 
    render() { 
        return ( <div className="body">
                <header>
                <div class="container">
                <img src={logo} alt="" /> 
                <div class="links">
                    <a href="#what">What Is Me</a>
                    <a href="#contact">Contact Us</a>
                </div>
                </div>
                </header>
                <section class="logo-g"></section>
                <div class="profits">
        <div class="container">
            <div class="prof-cont">
                    <div class="card">
                    <img src={logo} alt="" /> 
                        <h3>Profit 1</h3>
                    </div>
                    <div class="card">
                    <img src={logo} alt="" /> 
                        <h3>Profit 2</h3>
                    </div>
                    <div class="card">
                    <img src={logo} alt="" /> 
                        <h3>Profit 3</h3>
                    </div>
            </div>
             </div>
                </div>
                <div class="about" id="what">
                <div class="container">
                 <div class="about-cont">
                <div class="info-t">
                    <h1>What's Yalla</h1>
                    <p>Yalla is delivery, start up Company how deliver in Cario and Giza</p>
                </div>
                <img src={Yalla} alt="" className='yalla-info'/>
                 </div>
                 </div>
                </div>
                <div class="btn">
                    <div class="container">
                    <h1>Install our web as App</h1>
                     <div class="btn-cont">
                        <InstallButton />
                  </div>
                  </div>
                </div>

                <div class="contact" id="contact">
                 <div class="container">
                     <div class="cont-cont">
                        <h1>Contact Us</h1>
                     <div class="cont-info">
                       <div class="phone">
                        <img src={Phone} alt="" />
                             <p>01061578528</p>
                          </div>
                    <div class="email">
                        <img src={Email} alt="" />
                        <a href="mailto:YallaShahn@gmail.com?supject=Contant"><p>YallaShahn@gamil.com</p></a>
                    </div>
                     </div>
                     <div class="cont-icons">
                    <a href="https://www.facebook.com/profile.php?id=61556526837375">
                          <img src={Facebook} />
                    </a>
                    <a href="#">
                        <img src={Insta} alt="" />
                    </a>
                    <a href="whatsapp:contact=+201061578528@s.whatsapp.com&message=">
                        <img src={Whats} alt="" />
                    </a>
                </div>
            </div>
        </div>
                </div>

                <footer>
                 <div class="container">
                <div class="foot-cont">
                    <p>&copy;<a href="#">Yalla</a> All Rights Reserved </p>
                  </div>
                 </div>
                 </footer>      
        </div> );
    }
}
 
export default App;