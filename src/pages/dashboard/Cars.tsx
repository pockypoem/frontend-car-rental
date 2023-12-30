import { Alert, Button, Container } from "react-bootstrap";
import CarForm from "../../components/dashboardAdmin/CarForm";
import CardWrapper from "../../components/dashboardAdmin/CardWrapper";
import axios from "axios";
import { useEffect, useState } from "react";
import { httpFetch } from "../../utils/http";


const BACKEND_URL = import.meta.env['VITE_BACKEND_URL'];

const Cars = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [foundCars, setFoundCars] = useState<Array<any> | undefined>();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  // State for all of button filter
  const [allActive, setAllActive] = useState(true);
  const [smallActive, setSmallActive] = useState(false);
  const [mediumActive, setMediumActive] = useState(false);
  const [largeActive, setLargeActive] = useState(false);

  const handleOpenModal = () =>{
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const getButtonVariant = (isActive : boolean) => (isActive ? 'primary' : 'outline-primary');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  useEffect(() => {

    // Dummy Deleted soon
    const id = '0e05834e-db23-4690-8ce0-a4a30cd7be31'
    async function fetchInitialData() {
        const json = await httpFetch(`cars/${id}`, true);
        console.log(json);
    }

    fetchInitialData();


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
                setError('Unknown error 🩻.');
            }
        } finally {
            setLoading(false);
        }
    }

    fetchData();
  }, []);

  const handleFilter = (selectedFilter: string | null) => {
      setFilter(selectedFilter);
      setAllActive(selectedFilter === null);
      setSmallActive(selectedFilter === 'small');
      setMediumActive(selectedFilter === 'medium');
      setLargeActive(selectedFilter === 'large');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filteredCars = (): any[] => {
      if(!foundCars) {
          return [];
      }

      if (filter === 'small') {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return foundCars.filter((cars: any) => cars.capacity <= 2);
      } else if (filter === 'medium') {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return foundCars.filter((cars: any) => cars.capacity > 2 && cars.capacity <= 4);
      } else if(filter === 'large') {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return foundCars.filter((cars: any) => cars.capacity > 4 && cars.capacity <= 7);
      } else {
          return foundCars;
      }
  }

  return (
      <Container style={{ marginTop: '30px'}}>
          <div className="d-flex justify-content-between">
              <div>
                <Button onClick={() => handleFilter(null)} variant={getButtonVariant(allActive)} className={allActive ? 'activeFilter' : 'not-active'}>All</Button>
                <Button onClick={() => handleFilter('small')} variant={getButtonVariant(smallActive)} style={{ marginLeft: '20px' }} className={smallActive ? 'activeFilter' : 'not-active'}>Small</Button>
                <Button onClick={() => handleFilter('medium')} variant={getButtonVariant(mediumActive)} style={{ marginLeft: '20px' }} className={mediumActive ? 'activeFilter' : 'not-active'}>Medium</Button>
                <Button onClick={() => handleFilter('large')} variant={getButtonVariant(largeActive)} style={{ marginLeft: '20px' }} className={largeActive ? 'activeFilter' : 'not-active'}>Large</Button>
              </div>
              <Button variant="success" style={{ marginLeft: '20px' }} onClick={handleOpenModal}>
                Tambah Data
              </Button>
          </div>
          {/* Tampilkan Pop Up Car Form */}
          <CarForm showModal={showModal} handleCloseModal={handleCloseModal}/>


          {loading && <p>Loading Data.....</p>}
          {error && <Alert variant='danger'>Error fetching data: {error}</Alert>}
          {!loading && !error && !foundCars && null}
          {!loading && !error && filteredCars() && filteredCars().length === 0 && (
              <Alert variant='danger'>No cars match with the selected filter</Alert>
          )}
          {!loading && !error && filteredCars() && filteredCars().length > 0 && (
              <CardWrapper cars={filteredCars()} />
          )}
      </Container>
  )
}

export default Cars;
