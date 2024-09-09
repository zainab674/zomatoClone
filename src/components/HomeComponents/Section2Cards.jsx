import React from 'react';
import { Row, Col, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { apiConst } from '../../constants/api.constants';
const { Meta } = Card;

const SectionCards = () => {
    const navigate = useNavigate()


    const dining = (id) => {
        navigate(apiConst.Restaurants.replace(':id', id))
    }
    return (
        <Row
            justify="center"

            style={{ marginTop: '2rem' }}
        >
            <Col span={10} style={{ margin: '0 10px' }}>
                <Card
                    style={{
                        width: '100%',

                    }}
                    cover={
                        <div
                            style={{
                                height: '150px',
                                width: '100%',
                                backgroundImage: 'url("https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                    }
                    onClick={() => dining(1)}
                >
                    <p className='text-xl text-gray-700 font-medium mt-0'>Order Online</p>
                    <p className='text-lg text-gray-500 '>Stay home and order to your doorstep</p>
                </Card>
            </Col>
            <Col span={10} style={{ margin: '0 10px' }}>
                <Card
                    style={{
                        width: '100%',
                    }}
                    cover={
                        <div
                            style={{
                                height: '150px',
                                width: '100%',
                                backgroundImage: 'url("https://www.indiaretailing.com/wp-content/uploads/2020/07/restaurant-1-1-2-1-2.jpg")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                    }

                    onClick={() => dining(2)}
                >
                    <p className='text-xl text-gray-700 font-medium mt-0'>Dining</p>
                    <p className='text-lg text-gray-500 '>View the city's favourite dining venues</p>
                </Card>
            </Col>
        </Row>

    );
};

export default SectionCards;
