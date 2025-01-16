import react from 'react'
import { useState } from 'react'
import Header from './Components/Header';
import './index.css'
import Paragraph from './Components/Paragraph';
import Body from './Components/Body';
import Body2 from './Components/Body2';
import Categories from './Components/Categories';
import Companies from './Components/Companies';
import Review from './Components/Review';
import Footer from './Components/Footer';

function App() {

  return (
   <>
   <Header />
   <Paragraph />
   <Body />
   <Body2 />
   <Categories />
   <Companies />
   <Review />
   <Footer />
   </>
  );
}

export default App
