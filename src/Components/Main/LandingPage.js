import React from "react";
import { useSelector } from "react-redux";

import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const Categories = useSelector((state) => state.categorieReducer.Categories);
  const Products = useSelector((state) => state.produitReducer.Produits);
  const navigate = useNavigate();
  // console.log(Products.length);
  return (
    <main id="main">
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <h3>
              Learn More <span>About Us</span>
            </h3>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat
                </li>
                <li>
                  <i className="ri-check-double-line" /> Duis aute irure dolor
                  in reprehenderit in voluptate velit
                </li>
                <li>
                  <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a href="/#" className="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* ======= Services Section ======= */}
      <section id="categories" className="services">
        <div className="container">
          <div className="section-title">
            {/* <h2>Categories</h2> */}
            <h3>
              <span>Categories</span>
            </h3>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>
          <div className="row">
            {Categories.map((el, i) => {
              return (
                <div
                  key={i}
                  className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                >
                  <div className="icon-box">
                    <img src={el.image} alt="categorie" />
                    <h4 className="title">
                      <a href="/#produits">{el.nom}</a>
                    </h4>
                    {/* <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* End Services Section */}
      {/* ======= Portfolio Section ======= */}
      <section id="produits" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Produits</h2>
            <h3>
              <span>Produits</span>
            </h3>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
          <div className="wrapper">
            <div className="d-md-flex align-items-md-center">
              <div className="ml-auto d-flex align-items-center views">
                <span className="black-label px-md-2 px-1">
                  {Products && Products.length}
                </span>{" "}
                <span className="text-muted">Products</span>{" "}
              </div>
            </div>
            <div className="d-lg-flex align-items-lg-center pt-2">
              <div className="form-inline d-flex align-items-center my-2 mr-lg-2 radio bg-light border">
                {" "}
                <label className="options">
                  Most Popular <input type="radio" name="radio" />{" "}
                  <span className="checkmark" />{" "}
                </label>{" "}
                <label className="options">
                  Cheapest <input type="radio" name="radio" defaultChecked="" />{" "}
                  <span className="checkmark" />{" "}
                </label>{" "}
              </div>
              <div className="form-inline d-flex align-items-center my-2 checkbox bg-light border mx-lg-2">
                {" "}
                <label className="tick">
                  Farm <input type="checkbox" defaultChecked="checked" />{" "}
                  <span className="check" />{" "}
                </label>{" "}
                <span className="text-dark px-2 count"> 328</span>{" "}
              </div>
              <div className="form-inline d-flex align-items-center my-2 checkbox bg-light border mx-lg-2">
                {" "}
                <label className="tick">
                  Bio <input type="checkbox" /> <span className="check" />{" "}
                </label>{" "}
                <span className="text-dark px-2 count"> 72</span>{" "}
              </div>
              <div className="form-inline d-flex align-items-center my-2 checkbox bg-light border mx-lg-2">
                {" "}
                <label className="tick">
                  Czech republic <input type="checkbox" />{" "}
                  <span className="check" />{" "}
                </label>{" "}
                <span className="border px-1 mx-2 mr-3 font-weight-bold count">
                  {" "}
                  12
                </span>{" "}
                <select name="country" id="country" className="bg-light">
                  <option value="" hidden="">
                    Country
                  </option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Uk">UK</option>
                </select>{" "}
              </div>
            </div>
            <div className="d-sm-flex align-items-sm-center pt-2 clear">
              <div className="text-muted filter-label">Applied Filters:</div>
              <div className="black-label font-weight-bold p-0 px-1 mx-sm-1 mx-0 my-sm-0 my-2">
                Selected Filtre <span className=" px-1 close">×</span>{" "}
              </div>
              <div className="black-label font-weight-bold p-0 px-1 mx-sm-1 mx-0">
                Selected Filtre <span className=" px-1 close">×</span>{" "}
              </div>
            </div>
            <div className="filters">
              {" "}
              <button
                className="btn btn-success"
                type="button"
                data-toggle="collapse"
                data-target="#mobile-filter"
                aria-expanded="true"
                aria-controls="mobile-filter"
              >
                Filter
                <span className="px-1 fas fa-filter" />
              </button>{" "}
            </div>
            <div id="mobile-filter">
              <div className="py-3">
                <h5 className="font-weight-bold">Categories</h5>
                <ul className="list-group">
                  <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                    {" "}
                    vegetables{" "}
                    <span className="badge badge-primary badge-pill">
                      328
                    </span>{" "}
                  </li>
                  <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                    {" "}
                    Fruits{" "}
                    <span className="badge badge-primary badge-pill">
                      112
                    </span>{" "}
                  </li>
                  <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                    {" "}
                    Kitchen Accessories{" "}
                    <span className="badge badge-primary badge-pill">
                      32
                    </span>{" "}
                  </li>
                  <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                    {" "}
                    Chefs Tips{" "}
                    <span className="badge badge-primary badge-pill">
                      48
                    </span>{" "}
                  </li>
                </ul>
              </div>
              <div className="py-3">
                <h5 className="font-weight-bold">Brands</h5>
                <form className="brand">
                  <div className="form-inline d-flex align-items-center py-1">
                    {" "}
                    <label className="tick">
                      Royal Fields <input type="checkbox" />{" "}
                      <span className="check" />{" "}
                    </label>{" "}
                  </div>
                  <div className="form-inline d-flex align-items-center py-1">
                    {" "}
                    <label className="tick">
                      Crasmas Fields <input type="checkbox" defaultChecked="" />{" "}
                      <span className="check" />{" "}
                    </label>{" "}
                  </div>
                  <div className="form-inline d-flex align-items-center py-1">
                    {" "}
                    <label className="tick">
                      Vegetarisma Farm{" "}
                      <input type="checkbox" defaultChecked="" />{" "}
                      <span className="check" />{" "}
                    </label>{" "}
                  </div>
                  <div className="form-inline d-flex align-items-center py-1">
                    {" "}
                    <label className="tick">
                      Farmar Field Eve <input type="checkbox" />{" "}
                      <span className="check" />{" "}
                    </label>{" "}
                  </div>
                  <div className="form-inline d-flex align-items-center py-1">
                    {" "}
                    <label className="tick">
                      True Farmar Steve <input type="checkbox" />{" "}
                      <span className="check" />{" "}
                    </label>{" "}
                  </div>
                </form>
              </div>
              <div className="py-3">
                <h5 className="font-weight-bold">Rating</h5>
                <form className="rating">
                  <div className="form-inline d-flex align-items-center py-2">
                    {" "}
                    <label className="tick">
                      <span className="fas fa-star" />{" "}
                      <span className="fas fa-star" />{" "}
                      <span className="fas fa-star" />{" "}
                      <span className="fas fa-star" />{" "}
                      <span className="fas fa-star" /> <input type="checkbox" />{" "}
                      <span className="check" />{" "}
                    </label>{" "}
                  </div>
                  <div className="form-inline d-flex align-items-center py-2">
                    {" "}
                    <label className="tick">
                      {" "}
                      <span className="fas fa-star" />{" "}
                      <span className="fas fa-star" />{" "}
                      <span className="fas fa-star" />{" "}
                      <span className="fas fa-star" />{" "}
                      <span className="far fa-star px-1 text-muted" />{" "}
                      <input type="checkbox" /> <span className="check" />{" "}
                    </label>{" "}
                  </div>
                  <div className="form-inline d-flex align-items-center py-2">
                    {" "}
                    <label className="tick">
                      <span className="fas fa-star" />{" "}
                      <span className="fas fa-star" />{" "}
                      <span className="fas fa-star" />{" "}
                      <span className="far fa-star px-1 text-muted" />{" "}
                      <span className="far fa-star px-1 text-muted" />{" "}
                      <input type="checkbox" /> <span className="check" />{" "}
                    </label>{" "}
                  </div>
                  <div className="form-inline d-flex align-items-center py-2">
                    {" "}
                    <label className="tick">
                      <span className="fas fa-star" />{" "}
                      <span className="fas fa-star" />{" "}
                      <span className="far fa-star px-1 text-muted" />{" "}
                      <span className="far fa-star px-1 text-muted" />{" "}
                      <span className="far fa-star px-1 text-muted" />{" "}
                      <input type="checkbox" /> <span className="check" />{" "}
                    </label>{" "}
                  </div>
                  <div className="form-inline d-flex align-items-center py-2">
                    {" "}
                    <label className="tick">
                      {" "}
                      <span className="fas fa-star" />{" "}
                      <span className="far fa-star px-1 text-muted" />{" "}
                      <span className="far fa-star px-1 text-muted" />{" "}
                      <span className="far fa-star px-1 text-muted" />{" "}
                      <span className="far fa-star px-1 text-muted" />{" "}
                      <input type="checkbox" /> <span className="check" />{" "}
                    </label>{" "}
                  </div>
                </form>
              </div>
            </div>
            <div className="content py-md-0 py-3">
              <section id="sidebar">
                <div className="py-3">
                  <h5 className="font-weight-bold">Categories</h5>
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                      {" "}
                      vegetables{" "}
                      <span className="badge badge-primary badge-pill">
                        328
                      </span>{" "}
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                      {" "}
                      Fruits{" "}
                      <span className="badge badge-primary badge-pill">
                        112
                      </span>{" "}
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                      {" "}
                      Kitchen Accessories{" "}
                      <span className="badge badge-primary badge-pill">
                        32
                      </span>{" "}
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                      {" "}
                      Chefs Tips{" "}
                      <span className="badge badge-primary badge-pill">
                        48
                      </span>{" "}
                    </li>
                  </ul>
                </div>
                <div className="py-3">
                  <h5 className="font-weight-bold">Brands</h5>
                  <form className="brand">
                    <div className="form-inline d-flex align-items-center py-1">
                      {" "}
                      <label className="tick">
                        Royal Fields <input type="checkbox" />{" "}
                        <span className="check" />{" "}
                      </label>{" "}
                    </div>
                    <div className="form-inline d-flex align-items-center py-1">
                      {" "}
                      <label className="tick">
                        Crasmas Fields{" "}
                        <input type="checkbox" defaultChecked="" />{" "}
                        <span className="check" />{" "}
                      </label>{" "}
                    </div>
                    <div className="form-inline d-flex align-items-center py-1">
                      {" "}
                      <label className="tick">
                        Vegetarisma Farm{" "}
                        <input type="checkbox" defaultChecked="" />{" "}
                        <span className="check" />{" "}
                      </label>{" "}
                    </div>
                    <div className="form-inline d-flex align-items-center py-1">
                      {" "}
                      <label className="tick">
                        Farmar Field Eve <input type="checkbox" />{" "}
                        <span className="check" />{" "}
                      </label>{" "}
                    </div>
                    <div className="form-inline d-flex align-items-center py-1">
                      {" "}
                      <label className="tick">
                        True Farmar Steve <input type="checkbox" />{" "}
                        <span className="check" />{" "}
                      </label>{" "}
                    </div>
                  </form>
                </div>
                <div className="py-3">
                  <h5 className="font-weight-bold">Rating</h5>
                  <form className="rating">
                    <div className="form-inline d-flex align-items-center py-2">
                      {" "}
                      <label className="tick">
                        <span className="fas fa-star" />{" "}
                        <span className="fas fa-star" />{" "}
                        <span className="fas fa-star" />{" "}
                        <span className="fas fa-star" />{" "}
                        <span className="fas fa-star" />{" "}
                        <input type="checkbox" /> <span className="check" />{" "}
                      </label>{" "}
                    </div>
                    <div className="form-inline d-flex align-items-center py-2">
                      {" "}
                      <label className="tick">
                        {" "}
                        <span className="fas fa-star" />{" "}
                        <span className="fas fa-star" />{" "}
                        <span className="fas fa-star" />{" "}
                        <span className="fas fa-star" />{" "}
                        <span className="far fa-star px-1 text-muted" />{" "}
                        <input type="checkbox" /> <span className="check" />{" "}
                      </label>{" "}
                    </div>
                    <div className="form-inline d-flex align-items-center py-2">
                      {" "}
                      <label className="tick">
                        <span className="fas fa-star" />{" "}
                        <span className="fas fa-star" />{" "}
                        <span className="fas fa-star" />{" "}
                        <span className="far fa-star px-1 text-muted" />{" "}
                        <span className="far fa-star px-1 text-muted" />{" "}
                        <input type="checkbox" /> <span className="check" />{" "}
                      </label>{" "}
                    </div>
                    <div className="form-inline d-flex align-items-center py-2">
                      {" "}
                      <label className="tick">
                        <span className="fas fa-star" />{" "}
                        <span className="fas fa-star" />{" "}
                        <span className="far fa-star px-1 text-muted" />{" "}
                        <span className="far fa-star px-1 text-muted" />{" "}
                        <span className="far fa-star px-1 text-muted" />{" "}
                        <input type="checkbox" /> <span className="check" />{" "}
                      </label>{" "}
                    </div>
                    <div className="form-inline d-flex align-items-center py-2">
                      {" "}
                      <label className="tick">
                        {" "}
                        <span className="fas fa-star" />{" "}
                        <span className="far fa-star px-1 text-muted" />{" "}
                        <span className="far fa-star px-1 text-muted" />{" "}
                        <span className="far fa-star px-1 text-muted" />{" "}
                        <span className="far fa-star px-1 text-muted" />{" "}
                        <input type="checkbox" /> <span className="check" />{" "}
                      </label>{" "}
                    </div>
                  </form>
                </div>
              </section>{" "}
              {/* Products Section */}
              <section id="products">
                <div className="container py-3">
                  <div className="row">
                    {Products && Products.length > 0 ? (
                      Products.map((el) => {
                        return (
                          <div
                            key={el.id}
                            className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1"
                          >
                            <div className="card">
                              <img className="card-img-top" src={el.image} />
                              <div className="card-body">
                                <h6 className="font-weight-bold pt-1">
                                  {el.nom_produit}
                                </h6>
                                <div className="text-muted description"></div>
                                <div className="d-flex align-items-center product">
                                  {" "}
                                  <span className="fas fa-star" />{" "}
                                  <span className="fas fa-star" />{" "}
                                  <span className="fas fa-star" />{" "}
                                  <span className="fas fa-star" />{" "}
                                  <span className="far fa-star" />{" "}
                                </div>
                                <div className="d-flex align-items-center justify-content-between pt-3">
                                  <div className="d-flex flex-column">
                                    <div className="h6 font-weight-bold">
                                      {el.prix} DT
                                    </div>
                                  </div>
                                  <button
                                    className="btn btn-dark"
                                    onClick={() => {
                                      navigate("product_details", {
                                        state: {
                                          product: { el },
                                        },
                                      });
                                    }}
                                  >
                                    Details
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p className="w-100 text-center">Aucun produits</p>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Section */}
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <h3>
              Contact <span>Us</span>
            </h3>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>
          <div>
            <iframe
              style={{ border: 0, width: "100%", height: 270 }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              allowFullScreen=""
              title="GFrame"
            />
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </main>
  );
};

export default LandingPage;
