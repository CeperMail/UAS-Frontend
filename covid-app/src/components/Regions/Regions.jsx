import { useEffect, useState } from 'react';
import ENDPOINTS from "../../utils/constants/endpoints";
import StyledRegion from './Regions.styled';
import confirmed from '../../assets/images/confirmedIcon.png'
import recoveredIcon from '../../assets/images/recoveredIcon.png';
import deathIcon from '../../assets/images/deathIcon.png';

function Region() {
    const [regionData, setRegionData] = useState([]);

    useEffect(() => {
        const fetchRegionData = async () => {
            try {
                const response = await fetch(ENDPOINTS.GLOBAL());
                const data = await response.json();
                setRegionData(data.regions);
            } catch (error) {
                console.error("Error fetching region data:", error);
            }
        };

        fetchRegionData();
    }, []);

    return (
        <StyledRegion>
            <div className="header">
                <h2>Situation by Regions</h2>
                <h4>Bacaan Pilihan Covid</h4>
            </div>
            <div className="cards">
                {regionData.map((region, index) => (
                    <div key={index} className="card">
                        <div className="card__header">{region.name}</div>
                        <div className="card__item confirmed">
                            <span>{region.numbers.confirmed.toLocaleString()}</span>
                            <span>Confirmed <img src={confirmed} alt="Confirmed" /></span>
                        </div>
                        <div className="card__item recovered">
                            <span>{region.numbers.recovered.toLocaleString()}</span>
                            <span>Recovered <img src={recoveredIcon} alt="Recovered" /></span>
                        </div>
                        <div className="card__item death">
                            <span>{region.numbers.death.toLocaleString()}</span>
                            <span>Death <img src={deathIcon} alt="Death" /></span>
                        </div>
                    </div>
                ))}
            </div>
        </StyledRegion>
    );
}

export default Region;
