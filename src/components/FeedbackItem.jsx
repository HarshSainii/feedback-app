
import { FaTimes, FaEdit} from 'react-icons/fa'
import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import Proptyes from 'prop-types'
import Card from './shared/Card'
function FeedbackItem({item}) {
  const {deleteFeedback,editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
    <button onClick={() => deleteFeedback(item.id)}className='close'>
      <FaTimes color='purple '/>
    </button>
    <button onClick={() => editFeedback(item)}
     className='edit'>
      <FaEdit color='purple'/>
    </button>
    <div className='text-display'>{item.text}</div>
    </Card>    
  )
} 

FeedbackItem.prototype ={
  item : Proptyes.object.isRequired,
}

export default FeedbackItem
