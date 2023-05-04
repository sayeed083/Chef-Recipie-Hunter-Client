import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const HomeBanner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };


    return (
        
        <Carousel activeIndex={index} onSelect={handleSelect} className='mx-5 px-5'>

            {/* Slider No-1  */}
            

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/hP2fjVHG/food-Slide1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>White and Brown Cooked Dish on White Ceramic Bowls</h3>
          <p className='text-info'> paratha and halim are popular dishes in South Asia, but they are quite different in terms of texture and flavor. Paratha is a crispy, flaky flatbread that is usually eaten with a savory side dish, while halim is a thick, hearty porridge that is often eaten as a meal in itself.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slider No-2  */}

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/1XcVMTC0/food-Slide2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Pancake With Sliced Strawberry</h3>
          <p >A pancake with sliced strawberry is a breakfast or brunch dish that consists of a fluffy pancake topped with fresh sliced strawberries. Once the pancake is cooked, it is topped with a layer of sliced strawberries, which can be lightly sweetened or left as is for a slightly tart contrast to the pancake. The dish can be further garnished with whipped cream, maple syrup, honey, or other toppings to taste.</p>
        </Carousel.Caption>
      </Carousel.Item>


      {/* Slider No-3  */}
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/ZKs5Z4dB/food-Slide3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Grilled Barbecue</h3>
          <p>
          Grilled barbecue refers to the cooking method of grilling meat, poultry, or vegetables over an open flame or hot coals, while basting or brushing with a savory and sweet barbecue sauce. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default HomeBanner;