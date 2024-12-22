'use client';

import { useState } from 'react';

export default function hr() {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    location: '',
    pay: '',
    qualification: '',
    experience: '',
    jobType: 'Full-Time', // Default job type
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save job data to localStorage or send it to an API
    localStorage.setItem('jobPosting', JSON.stringify(jobData));
    alert('Job posted successfully!');

    // Clear form after submission
    setJobData({
      title: '',
      description: '',
      location: '',
      pay: '',
      qualification: '',
      experience: '',
      jobType: 'Full-Time',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Post a Job</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium">Job Title</label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={jobData.description}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded h-24"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Pay</label>
          <input
            type="text"
            name="pay"
            value={jobData.pay}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Qualification</label>
          <input
            type="text"
            name="qualification"
            value={jobData.qualification}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Experience</label>
          <input
            type="text"
            name="experience"
            value={jobData.experience}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Job Type</label>
          <select
            name="jobType"
            value={jobData.jobType}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
            <option value="Temporary">Temporary</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}
