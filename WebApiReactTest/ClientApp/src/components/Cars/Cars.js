import React, { Component } from 'react';
import classes from './Cars.module.css';

export class Cars extends Component {
    static displayName = Cars.name;

    constructor(props) {
        super(props);
        this.state = { cars: [], loading: true };
    }

    componentDidMount() {
        this.populateCars();
    }

    static renderCars(cars) {
        return (
            <div className={classes.container}>
                {cars.map(car =>
                    <div key={car.id} className={classes.car}>
                        <div>ID: {car.id}</div>
                        <div>Manufacturer: {car.make}</div>
                        <div>Model: {car.model}</div>
                        <div>Year: {car.year}</div>
                        <div>Color: {car.color}</div>
                        <div style={{ background: car.color }}>color</div>
                    </div>
                )}
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Cars.renderCars(this.state.cars);
        return (
            <div>
                <div className={classes.titleText}>
                    <h1 id="tabelLabel" >Cars</h1>
                    <p>Sample list of cars fetched from the server.</p>
                </div>
                {contents}
            </div>
        );
    }

    async populateCars() {
        const response = await fetch('api/cars');
        const data = await response.json();
        this.setState({ cars: data, loading: false });
    }
}