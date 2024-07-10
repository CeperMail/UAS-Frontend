import { useEffect, useState } from 'react';
import ENDPOINTS from "../../utils/constants/endpoints";
import Card from '../Card/Card';

function GlobalCard() {
    const [globalData, setGlobalData] = useState([]);

    useEffect(() => {
        const fetchGlobalData = async () => {
            try {
                const response = await fetch(ENDPOINTS.GLOBAL());
                const data = await response.json();
                setGlobalData(data.global);
            } catch (error) {
                console.error("Error fetching global data:", error);
            }
        };

        fetchGlobalData();
    }, []);

    return (
        <Card 
            title="Global" 
            subtitle="Global Covid Data" 
            data={globalData} 
        />
    );
}

export default GlobalCard;
