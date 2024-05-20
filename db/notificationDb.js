// import uuid4 from "uuid4";

const notificationDb = [
  {
    // id: uuid4(),
    id: Math.random(),
    title: "Email verification",
    category: "email-verification",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().split(" ")[0],
    desc: "This is a dummy notification - Do not take it seriously right now as it is static data. Thanks for your understanding.",
  },
  {
    // id: uuid4(),
    id: Math.random(),
    title: "Cashback ₦1,050",
    category: "cashback",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().split(" ")[0],
    desc: "Please contact customer support to redeem price. This is a dummy notification - Do not take it seriously right now as it is static data. Thanks for your understanding.",
  },
  {
    // id: uuid4(),
    id: Math.random(),
    title: "New Cleaner!!",
    category: "addition",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().split(" ")[0],
    desc: "This is a dummy notification - Do not take it seriously right now as it is static data. Thanks for your understanding.",
  },
  {
    // id: uuid4(),
    id: Math.random(),
    title: "Top rated cleaner",
    category: "award",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().split(" ")[0],
    desc: "This is a dummy notification - Do not take it seriously right now as it is static data. Thanks for your understanding.",
  },
  {
    // id: uuid4(),
    id: Math.random(),
    title: "Promo!!!",
    category: "promotion",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().split(" ")[0],
    desc: "This is a dummy notification - Do not take it seriously right now as it is static data. Thanks for your understanding.",
  },
  {
    // id: uuid4(),
    id: Math.random(),
    title: "New feature!!",
    category: "update",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().split(" ")[0],
    desc: "This is a dummy notification - Do not take it seriously right now as it is static data. Thanks for your understanding.",
  },
];

export default notificationDb;
