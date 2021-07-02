import React from 'react';

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent d-flex align-items-center">
            <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link h4 mt-3" href="https://github.com/AdhyWiranto44/twice-api-client"><i class="fab fa-github"></i> Visit repo</a>
                    <a class="nav-link h4 mt-3" href="http://www.adhywiranto.xyz/"><i class="fas fa-globe"></i> Visit my website</a>
                </div>
            </div>
            </div>
        </nav>
    );
}