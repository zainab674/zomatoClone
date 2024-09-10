import React from 'react';

import { Col, Row } from 'antd';


import Cards from './../../../../utils/cards';
import Restaurants from '../../../../objects/restaurants';






function DeliverRestaurants() {






    return (
        <>



            <h1 className='md:text-3xl text-lg font-medium mt-2 md:px-16 '>Order food online in Saraswati Nagar B, Sri Ganganagar</h1>


            <div className="md:py-4 lg:px-16 mt-8 lg:mt-8 md:mt-8 md:mx-auto mb-10 md:mb-20">
                <Row justify="start">
                    {Restaurants.map((location) => {

                        return (


                            <Col key={location.id} xs={24} sm={10} md={12} lg={8} xl={7}
                                className='md:mx-5'>
                                <Cards location={location} discount={location} />
                            </Col>
                        )
                    })}
                </Row>
            </div>






        </>
    );
}







export default DeliverRestaurants;

