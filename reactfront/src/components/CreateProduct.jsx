import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/product';

const CreateProduct = () => {

    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);

    const navigate = useNavigate();
  
    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {description: description, price: price, stock: stock})
        navigate('/')
    }

    return (
        <div>
            <h3>Create Product</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                    <input 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                    <input 
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                    <button type='submit' className='btn btn-primary'>store</button>
                </div>
            </form>
        </div>
    )        
}

export default CreateProduct
