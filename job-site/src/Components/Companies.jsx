import react from 'react-dom/client'
import NextArrow from '../assets/NextArrow.png';
import Uber from '../assets/Uber.png';
import Mobile from '../assets/Mobile.png';
import Zapier from '../assets/Zapier.png';
import Google1 from '../assets/Google1.png';
import Airtel from '../assets/Airtel.png';
import Accenture from '../assets/Accenture.png';
import Flutterwave from '../assets/Flutterwave.png';
import Mckinsey1 from '../assets/Mckinsey1.png';


function Companies(){

    return(
    
        <div className='company'>
            <div className='kompany'>
            </div>
            <div className='jobs'>
            <h3>Over 1000+ jobs from top <br></br>companies in our network.</h3>
            <p>Every day we index millions of jobs directly from empoyer websites.<br></br>We're committed to accurate, high quality jobs so you won't find old,<br></br> duplicted, or spamming listings here.</p><br></br>
            <p>Organize and automate your job search while at home or on the go.<br></br>We'll deliver new, relevant jobs of interest straight to your inbox.</p>
            <p className='tex'>Learn More</p>
            <img className='tex1' src={NextArrow} height={'10px'} width={'20px'} />
            </div>

            <div className='uber'>
                <img src= {Uber} />
            </div>
            <div className='mobile'>
                <img src= {Mobile}/>
            </div> 
            <div className='zapier'>
                <img src= {Zapier}/>
            </div>
            <div className='google'>
                <img src={Google1} />
            </div>
            <div className='airtel'>
                <img src= {Airtel} />
            </div>
            <div className='accenture'>
                <img src= {Accenture} />
            </div>
            <div className='flutterwave'>
                <img src= {Flutterwave} />
            </div>
            <div className='mckinesy'>
                <img src= {Mckinsey1} />
            </div>
            </div>
        
    );
}
export default Companies