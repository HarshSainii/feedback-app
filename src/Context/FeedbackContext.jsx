import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] =  useState([])
  
    const [feedbackEdit,setFeedbackEdit] = useState({
      item: {},
      edit: false
    })

    useEffect(() => {
      fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
      const response = await fetch('http://localhost:9090/api/list')
      const data = await response.json()  
 
      setFeedback(data)
      setIsLoading(false)
    }
    const addFeedback = async (newFeedback) => {
    
        const response = await fetch("http://localhost:9090/api/add-cat",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFeedback),
    })
    const data = await response.json()

      setFeedback([data, ...feedback])
      }



      

    const deleteFeedback = async (id)=> {
        if(window.confirm(`Are you sure want to delete? ${id} ` )){
      
          await fetch(`http://localhost:9090/api/cat/${id}`, {method: 'DELETE' })
         

          setFeedback(feedback.filter((item) => item._id !== id))
        }
      }




const updateFeedback = async (id, updItem) => {
   
 const response = await fetch(`http://localhost:9090/api/cat-update/${id}`,{
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updItem),
})
const data = await response.json()

  setFeedback(
  feedback.map((item) => (item._id === id ? { ...item, ...data}: item))
 )
}
    const editFeedback = (item) => {
      setFeedbackEdit({
      item,
      edit: true
    })
  }
return(
    <FeedbackContext.Provider
    value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
>
    {children}
</FeedbackContext.Provider>
)
}




export default FeedbackContext