import React from 'react';

export default function MemberCard(props) {
    return (
        <div className="col-md-3 mb-3">
            <div className="card h-100">
            <img src={props.img} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title fw-bold">{props.name}</h5>
                <small className="card-text text-muted">{props.nationality}</small>
                <p className="card-text">{props.position}</p>
                <button className="btn btn-primary">Detail</button>
            </div>
            </div>
        </div>
    );
}