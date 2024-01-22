import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        AdminUserName: '',
        AdminPassword: ''
    });
    const handleInputChange = (event) =>{
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }
    //TODO need to validate password
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const response = await fetch(`http://localhost:8080/login`,{
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues)
            });
            if(!response.ok) throw new Error('Error fetching login credentials');
            const data = await response.json();
            if(data) navigate('/');
        } catch(error){
            console.error(error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className='w-screen h-screen flex justify-center items-center flex-col gap-5 bg-slate-100'>
            <h1 className='text-2xl font-semibold'>LOGIN</h1>
            <h2>UserName</h2>
            <input
                onChange={handleInputChange}
                className='border-2 px-4 py-2 rounded-lg'
                name='AdminUserName'
                type="text" 
                placeholder='userName' 
            />
            <h2>Password</h2>
            <input
                onChange={handleInputChange}
                className='border-2 px-4 py-2 rounded-lg'
                name='AdminPassword'
                type="password" 
                placeholder='password' 
            />
            <button type='submit' className='bg-slate-400 px-4 py-2 rounded-lg' >
                Submit
            </button>
        </form>
    );
};

export default Login;
