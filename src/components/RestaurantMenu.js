import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { IMG_CDN } from "../config"
import ShimmerUi from "./ShimmerUi"
const RestaurantMenu = () => {
 
    const { restaurantId } = useParams()
    
    const [restaurantMenu, setRestaurantMenu] = useState(null)

    useEffect(()=>{
        getRestaurantData()
    },)

    async function getRestaurantData() {
        const res = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=18.4922285&lng=73.9000204&menuId="+ restaurantId)
        const data = await res.json()
        console.log(data.data);
        setRestaurantMenu(data.data)
    }

   
    return (!restaurantMenu) ? <ShimmerUi /> : (
        <>
        <h1>
            RestaurantMenu : {restaurantId}
        </h1>
        <h3>{restaurantMenu.name}</h3>
        <h3>
            <img src={IMG_CDN + restaurantMenu.cloudinaryImageId} alt='Rest IMG'/>
        </h3>
        <h4>{restaurantMenu.city}</h4>
        <h4>{restaurantMenu.totalRatings
}</h4>
        <h4>{restaurantMenu.costForTwoMsg}</h4>
        <ul>
            {Object.values(restaurantMenu?.menu?.items).map((item)=>
                    <li key={item.id}>{item.name}</li>
                )}
        </ul>

        </>
    )
}

export default RestaurantMenu