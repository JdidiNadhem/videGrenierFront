import React from "react";

const LandingPage = () => {
  const Categories = [
    {
      id: 1,
      nom: "Bijoux",
      image:"https://www.dabchy.com/assets/images/categories/cat-icon-3.png"
    },
    {
      id: 2,
      nom: "Produits de beauté",
      image:"https://www.dabchy.com/assets/images/categories/cat-icon-6.png"
    },
    {
      id: 3,
      nom: "Vêtements",
      image:"https://www.dabchy.com/assets/images/categories/cat-icon-1.png"
    },
    {
      id: 4,
      nom: "Sacs",
      image:"https://www.dabchy.com/assets/images/categories/cat-icon-5.png"
    },
    {
      id: 5,
      nom: "Accessoires",
      image:"https://www.dabchy.com/assets/images/categories/cat-icon-4.png"
    },
    {
      id: 6,
      nom: "Chaussures",
      image:"https://www.dabchy.com/assets/images/categories/cat-icon-2.png"
    },
  ];

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
            {Categories.map((el,i)=>{return <div key={i} className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <img src={el.image} alt="categorie"/>
                <h4 className="title">
                  <a href="/#">{el.nom}</a>
                </h4>
                {/* <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p> */}
              </div>
            </div>})}
          </div>
        </div>
      </section>
      {/* End Services Section */}
      {/* ======= Portfolio Section ======= */}
      <section id="portfolio" className="portfolio">
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
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src="assets/img/portfolio/portfolio-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <a
                  href="assets/img/portfolio/portfolio-1.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="App 1"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src="assets/img/portfolio/portfolio-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="assets/img/portfolio/portfolio-2.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Web 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src="assets/img/portfolio/portfolio-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <a
                  href="assets/img/portfolio/portfolio-3.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="App 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src="assets/img/portfolio/portfolio-4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <a
                  href="assets/img/portfolio/portfolio-4.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Card 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src="assets/img/portfolio/portfolio-5.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <a
                  href="assets/img/portfolio/portfolio-5.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Web 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src="assets/img/portfolio/portfolio-6.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <a
                  href="assets/img/portfolio/portfolio-6.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="App 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src="assets/img/portfolio/portfolio-7.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <a
                  href="assets/img/portfolio/portfolio-7.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Card 1"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src="assets/img/portfolio/portfolio-8.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <a
                  href="assets/img/portfolio/portfolio-8.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Card 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src="assets/img/portfolio/portfolio-9.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="assets/img/portfolio/portfolio-9.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Web 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
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
