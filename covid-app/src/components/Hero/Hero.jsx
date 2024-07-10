import StyledHero from './Hero.styled';
import vektor from '../../assets/images/vektor.png';
import Button from '../ui/Button/Button';

function Hero() {
  return (
    <StyledHero>
      <div className="container">
        <section className="hero">
          <div className="hero__left">
            <h2 className="hero__title">Covid ID</h2>
            <h3 className="hero__sub">Monitoring Perkembangan Covid</h3>
            <p className="hero__description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis quo praesentium laudantium saepe tenetur corrupti
              quasi deserunt suscipit. Minima asperiores aspernatur maiores
              exercitationem porro beatae blanditiis possimus obcaecati
              temporibus distinctio!
            </p>
            <Button variant="primary" size="big" full>Vaccine</Button>
          </div>
          <div className="hero__right">
            <img className="hero__image" src={vektor} alt=" " />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
