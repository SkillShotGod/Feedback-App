import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) =>{
    
    const [feedback,setFeedback]=useState(FeedbackData)
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit: false
    })
    const addFeedback =(newFeedback) => {
        newFeedback.id= Date.now()
        setFeedback([newFeedback,...feedback])
    }

    const deleteFeedback= (id)=>{
        setFeedback(feedback.filter((item)=> item.id !== id))
    }

    const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    

    }
    const updateFeedback =(id, updItem)=>{
        setFeedback(feedback.map((item)=>item.id === id ? { ...item,...updItem} : item
        ))
    }
    return <FeedbackContext.Provider value ={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}> {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext