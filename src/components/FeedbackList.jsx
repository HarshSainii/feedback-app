import {motion, AnimatePresence} from 'framer-motion'
import React from 'react'
import {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../Context/FeedbackContext'
function FeedbackList({}) {
  const {feedback} = useContext(FeedbackContext)
  if(!feedback || feedback.length === 0){
    return <p>No Feedback Yet</p>
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div
        key={item.div}
        initial={{opacity: 3}}
        animate={{opacity: 5}}
        exit={{opacity: 10}}
      >
        <FeedbackItem key={item.id} 
        item={item} 
        />
        </motion.div>
      ))}
</AnimatePresence>
    </div>
  )
}
// return (
//   <div className='feedback-list'>
//     {feedback.map((item) => (
//       <FeedbackItem key={item.id} 
//       item={item} 
//       handleDelete={handleDelete}
//       />
//     ))}

//   </div>
// )
// }





export default FeedbackList
