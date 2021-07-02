import React from 'react';

export default function DiscographyCard(props) {
    return (
        <div className="col-md-3 mb-3">
            <div className="card h-100">
            <img src={props.img} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <p className="d-none">{props.value}</p>
                <h5 className="card-title fw-bold">{props.title}</h5>
                <p className="card-text">{props.releaseDate}</p>
                <button className="btn btn-primary">Detail</button>
            </div>
            </div>
        </div>
    );
}