import react from 'react'
import Freelogo from '../assets/Freelogo.png';
import Instagram1 from '../assets/Instagram1.png';
import Twitter1 from '../assets/Twitter1.png';
import Facebook1 from '../assets/Facebook1.png';
import LinkedIn from '../assets/LinkedIn.png';

function Footer(){
 return(
    <div className='footer'>
       
            <img src= {Freelogo} width={'82px'} height={'82px'} />
            <div className='free'>
            <p>Getajobng provides a full online service<br></br>
            for anyone looking for a new job. We're<br></br> not recruitment agency we are job site.</p>
        </div>
        <div className='footnotes'>
            <div className='information'>
                <h5>Information</h5>
                <p>About</p>
                <p>Contact Us</p>
                <p>Terms & Condition</p>
            </div>
            <div className='seekers'>
            <h5>Job Seekers</h5>
            <p>Create Account</p>
            <p>Job List</p>
            <p>FAQ</p>
        </div>
        <div className='employers'>
            <h5>Employers</h5>
            <p>Create Account</p>
            <p>Post a Job</p>
            <p>FAQ</p>
        </div>
        <div className='social'>
            <h5>Social Media:</h5>
            <img src= {Instagram1}/>
            <img src= {Twitter1}/>
            <img src= {Facebook1}/>
            <img src= {LinkedIn}/>
        </div>
        </div>
        <p className='copy'>&copy; Copyright Get-A-Job RMS 2019, All right reserved</p>
    </div>
 );
}
export default Footer