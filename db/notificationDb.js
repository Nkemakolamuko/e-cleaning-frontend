// import uuid4 from "uuid4";

const notificationDb = [
  {
    // id: uuid4(),
    id: Math.random(),
    title: "Email verification",
    category: "email-verification",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().split(" ")[0],
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti iure placeat esse recusandae praesentium asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, laudantium.",
  },
  {
    // id: uuid4(),
    id: Math.random(),
    title: "Cashback ₦1,050",
    category: "cashback",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().split(" ")[0],
    desc: "Please contact customer us to redeem price. Corrupti iure placeat esse recusandae praesentium asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, laudantium.",
  },
  {
    // id: uuid4(),
    id: Math.random(),
    title: "New Cleaner!!",
    category: "addition",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().split(" ")[0],
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti iure placeat esse recusandae praesentium asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, laudantium.",
  },
  {
    // id: uuid4(),
    id: Math.random(),
    title: "Top rated cleaner",
    category: "award",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().split(" ")[0],
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti iure placeat esse recusandae praesentium asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, laudantium.",
  },
  {
    // id: uuid4(),
    id: Math.random(),
    title: "Promo!!!",
    category: "promotion",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().split(" ")[0],
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti iure placeat esse recusandae praesentium asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, laudantium.",
  },
  {
    // id: uuid4(),
    id: Math.random(),
    title: "New feature!!",
    category: "update",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().split(" ")[0],
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti iure placeat esse recusandae praesentium asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, laudantium.",
  },
];

export default notificationDb;
