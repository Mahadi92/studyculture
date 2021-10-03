import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data, col, type }) => {
    const { img, cardTitle, cardDescription, price, rating, ratingCount, lesson } = data
    return (
        <div className={`${col} mb-4`}>
            <div class="card">
                <img src={require(`../images/cardImg/${img}`).default} class="card-img-top card_image" alt="..." />
                <div class="card-body">
                    <div className="w-100 d-flex justify-content-between pb-3">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="lessonSvg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg> <span className="color-primary fw-bold px-1">{lesson} </span> Lesson
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="starSvg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span>{rating} ({ratingCount})</span>
                        </div>

                    </div>
                    <h5 class="card-title color-primary fw-bold">{cardTitle && cardTitle}</h5>
                    <p class="card-text">{cardDescription && cardDescription}</p>

                    <div className="pt-3 d-flex justify-content-between align-items-center">
                        <h3 className="fw-bolder">{price}</h3>

                        <Link to="/" class="btn btn-custom w-50">Enroll Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;