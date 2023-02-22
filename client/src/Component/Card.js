import React from 'react'

const Card = (props) => {
  return (
             <div key={props.id} className='card'>
                {/* <div className='image-container'> */}
                {/* <img src={props.cover} alt='user-img' /> */}
                {/* </div> */}
                <div className='card-content'>
                <div className='card-title'>
                     <h3 >{props.firstName} {props.lastName}</h3>
                         <p className='userPrice'>{props.email}</p>
                         <p className='userSales'>{props.phone}</p>
                     </div>
                 </div>
                </div>
                 
                 
             
  )
}

export default Card