import { useState } from "react"
import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from "./shared/Card"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"


const FeedbackItem = ( {item} ) => {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  const [rating,setRating]=useState(7)
  const [text,setText]=useState("This is a feedback")


    return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=> deleteFeedback(item.id)} className="close">
          <FaTimes color="purple" />
        </button>
        <button onClick={()=> editFeedback(item)} className="edit">
          <FaEdit color="purple"></FaEdit>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem