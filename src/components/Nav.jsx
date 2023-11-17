import React from 'react'

const Nav = () => {
  return (
    <div>


<nav class="navbar navbar-expand-lg bg-info">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">BLOG </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <LinK class="nav-link active"  aria-current="page" to="/add">Add </LinK>
              <LinK class="nav-link active"  aria-current="page" to="/view">View </LinK>
              <LinK class="nav-link active"  aria-current="page" to="/search">Search </LinK>
              <LinK class="nav-link active"  aria-current="page" to="/delete">Delete </LinK>
            
            </div>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Nav