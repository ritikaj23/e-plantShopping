import React from 'react';
import './ProductList.css';

function ProductList() {
  // 3+ categories, but category names are missing
  const plantsArray = [
    {
      // category: "Air Purifying Plants", // <-- removed
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        }
      ]
    },
    {
      // category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Sweet fragrance, promotes relaxation.",
          cost: "$18"
        }
      ]
    },
    {
      // category: "Insect Repellent Plants",
      plants: [
        {
          name: "Oregano",
          image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
          description: "The oregano plants contains compounds that can deter certain insects.",
          cost: "$10"
        },
        {
          name: "Marigold",
          image:"https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
          description: "Natural insect repellent, also adds color to the garden.",
          cost: "$8"
        }
      ]
    }
    // You can add more groups if you want (just keep no category property)
  ];

  const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
  };
  const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
  };
  const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
  };

  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
            <a href="/" style={{textDecoration:'none'}}>
              <div>
                <h3 style={{color:'white'}}>Paradise Nursery</h3>
                <i style={{color:'white'}}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div style={styleObjUl}>
          <div> <a href="#" style={styleA}>Plants</a></div>
          <div> <a href="#" style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path></svg></h1></a></div>
        </div>
      </div>

      <div className="product-grid">
        {/* Render plants for each group, but NO category heading */}
        {plantsArray.map((group, idx) => (
          <div className="product-list" key={idx}>
            {group.plants.map((plant, plantIdx) => (
              <div className="product-card" key={plantIdx}>
                <div className="product-title">{plant.name}</div>
                <img className="product-image" src={plant.image} alt={plant.name} />
                <div className="product-price">{plant.cost}</div>
                <div className="product-description"><i>{plant.description}</i></div>
                <button className="product-button">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
