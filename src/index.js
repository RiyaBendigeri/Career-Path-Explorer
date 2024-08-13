import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from "./About.js"
import Home from "./Home.js"
import Login from "./Login.js"
import Signup from "./Signup.js"
import Program from "./Program.js"
import Testimonial from "./Testimonial.js"
import Contact from "./Contact.js"
import Insta from "./instaround.png"
import Logo from "./logo3.jpg"
import Twi from "./twi.png"
import Face from "./face1.png"
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route,Link } from 'react-router-dom';
export default function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function Main()
{
  return(
<div>
  <div className='navbar'>
   
  
  <Link to="/" className='logo'><img src={Logo} height="60" width="60" ></img></Link>
    <Link to="/" className='home'>Home</Link>
    <Link to="/about-me"className='about'>About</Link>
    <Link to="/contact-me" className='about'>Contact</Link>
    
    <Link to="/signup-me"className='about'> Login</Link>
    <Link to="/program-me" className='about'>Program</Link>
    <Link to="/" className='logo2'><img src={Insta} height="60" width="60"></img></Link>
    <Link to="/" className='logo1'><img src={Twi} height="60" width="60"></img></Link>
    <Link to="/" className='logo1'><img src={Face} height="60" width="70"></img></Link>
    </div>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/about-me" element={<About></About>}></Route>
    <Route path="/contact-me" element={<Contact></Contact>}></Route>
    
    <Route path="/signup-me" element={<Signup></Signup>}></Route>
    <Route path="/program-me" element={<Program></Program>}></Route>
    
    <Route path="/Insta-me" element={<Insta></Insta>}></Route>


    </Routes>
    
      

    
    
  </div>
  



  )
}


ReactDOM.render(
  <div>
   
    <BrowserRouter>
    
    <Main>

    
    </Main>
    
    
    
    </BrowserRouter>

  </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
