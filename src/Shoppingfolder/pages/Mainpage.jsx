


import React , {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import {Gents,Ladies} from '../data'
import Womancollections from '../components/Womancollections'

const Mainpage =() =>{
  const[gentsfashion,setGentsFashion] = useState(Gents)
  const[ladiesFashion,setLadiesFashion] = useState(Ladies)

  return (
    <div>
          <Header/>
          <Banner />
          <Collections gentsFashion = {gentsfashion}/>
          <Womancollections ladiesFashion={ladiesFashion}/>
          <Footer />
    </div>
  )
}

export default Mainpage
