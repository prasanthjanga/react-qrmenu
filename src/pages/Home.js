import { SearchBar } from "../components/SearchBar";
import { SlideBannersBar } from "../components/SlideBannersBar";
import { SlideSwiperBar } from "../components/SlideSwiperBar";
import { ItemCard } from "../components/ItemCard";
import { ItemCardList } from "../components/ItemCardList";

// import GridViewIcon from '@mui/icons-material/GridView';
// import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import ViewAgendaSharpIcon from "@mui/icons-material/ViewAgendaSharp";

export const Home = () => {
  return (
    <>
      <SearchBar />
      <SlideSwiperBar />
      <SlideBannersBar />
      <div className="d-flex flex-row align-items-center justify-content-between mt-4 mb-0">
        <h4>Menu</h4>
        <div>
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Grid View"
          >
            <GridViewSharpIcon />
          </div>
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="List View"
          >
            <ViewAgendaSharpIcon />
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-lg-2">
        {items.map((item) => (
          <div className="col">
            <ItemCardList key={item.id} item={item} />
          </div>
        ))}
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-4">
        {items.map((item) => (
          <ItemCard className="col" key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

const items = [
  {
    id: 1,
    name: "Antitrichia Moss",
    category: "Toyota",
    cost: 31.62,
    image:
      "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80",
  },
  {
    id: 2,
    name: "Wild Indigo",
    category: "Chevrolet",
    cost: 6.03,
    image:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3,
    name: "Lance Pottia Moss",
    category: "Chevrolet",
    cost: 27.03,
    image:
      "https://images.unsplash.com/photo-1598514983321-443019673a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 4,
    name: "Great Basin Indian Potato",
    category: "BMW",
    cost: 46.46,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  },
  {
    id: 5,
    name: "Platyhypnidium Moss",
    category: "Toyota",
    cost: 30.45,
    image:
      "https://images.unsplash.com/photo-1621470626764-0e8c9303800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 6,
    name: "Brazilian Wild Petunia",
    category: "Chevrolet",
    cost: 23.34,
    image:
      "https://images.unsplash.com/photo-1613360734521-adef8a377347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    id: 7,
    name: "Cornish Mallow",
    category: "Jaguar",
    cost: 10.52,
    image:
      "https://images.unsplash.com/photo-1542528180-a1208c5169a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80",
  },
  {
    id: 8,
    name: "Wheeler's Tarweed",
    category: "Hyundai",
    cost: 5.81,
    image:
      "https://images.unsplash.com/photo-1598511726623-d2e9996892f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    id: 9,
    name: "Rattlesnake Fern",
    category: "Mazda",
    cost: 18.56,
    image:
      "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    id: 10,
    name: "Kuleshan Sarcogyne Lichen",
    category: "Subaru",
    cost: 22.21,
    image:
      "https://images.unsplash.com/photo-1554998171-7e599bc95ccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 11,
    name: "Allegheny Monkeyflower",
    category: "Dodge",
    cost: 10.57,
    image:
      "https://images.unsplash.com/photo-1542528180-1c2803fa048c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 12,
    name: "Sedge",
    category: "Daewoo",
    cost: 42.27,
    image:
      "https://images.unsplash.com/photo-1564844536311-de546a28c87d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=771&q=80",
  },
  {
    id: 13,
    name: "Paiute Cypress",
    category: "Buick",
    cost: 27.37,
    image:
      "https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
  },
  {
    id: 14,
    name: "Tapertip Desertparsley",
    category: "Chevrolet",
    cost: 34.67,
    image:
      "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 15,
    name: "Durio",
    category: "BMW",
    cost: 41.35,
    image:
      "https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  },
  {
    id: 16,
    name: "Fendler's Waterleaf",
    category: "Ford",
    cost: 38.07,
    image:
      "https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 17,
    name: "Woodfern",
    category: "Lotus",
    cost: 22.23,
    image:
      "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 18,
    name: "Molokai Islandmint",
    category: "Toyota",
    cost: 5.47,
    image:
      "https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 19,
    name: "Leathery Knotweed",
    category: "Toyota",
    cost: 43.23,
    image:
      "https://images.unsplash.com/photo-1630979805425-08f5f5f39aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 20,
    name: "Mexican Sweetcicely",
    category: "Hyundai",
    cost: 23.76,
    image:
      "https://images.unsplash.com/photo-1579630942078-100a2f8e9052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];
