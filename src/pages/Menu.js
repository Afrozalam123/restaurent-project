import React from "react";
import BannerImg from "../Afroz/Menu.jpg";
import "../Global.css/Menu.css";

const Menupage = () => {        //BREAK FAST//
  const breakfastItems = [
    { name: "pancakes", price: 120, img: "https://plus.unsplash.com/premium_photo-1663854478296-dd00b6257021?q=80&w=680" },
    { name: "Omlette", price: 50, img: "https://plus.unsplash.com/premium_photo-1667807521536-bc35c8d8b64b?q=80&w=680" },
    { name: "Idlisamber", price: 80, img: "https://images.unsplash.com/photo-1657196118354-f25f29fe636d?q=80&w=680" },
    { name: "Naan", price: 50, img: "https://images.unsplash.com/photo-1655979284091-eea0e93405ee?w=600&auto" },
    { name: "Sandwich", price: 110, img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600&auto" },
    {name: "chickenchilli",price:80, img:"https://media.istockphoto.com/id/1203376683/photo/thai-basil-chicken-asian-style-chicken-in-a-white-bowl-with-chopsticks-white-background-top.jpg?s=612x612&w=0&k=20&c=ykPxjydOnaMpGgeQBwkYgdD8ibCGmdY_e1t9l7nbPPg="},
    {name:"juice",price:90,img:"https://cdn.pixabay.com/photo/2019/10/28/16/58/drink-4584951_1280.png"}
  ];
 



  // Table type rows -> ek row mein max 4 items
  const rows1 = [];
  for (let i = 0; i < breakfastItems.length; i += 4) {
    rows1.push(breakfastItems.slice(i, i + 4));
  }
  

  return (
    <>
      {/* Banner */}
      <section className="menu-banner">
        <img src={BannerImg} alt="menu-banner" className="meu-image" />
        <div className="Meenu-cont">
          <h1>Dive Into Delicious<br />Meal Dishes</h1>
          <p>Fresh. Tasty. Delivered at your doorstep.</p>
        </div>
      </section>

      <div className="hr-line"></div>

      {/* Table Type Menu */}

      
      <div className="menu-table">
        <h1 className="break">Break fast menu</h1>
        {rows1.map((rows1, rowIndex) => (
          <div className="menu-row" key={rowIndex}>
            {rows1.map((item, index) => (
              <div className="menu-cell" key={index}>
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                 
              </div>
             
              
            ))}
             
          </div>
          
        ))}
        
      </div>
      <div className="book-menu">
                <h1 className="book-btn">Book Table</h1>
                </div>

       <section>
        
       </section>
      </>
    
  );
};

export default Menupage;
