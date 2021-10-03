import React from 'react';
import Card from '../components/Card';
import CardData from '../data/card.json';

const Services = () => {
    return (
        <section className="container py-5">
            <div className="row">
                {
                    CardData.map(data => {
                        return (
                            <Card data={data} type="services" col="col-md-4" />
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Services;