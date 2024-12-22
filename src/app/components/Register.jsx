'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    organizationName: "",
    uploadCV: null,
    department: "",
    position: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
    setError(""); // Clear error message on input
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name || !formData.email || !formData.phone || !formData.role) {
      setError("Please fill out all required fields.");
      return;
    }

    if (formData.role === "hr" && !formData.organizationName) {
      setError("Please provide an organization name for HR.");
      return;
    }

    if (formData.role === "candidate" && !formData.uploadCV) {
      setError("Please upload a CV for Candidate.");
      return;
    }

    if (
      formData.role === "employee" &&
      (!formData.department || !formData.position || !formData.organizationName)
    ) {
      setError("Please fill out all fields for Employee.");
      return;
    }

    // Save form data to localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    // Navigate to the login page
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Registration Page</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Phone No</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Role</label>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="role"
                value="hr"
                onChange={handleChange}
                checked={formData.role === "hr"}
                className="mr-2"
              />
              HR
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                name="role"
                value="employee"
                onChange={handleChange}
                checked={formData.role === "employee"}
                className="mr-2"
              />
              Employee
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                name="role"
                value="candidate"
                onChange={handleChange}
                checked={formData.role === "candidate"}
                className="mr-2"
              />
              Candidate
            </label>
          </div>
        </div>

        {/* Conditional Fields */}
        {formData.role === "hr" && (
            <>
             <div className="mb-4">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded"
              />
            </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Organization Name</label>
            <input
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          </>
        )}

        {formData.role === "candidate" && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium">Upload CV</label>
              <input
                type="file"
                name="uploadCV"
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium"> Name</label>
              <input
                type="text"
                name="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded"
              />
            </div>
          </>
        )}

        {formData.role === "employee" && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Position</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Organization Name</label>
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded"
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}
