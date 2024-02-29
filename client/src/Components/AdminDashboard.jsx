import React, { useState } from "react";

const Dashboard2 = () => {
  // Sample data for the table
  const [tableData, setTableData] = useState([
    { id: 1, name: "Item 1", description: "Description 1" },
    { id: 2, name: "Item 2", description: "Description 2" },
    // Add more sample data as needed
  ]);

  // State variables for handling changes
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
  });

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle adding new item
  const handleAdd = () => {
    // Add your logic to add a new item
    // Prompt confirmation message before adding
  };

  // Function to handle updating an item
  const handleUpdate = () => {
    // Add your logic to update an existing item
    // Prompt confirmation message before updating
  };

  // Function to handle deleting an item
  const handleDelete = () => {
    // Add your logic to delete an existing item
    // Prompt confirmation message before deleting
  };

  // Function to display the table rows
  const renderTableRows = () => {
    return tableData.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>
          <button onClick={() => handleUpdate(item)}>Update</button>
          <button onClick={() => handleDelete(item)}>Delete</button>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h2>Dashboard2</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>

      {/* Form for adding/updating items */}
      <form>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
};

export default Dashboard2;
