import react from 'react'
import paystack from '../assets/paystack.svg'
import googlelogo from '../assets/googlelogo.svg'
import kpmglogo from '../assets/kpmglogo.svg'
import heroimage from '../assets/heroimage.svg'


function Paragraph(){
    return(
    <div className='textarea'>
        <div className='left-sect'>
        <h3 className='head1'>Find  a  <span> job </span> easily</h3>
            <p className='para1'>With verified, up-to-date job listings directly from employer websites, we<br></br> create a premium experience for job seekers, employers and data<br></br> seekers alike.</p>
        </div>
        <div className='input-sect'>
            <input className='input1' type= "text" placeholder='Enter keyword, skills, interest'/>
            <input className='input2' type= "text" placeholder='Location'/>
            <input className='input3' type= "search"/>
            <img src ="bx-search.svg"/>
        </div>

        <h4 className='trust'>Trusted by:</h4>
        <div className='left-sect1'>
            <img src= {paystack} width={'100px'} height={'25px'} alt="paystack"/>
            <img src= {googlelogo} width={'105px'} height={'25px'} alt= "google"/>
            <img src= {kpmglogo} width={'100px'} height={'25px'} alt="kpmg"/>
        </div>

        <div className='right-sect'>
            <img src={heroimage} width={'400px'} height={'450px'} alt="hero-image"/>
            </div>
     </div>
        
     
    );
}
export default Paragraph