import react from 'react'
import paystac from '../assets/paystac.png';
import Glogo from '../assets/Glogo.png';
import Flutterlogo from '../assets/Flutterlogo.png';
import accesslogo from '../assets/accesslogo.png';
import PrevArrow from '../assets/PrevArrow.png';
import NextArrow from '../assets/NextArrow.png';


function Body(){

    return(
        <div className='recommend'>
            <div className='heading'>
                <h2>Recommended jobs</h2>
            </div>
            <div className='agencies'>
                <div className='section'>
                <div className='pay-sec'>
                    <button className='nav-body'>Full time</button>
                    <img src={paystac} width={'166px'} height={'60x'}></img>
                    <h4 className='QA'>QA Engineer</h4>
                    <hr></hr>
                    <h4>paystack</h4>
                    <p>* Lagos, Nigeria</p>
                    <button className='apply'>Apply now</button>
                </div>
                <div className='google-sec'>
                    <button className='nav-body'>Part time</button>
                    <img src={Glogo} width={'95px'} height={'60px'}></img>
                    <h4 className='QA'>Product Analyst</h4>
                    <hr></hr>
                    <h4>Google</h4>
                    <p>* Lagos, Nigeria</p>
                    <button className='apply'>Apply now</button>
                </div>
                <div className='flutter-sec'>
                <button className='nav-body'>Full time</button>
                    <img src={Flutterlogo} width={'95px'} height={'60px'}></img>
                    <h4 className='QA'>HR Manager</h4>
                    <hr></hr>
                    <h4>Flutterwave</h4>
                    <p>* Abuja, Nigeria</p>
                    <button className='apply'>Apply now</button>
                </div>
                <div className='access-sec'>
                <button className='nav-body'>Full time</button>
                    <img src={accesslogo} width={'205px'} height={'60px'}></img>
                    <h4 className='QA'>QA Engineer</h4>
                    <hr></hr>
                    <h4>Paystack</h4>
                    <p>* Lagos, Nigeria</p>
                    <button className='apply'>Apply now</button>
                </div>
                </div>
                <div className='arrow'>
                <img src={PrevArrow}width={'25px'} height={'15px'}/>
                <img src={NextArrow} width={'25px'} height={'15px'}/>
                </div>
                </div>
            </div>
    
    );

}
export default Body;