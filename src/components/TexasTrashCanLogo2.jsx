import React from 'react'
import { FaStar, FaTrashAlt } from 'react-icons/fa'
import './CSS/TexasTrashCanLogo2.css'

const TexasTrashCanLogo2 = () => {
  return (
    <div className='texastrashcanlogo2wrap'>
        <div className='circle'>
        <FaTrashAlt className='trashcan'/>
            <FaStar className='star1' size={40}/>
            <FaStar className='star2' size={40}/>
            <FaStar className='star3' size={40}/>
            <FaStar className='star4' size={40}/>
            <FaStar className='star5' size={40}/>
        </div>
        <div className='rectangle'>
            <h1>TEXAS</h1>
            
            <p>TRASH CAN VALET</p>

        </div>
      
    </div>
  )
}

export default TexasTrashCanLogo2
