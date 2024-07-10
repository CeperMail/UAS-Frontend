import { useEffect, useState } from 'react';
import ENDPOINTS from "../../utils/constants/endpoints";
import Card from '../Card/Card';

function IndonesiaCard() {
    const [indonesiaData, setIndonesiaData] = useState([]);

    useEffect(() => {
        const fetchIndonesiaData = async () => {
            try {
                const response = await fetch(ENDPOINTS.INDONESIA());
                const data = await response.json();
                setIndonesiaData(data.indonesia);
            } catch (error) {
                console.error("Error fetching Indonesia data:", error);
            }
        };

        fetchIndonesiaData();
    }, []);

    return (
        <Card 
            title="Indonesia" 
            subtitle="Indonesia Covid Data" 
            data={indonesiaData} 
        />
    );
}

export default IndonesiaCard;
