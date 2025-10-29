import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useRestaurantMennu from "../utils/useRestaurantMennu";


const RestaurantMenu =()=>{
    // const [resInfo , setResInfo]= useState(null);
    const {resId} = useParams();
    const resInfo = useRestaurantMennu(resId);
   
    if  (resInfo === null) {
          console.log("menu render");
        return <Shimmer/>;
    }
     const{name , cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
     const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
     console.log(itemCards);
      
        return (
        <div className="menu">
            <h1>{name} </h1>
            <p> {cuisines.join(" , ")} -  {costForTwoMessage} </p>
            
            <ul>
            {itemCards?.map((item)=> (
                <li key={item.card.info.name}>
                  {item.card.info.name} -  {item.card.info.price/100}  </li>
                ))}
                <li> {itemCards[0].card.info.name}  - </li>
                <li> biryani</li>
                <li>  veg pulaw</li>
            </ul>
        </div>
    )
    
}
export default RestaurantMenu;
 // console.log(resId);

    // useEffect(()=>{
    //       fetchMenu();
    // },[])
    
    // const fetchMenu = async () => {
      
    //           const data = await fetch(menuUrl);
    //      const json = await data.json();
    //      console.log(json);
    //      setResInfo(json.data);
    // };