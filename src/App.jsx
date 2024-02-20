import React, { Component } from 'react';
import './style.css'

import logo from './images/logo2.png'
import Yalla from './images/Yalla-Shahn-info2.png'
import Email from './icons/email.png'
import Facebook from './icons/facebook.png'
import Insta from './icons/instagram.png'
import Whats from './icons/whatsapp-logo.png'
import Phone from './icons/phone-call.png'

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
            <h1>Advantages</h1>
            <div class="prof-cont">
                    <div class="card">
                        <h3>1) high speed Delivery</h3>
                    </div>
                    <div class="card">
                        <h3>2) Competitive price</h3>
                    </div>
                    <div class="card">
                        <h3>3) Receiving Shipments</h3>
                    </div>
            </div>
             </div>
                </div>
                <div class="about" id="what">
                <div class="container">
                 <div class="about-cont">
                <div class="info-t">
                    <h1>What's Yalla</h1>
                    <p>Yalla is delivery, Experience in the field of delivery in Cario and Giza</p>
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
                        <div className="phone">
                            <img src={Phone} alt="" />
                            <a href="tel:+201061578528"><p>01061578528</p></a>
                        </div>
                    <div class="email">
                        <img src={Email} alt="" />
                        <a href="mailto:Yallashahn@gmail.com?supject=Contant"><p>Yallashahn@gamil.com</p></a>
                    </div>
                     </div>
                     <div class="cont-icons">
                    <a href="https://www.facebook.com/profile.php?id=61556526837375">
                          <img src={Facebook} />
                    </a>
                    <a href="https://www.instagram.com/yalla_shahn?igsh=ZGRlOWF0YjVva3o5">
                        <img src={Insta} alt="" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=1061578528">
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