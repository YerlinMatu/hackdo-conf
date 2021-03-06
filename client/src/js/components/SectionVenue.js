const React = require('react');
const InjectChildComponent = require('./Inject.js');

class SectionVenue extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="wrap-venue">
        <section className="section-venue">
          <article className="section-venue__article wrap-venue-image">
            <div className="section-venue__article-image"></div>
          </article>

          <article className="section-venue__article">
              <h1 className="section-venue__article__title">
                Lugar de encuentro
                <div className="lower-bar"></div>
              </h1> 
               
              <p className="section-venue__article__copy">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
              </p>
          </article>
        </section>
       </div>
    )
  }
}

module.exports = InjectChildComponent(SectionVenue, []);
