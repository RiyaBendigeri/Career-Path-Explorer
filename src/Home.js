import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import FadeInSection from './index.js';



/*function Buttons(props)
{return(
  <button className='but2'>
     
  {props.title}

  </button>
 


)
}
function Images(props)
{
  return(
    <button className={props.className}>
      
    <a href={props.link}></a>

    </button>
)
}*/



function Blocks(props){
  return(
    
    <div className={props.className}>
      
    </div>


  )

}
function Home()
{
    return(
        <div>
           
            <div className='main'>
                
      <Blocks className="img1"></Blocks>
      <Blocks className="img2"></Blocks>
      <Blocks className="img3"></Blocks>
    </div>
    <div className='main2'>
      

      <div className='vision'>
        
                     <center> <pre>CONFUSED ABOUT WHAT<br/>TO PURSUE?</pre></center>

      </div> 
      <div className='main3'>

      </div>
      <div className='mission'>
      <center> <pre>CAN'T FIGURE OUT<br/>YOUR FUTURE<br/> OPPORTUNITIES?</pre></center>
      </div>
      
    </div>
      
    <div className='main4'>
      <div className='main4a'>
      <p><center>With the vast array of career options available today, choosing the right path can be daunting. Our team of <b><i>experienced educators and career counselors</i></b> understands the challenges students face in navigating these choices. That's why we've developed a <b><i>tailored approach to career guidance,</i></b> offering assessments that delve into an individual's strengths, preferences, and aspirations. <br></br><br></br>Our tests are meticulously crafted to evaluate aptitudes across a spectrum of disciplines, including <b><i>Science, Commerce, and Arts.</i></b> Through a combination of scientifically validated methodologies and personalized analysis, we provide students with insights into the <b><i>field that aligns best with their skills and interests.</i></b>

      </center></p>
      </div>
      <div className='main4b'>
      <h1 className='main4ba'><center>Our Approach</center>   </h1>
      </div>
      
    </div>
    <div className='main5'>
      <div className='main5a'>
      <h1><center>Our Vision</center></h1> <br></br>
      <div className='vis'><i>"Empowering the yoth to envision their dreams ,embrace their passions and pioneer their paths towards a future where purpose meets opportunity ,creating a legacy of innovation,resilence and global"
        </i>
      </div>
       
     
      </div>
      <div className='main5b'>
        <p>  At CareerPathExplorer, we believe that every student possesses unique talents and interests, and our mission is to help them discover their true potential. With a commitment to guiding students towards fulfilling career paths, we specialize in conducting comprehensive aptitude tests designed to assist them in making informed decisions about their academic and professional futures.
      
        </p> 
       
       
      </div>
        
    </div>
    <div className='main6'>
      <div className='main6a'>
        <p>
          <ul>
            <li>

           
            Our tests are meticulously crafted to evaluate aptitudes across a spectrum of disciplines, including <b>Science, Commerce, and Arts.</b> Through a combination of scientifically validated methodologies and personalized analysis, we provide students with insights into which field aligns best with their skills and interests.
            </li>
            <li>
At CareerPathExplorer, we go beyond mere test results. We offer <b>comprehensive counseling sessions</b> where students can <b>explore various career options, understand industry trends, and receive guidance on educational pathways.</b> Our aim is to empower students to make informed decisions that lay the foundation for a successful and fulfilling future.
</li>
            <li>
We are dedicated to fostering a <b>supportive and inclusive environment</b> where every student feels valued and understood. Whether you're a high school student embarking on your academic journey or an individual seeking a career change, our services are tailored to meet your unique needs.
</li>
            <li>
Join us at CareerPathExplorer and embark on a <b>journey of self-discovery and career exploration.</b> Together, let's unlock your potential and pave the way for a bright and promising future.
</li>
</ul>
</p>

      </div>
      <div className='main6b'>

      </div>

    </div>




<div className='borders'>


</div>
       
        <div className='Footer'>
          <div className='Foot1'>
          <p><button className='buttons'>Get to Know us</button></p>
          <p><button className='buttons'>About us</button></p>
          <p><button className='buttons'>Transformation</button></p>
          <p><button className='buttons'>Read our blog</button></p>

          </div>
          <div className='Foot2'>
          <p className='contri'><button className='buttons'>Contribute</button></p>
          <p><button className='buttons'>Donate</button></p>
          </div>
          <div className='Foot3'>
          <p><button className='buttons'>Contact us</button></p>
          
          </div>
          
         
        </div>
        
        <div className='Foot4'>
          <div className='Foot4a'>

          <button className='face'></button>
          <button className='twi'></button>
          <button className='you'></button>
          </div>
          
          </div>


        </div>

    )
}
export default Home;