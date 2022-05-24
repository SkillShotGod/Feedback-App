import Card from "./shared/Card"
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import { useEffect, useState } from "react"


import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackForm = () => {
    const {addFeedback, feedbackEdit, updateFeedback }= useContext(FeedbackContext)
    
    const [text,setText]=useState("")
    const [rating,setRating]=useState(10)
    const [btnDisabled,setbtnDisabled]=useState(true)
    const [message,setMessage]=useState("")

    useEffect(()=>{
        if (feedbackEdit.edit===true){
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handleTextChange = (e) =>{
        if (text===""){
            setbtnDisabled(true)
            setMessage(null)
        }
        else if( text !=="" && text.trim().length<=9){
        setMessage("Review should be atlest 10 characters long")
        setbtnDisabled(true)
        }
        else{
            setMessage(null)
            setbtnDisabled(false)
        }
        setText(e.target.value) 
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        if (text.trim().length >10){
            const newFeedback ={
                text,
                rating,
            }

        if (feedbackEdit.edit===true){
            updateFeedback(feedbackEdit.item.id,newFeedback)
        } 
        else{
            addFeedback(newFeedback)
        }
        

            setRating(10) 
            setText('')
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>Rate us</h2>
            <RatingSelect select={ (rating)=> setRating(rating) } />
            <div className="input-group">
                <input onChange = { handleTextChange}type="text" placeholder="Write a review" />
                <Button  type ="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}

        </form>
    </Card>
  )
}

export default FeedbackForm