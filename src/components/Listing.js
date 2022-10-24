import BuyButton from "./BuyButton";

function Listing({ item }) {
  let classes = "listing";
  if (item.sold) {
    classes += "sold";
  }
  return (
    <div className={classes}>
      <h3>{item.name}</h3>
      <img src={item.img} alt="property"></img>

      <p>{item.price}</p>
      <p>{item.pickup ? "Abholen" : "Versand moglich"}</p>
      <BuyButton sold={item.sold} />
    </div>
  );
}

export default Listing;
