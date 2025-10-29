import ResCard from "./ResCard";
import  { useState } from "react";
// import reslist from "../utils/mockData";
import { useEffect } from "react";
import Shimmer from "./shimmer";
import { Link  } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
  const [listOfRestaurants, setListOfRestaurants]= useState([]);
  const[filteredRestaurant, setFilteredRestaurant]= useState([]);
  const [searchText ,setSearchText] = useState("");
    useEffect ( ()=> {
      fetchData();
    }, []);
 


    const fetchData = async ()=> {
      // const data = await fetch ("https://api.allorigins.win/raw?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3767489&lng=79.4518483&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data = await fetch(
    "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3767489&lng=79.4518483&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  );
 


 
      
      const json = await data.json();
        

      console.log(json?.data?.cards?.card?.card?.gridElements?.infoWithStyle?.restaurant);

      // optional chaining
      setListOfRestaurants(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
      // console.log(listOfRestaurants.length )
     
      
      // setFilteredlist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    }

    const OnlineStatus =useOnlineStatus();

    if(OnlineStatus === false)
       return(
      <h1> looks like you are offline , check your internet connection</h1>
    );

    // condition rendering
     if(listOfRestaurants?.length === 0)
   {
        console.log("helllooooo")
        return <Shimmer/>
      }

   
  return (
    <div className="body">
      <div className="filter">
      <div className="search">
        <input type="text" className="search-box" value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
  
        }} />
        <button className="search-bttn"
         onClick={()=>{
          console.log(searchText);
          const filteredRestaurant = listOfRestaurants.filter((res)=> res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
          setFilteredRestaurant(filteredRestaurant);
        }}> search</button>
      </div>
        <button className="filter-bttn"
        onClick = {() =>{
          const filteredlist = listOfRestaurants.filter(res => res?.info?.avgRating > 4);
          
          
           setFilteredRestaurant(filteredlist);
        }} >
        Top Rated Restaurant </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurants) => (
          <Link 
          key={restaurants.info.id} 
           to={"/restaurant/"+ restaurants.info.id}>
           <ResCard resData={restaurants} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;