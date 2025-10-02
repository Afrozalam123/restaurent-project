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
  
  const lunchItems=[
    {name:"biryani",price:130, img:"https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?w=600&auto=format"},
    {name:"kabab", price:60,img:"https://cdn.pixabay.com/photo/2024/04/17/07/00/ai-generated-8701491_1280.png"},
    {name:"jeera rice", price:50, img:"https://media.istockphoto.com/id/1364417443/photo/jeera-rice.jpg?b=1&s=612x612&w=0&k=20&c=D8CVD9Zqyt7t160qdv4fdtdeY_Di0VCZGQ-OiCrk-0I="},
    {name:"paneer", price:100, img:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=612x612&w=0&k=20&c=DbA7ucx0xpS18zO1sFIaAmm41xKF-iIlKxOjbgFZJ1o="},
    {name:"chicken-leg-piece", price:90, img:"https://media.istockphoto.com/id/1682018710/photo/closeup-of-spicy-chicken-curry-bowl.jpg?s=612x612&w=0&k=20&c=twyedJO5oRNBevqfdHgVDt-mYkSzXjX80uZ3eHmhNsM="},
    {name:"Mutton-biryani", price:250, img:"https://media.istockphoto.com/id/1218958036/photo/delicious-spicy-chicken-biryani-in-traditional-bowl-on-white-background-indian-or-pakistani.jpg?s=612x612&w=0&k=20&c=rE9E4GMBkyZvv2BlSIvgUzypHWfShIbdDoz3ptuONjg="},
    {name:"chicken-Rezala", price:120, img:"https://media.istockphoto.com/id/1327038150/photo/cream-chicken-curry-with-bread-for-lunch.jpg?s=612x612&w=0&k=20&c=9zQ5PX7-Ct12vCACg8qNHE6CkSF-eTjcfTbq1fY3xH8="}
  ]

  // Evening Menu//

  const EveningItem=[
    {name:"French-fries", price:50, img:"https://media.istockphoto.com/id/2207294206/photo/white-paper-french-fry-box-mock-up-french-fries-holder-cardboard-container-mockup-fast-street.jpg?s=612x612&w=0&k=20&c=oH97Jce_CapHqfwCVhhoUPg-LvNNDpnwGl1C5NJN0FU="},
    {name:"spring-rolls",price:40,img:"https://media.istockphoto.com/id/172419830/photo/spring-rolls-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=O8Xr_o6fVMxekilTWH75DYO7Ge9Tsabny33xbpgGkK8="},
    {name:"chicken-nuggets",price:80, img:"https://media.istockphoto.com/id/1153673258/photo/chicken-nuggets-with-ketchup-directly-from-above-photo.jpg?s=612x612&w=0&k=20&c=qtSZfB2pOHFtN9a2slhzulqYNUevXy0HqrU2hMB9waM="},
    {name:"cold-coffe",price:40, img:"https://media.istockphoto.com/id/1153796247/photo/iced-coffee-background.jpg?s=612x612&w=0&k=20&c=_1g6mcVyjsoJS93ez9BHDANU5HNIO09LQ3zFO1KbOG4="}
  ];

  const DinnerItem=[
    {name:"Tadka-dal", price:80,img:"https://media.istockphoto.com/id/2196828324/photo/dal-tadka-is-a-popular-indian-lentil-dish-made-with-spices-tomatoes-and-herbs-often-served.jpg?s=612x612&w=0&k=20&c=0nlFBGGyeqvh8mdz8Riupfwyuk9kkjEk33j3WgszC8U="},
    { name:"veg-Thali", price:75, img:"https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=MOm3sfIfL22URV6juSCxpA3yfr4O63yJUV5vitufR7Y="},

    {name:"Manchurian",price:45, img:"https://media.istockphoto.com/id/2204824547/photo/vegetable-manchurian-is-a-spicy-indo-chinese-dish-featuring-deep-fried-vegetable-balls-tossed.jpg?s=612x612&w=0&k=20&c=vId6G4_WQd4Lp4n3-zpc33wJ2KgIdJHI4frbqAeoppg="},
    {name:"Chicken-curry",price:90,img:"https://media.istockphoto.com/id/914006562/photo/indian-dish-of-spicy-hot-chicken-curry-in-red.jpg?s=612x612&w=0&k=20&c=FoCUrg4t7FlK9PmE8oh26iiM8rP6nwM-9AyzpgLP4s8="},
    {name:"veg-biryani",price:60,img:"https://media.istockphoto.com/id/495188382/photo/indian-pulav-vegetable-rice-veg-biryani-basmati-rice.jpg?s=612x612&w=0&k=20&c=KQUBQt3PY-9IF31C0gvjrLFb9jZvp5mmLG6Vcxe1e7Q="},
    {name:"Raita",price:50, img:"https://media.istockphoto.com/id/1793214694/photo/boondi-ka-raita-indian-dish.jpg?s=612x612&w=0&k=20&c=_Eq17cC4gJ_cDNkrG5N_AlzVX9G1iKyVT-7k0RuZyPo="}
  ]
 



  // Table type rows -> ek row mein max 4 items
  const rows1 = [];
  for (let i = 0; i < breakfastItems.length; i += 4) {
    rows1.push(breakfastItems.slice(i, i + 4));
  }

  const rows2=[];
  for(let i=0;i<lunchItems.length;i+=4){
    rows2.push(lunchItems.slice(i,i+4))
  }
  const rows3 = [];
  for(let i=0;i<EveningItem.length;i += 4){
    rows3.push(EveningItem.slice(i,i+4))
  }
  const rows4 =[];
    for(let i=0;i<DinnerItem.length;i += 4){
      rows4.push(DinnerItem.slice(i,i+4))
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
          <div className="menu-table">
            <h1 className="break">Lunch Item</h1>
  {rows2.map((rows2, rowIndex) => (
    <div className="menu-row" key={rowIndex}>
      {rows2.map((item, index) => (
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

       </section>

       <section> 
  <div className="menu-table">
    <h1 className="break">Evening Items</h1> {/* Heading sahi karo */}
    {rows3.map((row, rowIndex) => (
      <div className="menu-row" key={rowIndex}>
        {row.map((item, index) => (
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

</section>
     <section>
  <div className="menu-table">
    <h1 className="break">Dinner Item</h1>
    {rows4.map((row, rowIndex) => (
      <div className="menu-row" key={rowIndex}>
        {row.map((item, index) => (
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
</section>
  <section>
    <article className="art-box">
    <article className="art-cont">
      
    </article>
    </article>
  </section>


      </>
    
  );
};

export default Menupage;
