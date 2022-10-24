import "./App.css";
import Listing from "./components/Listing";

const listings = [
  {
    name: "Kopfhörer",
    price: 120,
    img: "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio3-wireless/pdp/refresh2022/studio3-pdp-p02.png.large.2x.png",
    pickup: false,
    sold: false,
  },
  {
    name: "MacBook Pro",
    price: 1250,
    img: "https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SL1500_.jpg",
    pickup: true,
    sold: true,
  },
  {
    name: "HP Monitor",
    price: 190,
    img: "https://www.hp.com/de-de/shop/Html/Merch/Images/c07145693_1750x1285.jpg",
    pickup: true,
    sold: false,
  },
];

const listingsItems = listings.map((item, index) => {
  return <Listing key={index} item={item} />;
});

function App() {
  return (
    <div className="App">
      <h1>FlowMarket</h1>

      <header className="listings-container"> {listingsItems}</header>
    </div>
  );
}

export default App;
