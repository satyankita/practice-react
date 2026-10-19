import React from 'react'
import {Bookmark} from 'lucide-react'

function Cards(props) {

  return (
    <div className='card'>
        <div className='top'>
          <img src={props.brandLogo} alt="" />
          <button>Save <Bookmark size={15}/></button>
        </div>
        <div className='center'>
          <h3>{props.company}<span style={{marginLeft:'5px'}}> {props.datePosted} </span></h3>
          <h2>{props.post}</h2>
          <div className='centerin'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className='bottom'>
          <div>
            <h3>{props.payPerHour}</h3>
            <p>{props.location}</p>
          </div>
          <button>Aplly now</button>
        </div>
       </div>

  )
}

export default Cards