import React from 'react'
import "./Restaurant.css";


export default function Form() {
const [formData,setFormData]=React.useState({
    restaurant:"",
    name:"",
    image:"",
    cost:"",
    min_cost:"",
    time:"",
    payment:"",
    rating:"",
    votes:"",
    reviews:"",
    
})

const [newData,setNewData]=React.useState([])


const handleChange=(event)=>{
//  setFormData({...formData})
const {value, name} = event.target;
// console.log(value, name);

setFormData({...formData, [name]:value});
console.log(formData);
}
const handleSubmit=(event,formData)=>{
  event.prevent.default();
  setNewData(formData)
  console.log("click")
 setFormData({
  restaurant:"",
  name:"",
  image:"",
  cost:"",
  min_cost:"",
  time:"",
  payment:"",
  rating:"",
  votes:"",
  reviews:""
 })
  
}
const {restaurant,name,image,cost,min_cost,time,payment,rating,votes,reviews} =formData
  return (
    <div className='formData'>
       
      <h1>Add Restaurant</h1>
       <form onSubmit={(e)=>handleSubmit(e,formData)}>
      <label>Restaurant <input type="text" placeholder='Enter Restaurant Name'  name="restaurant" value={restaurant} onChange={handleChange} />
      
      </label> 
      <label>Restaurant <input type="text" placeholder='Enter Name'  name="name" value={name} onChange={handleChange} />
      
      </label> 
      <label htmlFor="">Image <input type="text" placeholder='Enter Image'  name="image" value={image} onChange={handleChange}  />
      
      </label> 
      <label htmlFor="">Cost
      <input type="text" placeholder='Enter Cost' value={cost}  name="cost" onChange={handleChange}  />
      </label> 
      <label htmlFor="">Min_Cost
      <input type="text" placeholder='Enter Min_Cost' value={min_cost}  name="min_cost" onChange={handleChange}  />
      </label> 
      <label htmlFor="">Time
      <input type="text" placeholder='Enter Time' value={time} name="time" onChange={handleChange}  />
      </label> 
      <label htmlFor="">Payment
      <input type="text" placeholder='Enter Payment' value={payment} name="payment" onChange={handleChange}  />
      </label> 
      <label htmlFor="">Rating
      <input type="text" placeholder='Enter Rating' value={rating}  name="rating" onChange={handleChange}  />
      </label> 
      <label htmlFor="">Votes
      <input type="text" placeholder='Enter Votes'value={votes}  name="votes" onChange={handleChange}   />
      </label> 
      <label htmlFor="">Reviews
      <input type="text" placeholder='Enter Reviews' value={reviews}  name="reviews" onChange={handleChange}  />
      </label> 
      <input type="submit"  />
      
     
     
      </form>
    </div>
  )
}
