import react from 'react'
import Freelogo from "../assets/Freelogo.png"

function Header(){
  return(
    <div className='all'>
    <div className='navbar'>
    <img className='logo' src={Freelogo} width={'80px'} height={'80px'} alt='logo'/>
    <ul className='list'>
        <ul>Companies</ul>
        <ul>Candidates</ul>
        <ul>Assessment</ul>
        <ul>Post a Job</ul>
        <ul>Career Advice</ul>
        <button className='signup'>Sign Up</button>
        <button className='login'>Log In</button>
        </ul>
    </div>
    </div>

  );
}
export default Header