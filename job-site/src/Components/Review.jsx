import react from 'react'
import Rectangle from '../assets/Rectangle.png';
import Apostrophy from '../assets/Apostrophy.png';
import Started from '../assets/Started.svg';


function Review(){
  return(
    <div className='review'>
       
       <h1>What are our customers<br></br>saying</h1>
        <img src= {Rectangle} />
        <img className='tap' src= {Apostrophy} />
       <div className='reviewer'>
        <p className='tape'>The platform is really convenient to reach out to companies and I have managed<br></br>to secure 2 interviews already! I can also track my application status instead of<br></br> wondering whether the company has seen or shortlisted me.</p><br></br>
        <h3>Irma Black</h3>
        <p>HR Manager at MasterCard</p>
        </div>
        <div className='started'>
        <img src= {Started} />
        </div>
        </div>

  );
}
export default Review