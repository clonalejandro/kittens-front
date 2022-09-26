import React from 'react'
import { Card, Col, Text } from '@nextui-org/react'
import IBreed from '../../interfaces/IBreed'
import './cardBreed.scss'

type CardBreedProps = {
    breed: IBreed
}

export default function CardBreed({ breed }: CardBreedProps) {
    return (
        <Card css={{ w: '300px', mt: '5%' }}>
            <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA" className="card-pill">
                        {breed.origin}
                    </Text>
                    <Text h4 color="white" className="card-pill">
                        {breed.name}
                    </Text>
                </Col>
            </Card.Header>
            {true && (
                <Card.Image
                    src={breed?.image?.url || 'https://cdn2.thecatapi.com/images/db0.jpg'} //TODO: cat placeholder
                    alt={breed?.image?.id}
                    width="100%"
                    height={300}
                    objectFit="cover"
                />
            )}
        </Card>
    )
}
