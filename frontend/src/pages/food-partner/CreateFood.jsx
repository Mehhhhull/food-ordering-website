import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import '../../styles/create-food.css'

const CreateFood = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [video, setVideo] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleVideoChange = (e) => {
        setVideo(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!name || !description || !price || !video) {
            alert("Please fill all fields")
            return
        }

        setLoading(true)
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('video', video)

        try {
            await axios.post(
                "http://localhost:3000/api/foods",
                formData,
                { 
                    withCredentials: true,
                    headers: { 'Content-Type': 'multipart/form-data' }
                }
            )
            alert("Food item created successfully!")
            setName('')
            setDescription('')
            setPrice('')
            setVideo(null)
        } catch (error) {
            console.error("Error creating food:", error)
            alert("Error creating food item")
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        try {
            await axios.get("http://localhost:3000/api/auth/food-partner/logout", { withCredentials: true })
            navigate("/food-partner/login")
        } catch (error) {
            console.error("Logout error:", error)
        }
    }

    return (
        <div className="create-food-container">
            <header className="create-food-header">
                <h1>Create Food Item</h1>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
            </header>

            <form onSubmit={handleSubmit} className="create-food-form">
                <div className="form-group">
                    <label htmlFor="name">Food Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter food name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter food description"
                        rows="4"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter price"
                        step="0.01"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="video">Upload Video</label>
                    <input
                        type="file"
                        id="video"
                        accept="video/*"
                        onChange={handleVideoChange}
                        required
                    />
                    {video && <p className="file-selected">{video.name}</p>}
                </div>

                <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={loading}
                >
                    {loading ? 'Creating...' : 'Create Food Item'}
                </button>
            </form>
        </div>
    )
}

export default CreateFood