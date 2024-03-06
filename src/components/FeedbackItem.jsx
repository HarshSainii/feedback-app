import React, { useState } from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import Proptypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext
  (FeedbackContext)
  



  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <button onClick={() => deleteFeedback(item._id)} className='close'>
          <FaTimes color='purple'/>
        </button>
        <button onClick={() => editFeedback(item)}
         className='edit'>
          <FaEdit color='purple'/>
        </button>
        <div className='text-display'>{item.text}</div>
    </Card>

  )
}

FeedbackItem.prototype = {
  item: Proptypes.object.isRequired,
}

export default FeedbackItem;