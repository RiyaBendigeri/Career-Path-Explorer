import * as React from 'react';
import * as ReactDOM from 'react-dom';

import  { useState } from 'react';
import './index.css';
import GMAIL from './GMAIL.png';
import Callingpng from './Callingpng.png';
import insta from './insta.jpeg';
import twitter from './twitter.jpeg'

export default function Contact() {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
    const handleSendMessage = () => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    };
    return(
        
        <div className="BACKGROUNDIMAGE">
            
            <div className="BIGCONTAINERTOHOLDBOXANDICON">
              <div className="Basicinfo">
                <div className="Sendmsgbox">
                  <div className="OurInfo">
                    <div className='gmail'>
                    <img src={GMAIL} className="Gmailimage" alt="Gmail" /> 
                    <p className="mailid"><a href="#">careerpathexplorer@gmail.com</a></p>

                    </div>
                    <div className='gmail'>
                    <img src={Callingpng} className="callimage" alt="Calling" />
                    <p className="PhoneNumber"><a href="#">872367123584137</a></p>

                    </div>
                    <div className='gmail'>
                    <img src={insta} className="Instaid" alt="Instagram" />
                    <p className="Instagram"><a href="#">careerNavigator_2024</a></p>

                    </div>
                    <div className='gmail'>
                    <img src={twitter} className="TweetImage" alt="Tweeter" />
                    <p className="Tweeter"><a href="#">careerNavigator_2024</a></p>

                    </div>
                    
                    
                    
                    
                  </div>
                  <div className="Takeinfo">
                    <label className="NAME" htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder='Enter Your Name'/>
                    <br />
                    <br />
                    <label className="EMAIL" htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder='Enter Your Email-ID'/>
                    <br />
                    <br />
                    <label className="SEND" htmlFor="sendmsg">Write your message here :</label>
                    <input type="text" id="sendmsg" name="sendmsg" placeholder='Enter Your Message' />
                    <button id="Sendbtn" onClick={handleSendMessage}>Send Message</button>
                    {showSuccessMessage && <div className="success-message">Message sent successfully</div>}
                  </div>
                </div>
              </div>
              <marquee id="Con">CONTACT US HERE</marquee>
            </div>
        
                       
                  
                  
                
              
              <marquee id="Con">CONTACT US HERE</marquee>
            </div>
          
       
      );
}





