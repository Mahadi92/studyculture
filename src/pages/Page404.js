import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <section id="Page404">
            <div className="h-100 d-flex justify-content-center align-items-end">
                <Link to="/" className="btn btn-primary d-block mb-5 w-50">Go Back</Link>
            </div>
        </section>
    );
};

export default Page404;