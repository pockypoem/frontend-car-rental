import React, { useEffect, useState } from 'react'
import { Alert, Container } from 'react-bootstrap'
import axios from 'axios';
import CardWrapper from '../../components/searchCar/CardWrapper';


const BACKEND_URL = import.meta.env['VITE_BACKEND_URL'];

const DisplayCars = () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [foundCars, setFoundCars] = useState<Array<any> | undefined>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async() => {
            const api = `${BACKEND_URL}/api/v1/cars/`;

            try {
                const response = await axios.get(api);
                const data = response.data;
                setFoundCars(data);
            } catch (err) {
                if (err && typeof err === 'object' && 'message' in err) {
                    setError((err as { message: string }).message);
                } else {
                    setError('An unknown error occurred.');
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <Container style={{ marginTop: '30px' }}>
            {loading && <p>Loading Data.....</p>}
            {error && <Alert variant='danger'>Error fetching data: {error}</Alert>}
            {!loading && !error && !foundCars && null}
            {!loading && !error && foundCars && foundCars.length === 0 && (
                <Alert variant='danger'>Cannot find any cars</Alert>
            )}
            {!loading && !error && foundCars && foundCars.length > 0 && (
                <CardWrapper cars={foundCars} />
            )}
        </Container>
    )
}

export default DisplayCars
