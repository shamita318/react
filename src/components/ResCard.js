// const ResCard = (props) => {
//   const { resData } = props;

//   return (
//     <div className="res-card">
//       <h3>{resData.name}</h3>
//       <img className="res-logo" src={resData.image} alt={resData.name} />
//       <div className="descrp" id="cuisine">{resData.cuisines.join(", ")}</div>
//       <div className="descrp">⭐ {resData.rating}</div>
//       <div className="descrp">🕒 {resData.deliveryTime}</div>
//     </div>
//   );
// };
// export default ResCard;
const ResCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <h3>{resData.info.name}</h3>
      <img className="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`} alt={resData.info.name} />
      <div className="descrp" id="cuisine">{resData.info.cuisines.join(", ")}</div>
      <div className="descrp">⭐ {resData.info.avgRating}</div>
      <div className="descrp">🕒 {resData.info.sla.deliveryTime} mins</div>
    </div>
  );
};

export default ResCard;