import React from "react";
import { Link } from "react-router-dom";
import "../components/style.css";

const AboutUs = () => {
  const items = [
    {
      link: "/chargers",
      img: "https://images-cdn.ubuy.co.in/633f9dd4e03b994658350593-ubuy-online-shopping.jpg",
      title: "Chargers",
      desc: "Fast and reliable chargers for all devices.",
    },
    {
      link: "/clothes",
      img: "https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg",
      title: "Clothes",
      desc: "Trendy clothing, shoes, and fashion accessories.",
    },
    {
      link: "/computers",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmD3Ab8aOMnuR-SHno579ed1EtnEdV8TCz3Q&s",
      title: "Computers",
      desc: "Find the best computers for gaming, work, and personal use.",
    },
    {
      link: "/food",
      img: "https://blog.swiggy.com/wp-content/uploads/2024/02/Masala-Dosa-1024x538.jpg",
      title: "Food",
      desc: "Delicious and fresh snacks, groceries, and beverages.",
    },
    {
      link: "/headphones",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_551_ANC_Pro.347_1.jpg?v=1737546044",
      title: "Headphones",
      desc: "Experience high-quality sound with our headphones.",
    },
    {
      link: "/keyboards",
      img: "https://images-cdn.ubuy.co.in/6642ce7f766c4d68b20de6d1-solidtek-bilingual-german-english-black.jpg",
      title: "Keyboards",
      desc: "Mechanical and membrane keyboards for work and gaming.",
    },
    {
      link: "/laptops",
      img: "https://cdn.thewirecutter.com/wp-content/media/2024/11/cheapgaminglaptops-2048px-7981.jpg?auto=webp&quality=75&width=1024",
      title: "Laptops",
      desc: "Powerful laptops for professionals, students, and gamers.",
    },
    {
      link: "/mobiles",
      img: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/317434_0_iUBrKWxfg.png?updatedAt=1757529567127",
      title: "Mobiles",
      desc: "Latest smartphones from top brands at unbeatable prices.",
    },
    {
      link: "/monitors",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIscYV5Kt_WPJQyleZnDxF8lCBpaTDcLzOA&s",
      title: "Monitors",
      desc: "HD, 4K, and gaming monitors for every need.",
    },
    {
      link: "/pendrives",
      img: "accessories.jpg",
      title: "Pendrives",
      desc: "High-speed USB drives for all your storage needs.",
    },
    {
      link: "/travel",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
      title: "Travel",
      desc: "Travel essentials, luggage, backpacks, and accessories.",
    },
    {
      link: "/webcams",
      img: "https://5.imimg.com/data5/SELLER/Default/2022/5/WL/AM/AL/153067647/web-camera-500x500-jpg-500x500.jpg",
      title: "Webcams",
      desc: "High-definition webcams for streaming, meetings, and video calls.",
    },
  ].sort((a, b) => a.title.localeCompare(b.title)); // sort alphabetically

  return (
    <div className="about-container">
      <h2>Welcome to Our Online Store</h2>
      <p>
        Explore a variety of products, from electronics and food to clothes and
        travel essentials. Shop quality items at great prices, all in one place.
      </p>

      <div className="about-grid">
        {items.map((item, index) => (
          <Link key={index} to={item.link}>
            <div className="about-item">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
