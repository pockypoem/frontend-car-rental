import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface CarFormProps {
    showModal: boolean;
    handleCloseModal: () => void;
}


const CarForm: React.FC<CarFormProps> = ({ showModal, handleCloseModal }) => {

    const [formData, setFormData] = React.useState({
        plate: '',
        manufacture: '',
        model: '',
        image: '',
        rentPerDay: 0,
        capacity: 0,
        description: '',
        availableAt: '',
        transmission: '',
        available: true,
        type: '',
        year: 0,
        options: [''],
        specs: ['']
    })

    // menangani perubahan pada input
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
    
        // Jika jenis input adalah checkbox, gunakan checked sebagai nilainya
        const inputValue = type === 'checkbox' ? checked : value;
    
        setFormData((prevData) => ({
            ...prevData,
            [name]: inputValue,
        }));
    };

    // menangani perubahan pada input array (options dan specs)
    const handleArrayInputChange = (index: number, value: string, arrayType: 'options' | 'specs') => {
        setFormData((prevData) => {
            const newArray = [...prevData[arrayType]];
            newArray[index] = value;
            return {
                ...prevData,
                [arrayType]: newArray,
            }
        })
    }

    // Fungsi untuk menambah elemen baru ke dalam array (options dan specs)
  const handleAddArrayElement = (arrayType: 'options' | 'specs') => {
    setFormData((prevData) => ({
        ...prevData,
        [arrayType]: [...prevData[arrayType], ''],
    }));
  };

  // Fungsi untuk menghapus elemen dari array (options dan specs)
  const handleRemoveArrayElement = (index: number, arrayType: 'options' | 'specs') => {
    setFormData((prevData) => {
        const newArray = [...prevData[arrayType]];
        newArray.splice(index, 1);
        return {
            ...prevData,
            [arrayType]: newArray,
        };
    });
  };


    // menangani submit Form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic for save data to backend
        console.log("Ceritanya Simpan Data: ", formData);

        handleCloseModal();
    }


    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Tambah Data Mobil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId='formPlate'>
                        <Form.Label>Plate</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Masukkan Plate'
                            name='plate'
                            value={formData.plate}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formManufacture'>
                        <Form.Label>Manufacture</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Masukkan Manufacture'
                            name='manufacture'
                            value={formData.manufacture}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formModel'>
                        <Form.Label>Model</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Masukkan Model'
                            name='model'
                            value={formData.model}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formImage'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Masukkan URL Gambar'
                            name='image'
                            value={formData.image}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formRentPerDay">
                        <Form.Label>Rent Per Day</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Masukkan rent per day (ex: 200000)"
                            name="rentPerDay"
                            value={formData.rentPerDay}
                            onChange={handleInputChange}
                            min={200000}
                        />
                    </Form.Group>

                    <Form.Group controlId="formCapacity">
                        <Form.Label>Capacity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Masukkan capacity (max 7)"
                            name="capacity"
                            value={formData.capacity}
                            onChange={handleInputChange}
                            min={0}
                            max={6}
                        />
                    </Form.Group>

                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Masukkan description (maksimal 20 kata)"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            maxLength={20 * 5}
                        />
                    </Form.Group>

                    <Form.Group controlId="formAvailableAt">
                        <Form.Label>Available At</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            placeholder="Masukkan available at"
                            name="availableAt"
                            value={formData.availableAt}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formTransmission">
                        <Form.Label>Transmission</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Masukkan transmission"
                            name="transmission"
                            value={formData.transmission}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formAvailable">
                        <Form.Check
                            type="checkbox"
                            label="Available"
                            name="available"
                            checked={formData.available}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formType">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter type"
                            name="type"
                            value={formData.type}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Masukkan year (ex: 2002)"
                            name="year"
                            value={formData.year}
                            onChange={handleInputChange}
                        />
                    </Form.Group>


                    {/* Form untuk Options (Array) */}
                    <Form.Group controlId="formOptions" className='mt-4'>
                        <Form.Label>Options</Form.Label>
                        {formData.options.map((option, index) => (
                            <div key={index} className='d-flex align-items-center mt-2'>
                            <Form.Control
                                type="text"
                                placeholder={`Enter option ${index + 1}`}
                                value={option}
                                onChange={(e) => handleArrayInputChange(index, e.target.value, 'options')}
                            />
                            {index > 0 && (
                                <Button variant="danger" onClick={() => handleRemoveArrayElement(index, 'options')} className='ms-2' style={{ width: '35%' }}>
                                    🗑️ Option
                                </Button>
                            )}
                            </div>
                        ))}
                        <Button className='mt-2'  variant="primary" onClick={() => handleAddArrayElement('options')} >
                            Tambah Option
                        </Button>
                    </Form.Group>

                    {/* Form untuk Specs (Array) */}
                    <Form.Group controlId="formSpecs" className='mt-4'>
                        <Form.Label>Specs</Form.Label>
                        {formData.specs.map((spec, index) => (
                            <div key={index} className='d-flex align-items-center mt-2'>
                            <Form.Control
                                type="text"
                                placeholder={`Enter spec ${index + 1}`}
                                value={spec}
                                onChange={(e) => handleArrayInputChange(index, e.target.value, 'specs')}
                            />
                            {index > 0 && (
                                <Button variant="danger" onClick={() => handleRemoveArrayElement(index, 'specs')} className='ms-2' style={{ width: '35%' }}>
                                🗑️ Spec
                                </Button>
                            )}
                            </div>
                        ))}
                        <Button className='mt-2' variant="primary" onClick={() => handleAddArrayElement('specs')}>
                            Tambah Spec
                        </Button>
                    </Form.Group>


                    
                    <br />
                    <Button className="mt-3" variant='dark' type='submit' style={{ width: '100%' }}>
                        Simpan Data
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}


export default CarForm;