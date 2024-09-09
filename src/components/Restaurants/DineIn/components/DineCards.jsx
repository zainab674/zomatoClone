import React from 'react';

import { Col, Row } from 'antd';


import Cards from './../../../../utils/cards';
import Restaurants from '../../../../objects/restaurants';






function DineCards() {






    return (
        <>



            <h1 className='md:text-3xl text-lg font-medium mt-2 md:px-16 '>Trending Dining Out Restaurants in Sri Ganganagar Locality</h1>


            <div className="md:py-4 lg:px-16 mt-8 lg:mt-8 md:mt-8 mx-auto mb-10 md:mb-20">
                <Row gutter={[16, 16]} justify="start">
                    {Restaurants.map((location) => {

                        return (


                            <Col key={location.id} xs={24} sm={12} md={12} lg={8} xl={8}>
                                <Cards location={location} />
                            </Col>
                        )
                    })}
                </Row>
            </div>






        </>
    );
}







export default DineCards;

