import React from "react";
import ReactDom from "react-dom";
// const heading = React.createElement("h1", {}, "Hello world")
// const heading1 = <h1>This is heading</h1>
/**
 *
 * **HEADER
 *      logo
 *      Nav item
 *
 * BODY
 *      search bar
 *      RestrauntsContainer
 *       RestrauntCard
 *              img
 *              name
 *              star rating
 *              time
 *      
 * FOOTER
 *      copyright
 *      link
 *      address
 *      contact
 *
 */

const Header = () => {
  return (
    <divv className="Header">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=740&t=st=1698662329~exp=1698662929~hmac=781a955b9b8b178528124e0987986e8929c29174dd334b58fd1db4930c91620d"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us </li>
          <li>Contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </divv>
  );
};

const RestrauntCard = () =>{
    return(
        <div className="res-card">
            <h3>Friend Dhaba</h3>

        </div>
    )
}

const Body = () =>{
    return(
        <div className="body">
            <div className="search-bar">
                Search
            </div>
            <div className="res-container">  </div>
            <div className="res-card">
                <RestrauntCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>    
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
