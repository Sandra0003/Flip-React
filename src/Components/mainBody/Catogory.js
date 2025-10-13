import React from 'react'

const catogories = [
  {
    img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3dbe4c89fbf0003d.png?q=100",
    word:"Minutes"
  },
  {
    img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
    word:"Mobiles & Tablets"
  },
  {
    img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/9c64dfa667885ca9.png?q=100",
    word:"TVs & Appliances"
  },
  {
    img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/4d6b13d5a0e0724a.png?q=100",
    word:"Electronics"
  },
  {
    img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ec2982e5564fe07c.png?q=100",
    word:"Fashion"
  },
  {
    img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/febcb9896245caf4.png?q=100",
    word:"Home & Kitchen"
  },
  {
    img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3d7144345bbcf2e4.png?q=100",
    word:"Beauty & toys"
  },
  {
    img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/cddd92e134ba3ea9.png?q=100",
    word:"Furniture"
  },
  {
    img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/d9eea6cd0e7b68bb.png?q=100",
    word:"Flight Bookings"

  }
  ,{
    img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/2ebb95ec20eae8f1.png?q=100",
    word:"Grocery"
  }

]

const Catogory = () => {
  return (
    <div className='catogory-div'>
     <div className='catogory-div-sub1'>
      {catogories.map((cat,index) => (
        <a key={index} className='scrol-img-a'>
        <div className='firstimg'>
          <div className='imgMain'>
            <img className="_2puWtW _3a3qyb" src={cat.img} alt=""/>
            </div>
            <span className='imgWord'>{cat.word}</span>
            <a href=""></a>
        </div>
       </a>  
      ))}
      </div>          
    </div> 
  )
}

export default Catogory
  