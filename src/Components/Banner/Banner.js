import React from 'react'

const Banner = () => {
  return (
    <section id="hero">
          <div className="hero-container">
            <h3>
              Bienvenue sur <strong>Vide Grenier</strong>
            </h3>
            <h1>Trouvez l'introuvable chez Vide Grenier</h1>
            <h2 className="my-5">
              Votre nouvelle destination en ligne pour trouver des articles de
              maison à vider. Nous sommes passionnés par les trésors cachés et
              nous aimons aider nos clients à les découvrir.
            </h2>
            <a href="/#about" className="btn-get-started scrollto">
              Get Started
            </a>
          </div>
        </section>
  )
}

export default Banner