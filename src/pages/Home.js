import React from 'react';
import Card from '../components/Card';
import CardData from '../data/card.json';
import logo from '../images/educavo.png';

const Home = () => {

    let HomeCardData;
    if (CardData.length >= 3) {
        HomeCardData = CardData.slice(0, 3)
    } else {
        HomeCardData = CardData;
    }

    return (
        <section id="home">
            <div className="homeHeader center">
                <div className="container">
                    <div className="d-flex center">
                        <img src={logo} alt="" />
                    </div>
                    <h3 className="color-secondary fw-light text-center mb-5">The online <span className="color-primary">School</span></h3>

                    <div className="center">
                        <a href="#classSection" className="btn btn-custom ">Explore our classes</a>
                    </div>
                </div>
            </div>

            <div id="classSection">
                <div className="container py-5">
                    <div className="row">
                        {
                            HomeCardData.map(data => {
                                return (
                                    <Card data={data} type="home" col="col-md-4" />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;