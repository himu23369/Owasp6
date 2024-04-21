// frontend/src/ImageUploadForm.js
import React from 'react';
import axios from 'axios';
import './ImageUpload.css';


class ImageUploadForm extends React.Component {
    state = {
        selectedFile: null,
        personName: ''
    };

    handleFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    handleNameChange = event => {
        this.setState({ personName: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', this.state.selectedFile);
        formData.append('name', this.state.personName);

        axios.post('http://localhost:5000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log(response.data.message);
            // Optionally, you can handle success actions like showing a success message or refreshing the data
        })
        .catch(error => {
            console.error('Error uploading image:', error);
            // Optionally, you can handle error actions like showing an error message
        });
    };

    render() {
        return (
            <div>
                <h2>Upload Image and Name</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Select Image:</label>
                        <input type="file" onChange={this.handleFileChange} />
                    </div>
                    <div>
                        <label>Person's Name:</label>
                        <input type="text" value={this.state.personName} onChange={this.handleNameChange} />
                    </div>
                    <button type="submit">Upload</button>
                </form>
            </div>
        );
    }
}

export default ImageUploadForm;
