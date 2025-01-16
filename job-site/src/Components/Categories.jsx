import react from 'react'
import Oil from '../assets/Oil.svg';
import Healthcare from '../assets/Healthcare.svg';
import Education from '../assets/Education.svg';
import Accounting from '../assets/Accounting.svg';
import Design from '../assets/Design.svg';
import Technology from '../assets/Technology.svg';
import Security from '../assets/Security.svg';
import Data from '../assets/Data.svg';


function Categories(){
 return(
    <div className='categories'>
     <div className='head'>
     <h1>Popular Categories</h1>
     </div>
     <div className='gridlog'>
        <div className='oil'>
            <img src={Oil} />
            <h2>Oil ang gas</h2>
            <p>(20 new jobs)</p>
        </div>
        <div className='healthcare'>
            <img src={Healthcare} />
            <h2>Healthcare</h2>
            <p>(10 new jobs)</p>
        </div>

        <div className='education'>
            <img src={Education} />
            <h2>Education</h2>
            <p>(10 new jobs)</p>
        </div>

        <div className='accounting'>
            <img src={Accounting} />
            <h2>Accounting</h2>
            <p>(10 new jobs)</p>
        </div><br/>

        <div className='design'>
            <img src={Design} />
            <h2>Desig, Art and Multimedia</h2>
            <p>(20 new jobs)</p>
        </div>

        <div className='technology'>
            <img src={Technology} />
            <h2>Technology</h2>
            <p>(10 new jobs)</p>
        </div>

        <div className='security'>
            <img src={Security} />
            <h2>Security</h2>
            <p>(10 new jobs)</p>
        </div>

        <div className='data'>
            <img src={Data} />
            <h2>Data analyst</h2>
            <p>(10 new jobs)</p>
        </div>
     </div>
    </div>    
 );
}
export default Categories