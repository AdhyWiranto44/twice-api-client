import React from 'react';

export default function Jumbotron() {
    return (
        <div className="container border-bottom pb-4">
            <div className="row mt-4">
                <div className="col-md-12 text-center">
                    <img src="./logo.png" alt="TWICE API" width="100" />
                    <h1 className="display-3 mt-3 fw-bold">TWICE API Client</h1>
                </div>
                <div className="col-md-12 text-center">
                    <p className="text-secondary h5">Get TWICE data such as members' profile and album information</p>
                </div>
            </div>
        </div>
    );
}