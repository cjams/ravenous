import "./index.css";
import Background from "./restaurant.png";

const business_list = [
  {
    imageSrc:
      "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipcode: "10101",
    category: "Italian",
    rating: 4.5,
    review_count: 90,
  },
  {
    imageSrc:
      "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "Tony's Bistro",
    address: "987 Fake St",
    city: "Faketown",
    state: "AZ",
    zipcode: "12345",
    category: "French",
    rating: 4.5,
    review_count: 135,
  },
  {
    imageSrc:
      "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "Taco Town",
    address: "456 Unreal Rd",
    city: "Utopiatown",
    state: "TX",
    zipcode: "67890",
    category: "Mexican",
    rating: 4.5,
    review_count: 105,
  },
];

function Business({ business }) {
  return (
    <div className="m-4">
      <img className="max-w-full rounded-lg" src={business.imageSrc} alt="" />
      <p>Name: {business.name}</p>
      <p>Address: {business.address}</p>
      <p>City: {business.city}</p>
      <p>State: {business.state}</p>
      <p>Zipcode: {business.zipcode}</p>
      <p>Category: {business.category}</p>
      <p>Rating: {business.rating}</p>
      <p>Review count: {business.review_count}</p>
    </div>
  );
}

function BusinessList({ business_list }) {
  const listItems = business_list.map((business) => (
    <Business business={business} />
  ));

  return (
    <div className="">
      <ul className="grid grid-cols-3 mt-6 mx-20 justify-center">
        {listItems}
      </ul>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 mt-4">
      <ul className="flex flex-row justify-center bg-zinc-50 rounded-md p-3 divide-x divide-zinc-700">
        <li
          className="text-slate-700 text-xl text-center pr-3"
          key="best_match"
        >
          Best Match
        </li>
        <li
          className="text-slate-700 text-xl text-center pr-3 pl-3"
          key="rating"
        >
          Highest Rated
        </li>
        <li
          className="text-slate-700 text-xl text-center pl-3"
          key="Most Reviewed"
        >
          Review Count
        </li>
      </ul>
      <div className="flex flex-row space-x-3 justify-center items-center">
        <input
          className="min-h-12 pl-3 border-2 rounded-md border-zinc-600 hover:shadow-xl"
          placeholder="Search Businesses"
        />
        <input
          className="min-h-12 pl-3 border-2 rounded-md border-zinc-600 hover:shadow-xl"
          placeholder="Where?"
        />
      </div>
      <button
        className="transition ease-in-out hover:scale-110 duration-150 bg-amber-100 shadow-md shadow-slate-500 rounded-md p-2"
        type="button"
      >
        Let's Go
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="">
      <div
        className="bg-fixed bg-bottom min-h-64"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <header className="ml-6 pt-8">
          <span className="rounded-md bg-white p-3 text-3xl italic">
            ravenous
          </span>
        </header>
        <SearchBar />
      </div>
      <BusinessList business_list={business_list} />
    </div>
  );
}

export default App;
