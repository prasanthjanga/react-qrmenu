import { SearchBar } from "../components/SearchBar";
import { SlideBannersBar } from "../components/SlideBannersBar";
import { SlideSwiperBar } from "../components/SlideSwiperBar";
import { ItemCard } from "./ItemCard";

export const Home = () => {
  return (
    <>
      <SearchBar />
      <SlideSwiperBar />
      <SlideBannersBar />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-4">
        {
          items.map(item => (
            <ItemCard className="col" key={item.id} item={item} />
          ))
        }
      </div>
    </>
  );
};

const items = [{
  "id": 1,
  "name": "Antitrichia Moss",
  "category": "Toyota",
  "cost": 31.62,
  "image": "http://dummyimage.com/146x100.png/ff4444/ffffff"
}, {
  "id": 2,
  "name": "Wild Indigo",
  "category": "Chevrolet",
  "cost": 6.03,
  "image": "http://dummyimage.com/210x100.png/5fa2dd/ffffff"
}, {
  "id": 3,
  "name": "Lance Pottia Moss",
  "category": "Chevrolet",
  "cost": 27.03,
  "image": "http://dummyimage.com/102x100.png/ff4444/ffffff"
}, {
  "id": 4,
  "name": "Great Basin Indian Potato",
  "category": "BMW",
  "cost": 46.46,
  "image": "http://dummyimage.com/224x100.png/ff4444/ffffff"
}, {
  "id": 5,
  "name": "Platyhypnidium Moss",
  "category": "Toyota",
  "cost": 30.45,
  "image": "http://dummyimage.com/170x100.png/dddddd/000000"
}, {
  "id": 6,
  "name": "Brazilian Wild Petunia",
  "category": "Chevrolet",
  "cost": 23.34,
  "image": "http://dummyimage.com/104x100.png/cc0000/ffffff"
}, {
  "id": 7,
  "name": "Cornish Mallow",
  "category": "Jaguar",
  "cost": 10.52,
  "image": "http://dummyimage.com/164x100.png/ff4444/ffffff"
}, {
  "id": 8,
  "name": "Wheeler's Tarweed",
  "category": "Hyundai",
  "cost": 5.81,
  "image": "http://dummyimage.com/154x100.png/dddddd/000000"
}, {
  "id": 9,
  "name": "Rattlesnake Fern",
  "category": "Mazda",
  "cost": 18.56,
  "image": "http://dummyimage.com/224x100.png/cc0000/ffffff"
}, {
  "id": 10,
  "name": "Kuleshan Sarcogyne Lichen",
  "category": "Subaru",
  "cost": 22.21,
  "image": "http://dummyimage.com/230x100.png/ff4444/ffffff"
}, {
  "id": 11,
  "name": "Allegheny Monkeyflower",
  "category": "Dodge",
  "cost": 10.57,
  "image": "http://dummyimage.com/145x100.png/ff4444/ffffff"
}, {
  "id": 12,
  "name": "Sedge",
  "category": "Daewoo",
  "cost": 42.27,
  "image": "http://dummyimage.com/217x100.png/dddddd/000000"
}, {
  "id": 13,
  "name": "Paiute Cypress",
  "category": "Buick",
  "cost": 27.37,
  "image": "http://dummyimage.com/209x100.png/cc0000/ffffff"
}, {
  "id": 14,
  "name": "Tapertip Desertparsley",
  "category": "Chevrolet",
  "cost": 34.67,
  "image": "http://dummyimage.com/146x100.png/dddddd/000000"
}, {
  "id": 15,
  "name": "Durio",
  "category": "BMW",
  "cost": 41.35,
  "image": "http://dummyimage.com/153x100.png/dddddd/000000"
}, {
  "id": 16,
  "name": "Fendler's Waterleaf",
  "category": "Ford",
  "cost": 38.07,
  "image": "http://dummyimage.com/218x100.png/ff4444/ffffff"
}, {
  "id": 17,
  "name": "Woodfern",
  "category": "Lotus",
  "cost": 22.23,
  "image": "http://dummyimage.com/202x100.png/cc0000/ffffff"
}, {
  "id": 18,
  "name": "Molokai Islandmint",
  "category": "Toyota",
  "cost": 5.47,
  "image": "http://dummyimage.com/238x100.png/5fa2dd/ffffff"
}, {
  "id": 19,
  "name": "Leathery Knotweed",
  "category": "Toyota",
  "cost": 43.23,
  "image": "http://dummyimage.com/198x100.png/ff4444/ffffff"
}, {
  "id": 20,
  "name": "Mexican Sweetcicely",
  "category": "Hyundai",
  "cost": 23.76,
  "image": "http://dummyimage.com/169x100.png/5fa2dd/ffffff"
}];
