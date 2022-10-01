import React, { Component, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import classes from './Cars.module.css';

const Cars = () => {
    const navigate = useNavigate();
    const [cars, setCars] = useState()

    async function fetchCars() {
        const response = await fetch('api/cars');
        const data = await response.json();
        setCars(data);
    }

    useEffect(() => {
        fetchCars()
    }, []);


    return (

        <div>
            <h1 className={classes.titleText}>Cars</h1>
            {cars != null
                ? <div className={classes.container}>
                    {cars.map(car =>
                        <div key={car.id} className={classes.car} onClick={() => navigate('/car/' + car.id) }>
                            <div>ID: {car.id}</div>
                            <div>Manufacturer: {car.make}</div>
                            <div>Model: {car.model}</div>
                            <div>Year: {car.year}</div>
                            <div>Color: {car.color}</div>
                            <div style={{ background: car.color }}>color</div>
                        </div>
                    )}
                </div>
                : <h1>Loading...</h1>
            }
        </div>
    );

};

export default Cars;
