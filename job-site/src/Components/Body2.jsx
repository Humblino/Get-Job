import React from "react";
import ProAnalyst from '../assets/ProAnalyst.png';
import HRmanager from '../assets/HRmanager.png';
import Mckinnesy from '../assets/Mckinnesy.png';
import Roundtick from '../assets/Roundtick.png';

function Body2(){

    return(
        <div className="sub-section">
            <div className="images">
                <img src= {ProAnalyst}></img>
                <h4>Product Analyst <span>@ paystack</span></h4>
            </div>
    
            <div className="images2">
                <img src= {HRmanager}></img>
                <h4>HR Manager <span>@ paystack</span></h4>
            </div>

            <div className="images3">
                <img src= {Mckinnesy}></img>
                <h4>Securities Trader<span>@ Mckinnesy</span></h4>
            </div>
            <div className="paragraph">
                <h1 className="how">How it works</h1>
                <p className="services">GetAJob helps you find the right job easily. GetAJob helps you<br></br> find the right job easily. GetAJob helps you find the right job<br></br> easily.</p>

                <img className= "h41" src={Roundtick}/>
                <h2 className="h41">Search Jobs</h2>
                <p className="services">We have jobs in the most popular industries and with top<br></br> companies. Plus you can create alerts so you never miss job<br></br> opportunity</p>

                <img className= "h41" src={Roundtick}/>
                <h2 className="h41">Create a Profile and get Noticed</h2>
                <p className="services">Create a profile to showcase your skills and experiences so<br></br> recruiters can find you. Upload your CV so you can apply for<br></br> jobs quickly and easily.</p>

                <img className= "h41" src={Roundtick}/>
                <h2 className="h41">Apply for Jobs</h2>
                <p className="services">Find the training you need to improve your skills, or visit our<br></br> Career Center for tips and advice to build your career.</p>
            </div>


        </div>
    );
}
export default Body2