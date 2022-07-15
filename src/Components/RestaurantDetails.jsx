import React from "react";
import "./Restaurant.css";
import Form from "./Form";

export default function RestaurantDetails(data) {
//   console.log(data);
  const [showData, setShowData] = React.useState([data.data.data]);
    // console.log(data)
    // console.log(showData)

    

  return (
    <>
     
    <Form/>
    <div>
    {
      

      
        
      

    }

    </div>

    <div className="card">
      {showData[0].map((items) => {
        console.log(items)
        return (
          <div className="cardStart">
            <div className="image">
              <img src={items.img} alt="" />
            </div>
            <div className="restaurant">
                <h2>{items.restaurant}</h2>
                <h3 >{items.title}</h3>
                <p> Cost : {items.cost_for_one}</p>
            <div  className="timeing">
                <p>Min : {items.min_cost}</p>
                <ul>
                    <li>Up to {items.time}</li>

                </ul>

            </div>
             <p>Accepts online payments only</p>


            </div>
            <div className="votesdiv">
                <div><p>{items.ratings}</p></div>
                <div><h6>{items.total_votes} votes</h6>
                <h6>{items.reviews} reviews</h6></div>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}
