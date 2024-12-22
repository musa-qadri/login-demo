import React from 'react'

export default function hr() {
  return (
    <div>
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
    </div>
  )
}
