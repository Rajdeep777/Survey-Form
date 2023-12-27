import React, { useEffect, useState } from 'react'

function Survey() {
    const [userSurvey, setUserSurvey] = useState({
        name : '',
        gender : '',
        nationality : '',
        email: '',
        phone: '',
        address: '',
        message: ''
    })

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserSurvey({...userSurvey, [name] : value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8000/test', {
            method : 'POST',
            body : JSON.stringify(userSurvey),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        
    }

    const getUsers = async () => {
        const response = await fetch('http://localhost:8000/test', {
            method : 'GET'
        })
        const data = await response.json()
        console.log(data);
    }

    useEffect(() => {
        getUsers()
    },[])


  return (
    <>
        <form action='' onSubmit={handleSubmit}>
            <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
                <div className='40-w p-5 rounded bg-white'>
                    <div className='mb-2'>
                        <label className='item' htmlFor='name'>Name</label>
                        <input type='text' placeholder='Enter your name' value={userSurvey.name} onChange={handleInput} name='name' id='name' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label className='item' htmlFor='gender'>Gender</label>
                        <input type='text' placeholder='Enter gender' value={userSurvey.gender} onChange={handleInput} name='gender' id='gender'className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label className='item' htmlFor='nationality'>Nationality</label>
                        <input type='text' placeholder='Enter nationality' value={userSurvey.nationality} onChange={handleInput} name='nationality' id='nationality'className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label className='item' htmlFor='email'>Email</label>
                        <input type='text' placeholder='Enter email' value={userSurvey.email} onChange={handleInput} name='email' id='email'className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label className='item' htmlFor='phone'>Phone Number</label>
                        <input type='text' placeholder='Enter phone number' value={userSurvey.phone} onChange={handleInput} name='phone' id='phone'className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label className='item' htmlFor='address'>Address</label>
                        <input type='text' placeholder='Enter address' value={userSurvey.address} onChange={handleInput} name='address' id='address'className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label className='item' htmlFor='message'>Message</label>
                        <textarea type='text' placeholder='Enter message' rows={2} value={userSurvey.message} onChange={handleInput} name='message' id='message'className='form-control'/>
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary my-4' type='submit'>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}

export default Survey