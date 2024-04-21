import React, { useState } from 'react';

const ProfessionalForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Patient Name:
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
        />
      </label>
      <label>
        Patient ID:
        <input
          type="text"
          name="patientId"
          value={formData.patientId}
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfessionalForm;
