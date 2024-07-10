import StyledCard from './Card.styled';

function Card({ title, subtitle, data }) {
    return (
        <StyledCard>
            <div className="card__text">
                <h2 className="card__title">{title}</h2>
                <h4 className="card__sub">{subtitle}</h4>
            </div>
            <div className="card__box">
                {data.map((category, index) => (
                    <div key={index} className="card__card">
                        <h2 className="card__category">{category.status}</h2>
                        <h1 className={`card__${category.status.toLowerCase()}`}>
                            {category.total}
                        </h1>
                    </div>
                ))}
            </div>
        </StyledCard>
    );
}

export default Card;
