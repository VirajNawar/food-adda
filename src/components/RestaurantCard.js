// Restaurant Card
const RestaurantCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    lastMileTravelString,
  }) => {
    return (
      <div className="card">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt="card-1"
          className="card-logo"
        />
        <h2> {name} </h2> <h4> {cuisines.join(", ")} </h4>{" "}
        <h5> {lastMileTravelString} </h5>
      </div>
    );
  };

  export default RestaurantCard