import React, { useState } from 'react';
import { httpFetch } from '../../utils/http';
import { useNavigate } from 'react-router-dom';
import CarForm from './CarForm';

interface Car {
    id: string;
    image: string;
    type: string;
    description: string;
    capacity: number;
    transmission: string;
    year: number;
    rentPerDay: number;
}

interface CarCardProps {
    car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {

    const navigate = useNavigate();
    const [showEditModal, setShowEditModal] = useState(false);
    const [editData, setEditData] = useState<Car | null>(null);

    const handleEdit = async () => {
        // console.log(`Edit data mobil dengan ID: ${car.id}`);

        try {
            const response = await httpFetch<Car>(`cars/${car.id}`, true, {}, { method: 'GET' });
            const carData = response;
            
            setEditData(carData);

            setShowEditModal(true);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error : any) {
            console.error(`Failed to fetch car data for editing: ${error.message}`);
        }

    };

    const handleDelete = async () => {
        await httpFetch<void>(`cars/${car.id}`, true, {}, { method: 'DELETE' });
        console.log(`Berhasil menghapus data dengan ID: ${car.id}`);
        navigate('/dashboard', {replace: true});
    };


    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <div className="card-body">
                    <img
                        className="card-img-top"
                        src={car.image}
                        alt="Card image cap"
                        style={{ height: '270px', width: '100%', objectFit: 'cover' }}
                    />
                    <div className="mt-3">
                        <h5 className="card-title">{car.type}</h5>
                        <h3>
                            <b>{car.rentPerDay} /hari</b>
                        </h3>
                        <p className="card-text" style={{ marginBottom: '20px' }}>
                            {car.description}
                        </p>
                        <div className="penumpang d-flex">
                            <img
                                src="https://i.ibb.co/SrMTbBZ/icon-penumpang.png"
                                alt="icon-penumpang"
                                style={{ width: '25px', height: '25px' }}
                            />
                            <p className="ms-3">{car.capacity} orang</p>
                        </div>
                        <div className="settings d-flex">
                            <img
                                src="https://i.ibb.co/n3MNDF5/icon-settings.png"
                                alt="icon-settings"
                                style={{ width: '25px', height: '25px' }}
                            />
                            <p className="ms-3">{car.transmission}</p>
                        </div>
                        <div className="carYear d-flex">
                            <img
                                src="https://i.ibb.co/Sy9GJgm/fi-calendar.png"
                                alt="fi-calendar"
                                style={{ width: '25px', height: '25px' }}
                            />
                            <p className="ms-3">Tahun {car.year}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button onClick={handleEdit} className="btn btn-warning" style={{ width: '48%' }}>
                                Edit
                            </button>
                            <button onClick={handleDelete} className="btn btn-danger" style={{ width: '48%' }}>
                                Hapus Data
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showEditModal && (
                <CarForm 
                    showModal={showEditModal}
                    handleCloseModal={() => setShowEditModal(false)}
                    editData={editData}
                />
            )}
        </div>
    );
};

export default CarCard;
