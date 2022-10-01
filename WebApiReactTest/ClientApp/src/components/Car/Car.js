import React, { Component, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Car.module.css';

const Car = function () {
    const params = useParams();
    const [car, setCar] = useState()

    async function fetchCar() {
        const response = await fetch('api/cars/car?id='+params.id)
        const data = await response.json();
        setCar(data);
    }

    useEffect(() => {
        fetchCar()
    }, []);

    return (
        <div className={classes.container}>
            {car != null
                ?
                <div className={classes.car}>
                    <div>ID: {car.id}</div>
                    <div>Manufacturer: {car.make}</div>
                    <div>Model: {car.model}</div>
                    <div>Year: {car.year}</div>
                    <div>Color: {car.color}</div>
                    <div style={{ background: car.color }}>color</div>
                </div>
                :
                <div>
                    Loading...
                </div>
            }
        </div>
    );

}

export default Car;