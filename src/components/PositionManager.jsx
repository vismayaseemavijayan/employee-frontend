import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Modal, Table } from 'react-bootstrap';

const PositionManager = ({ show, handleClose }) => {
  const [positions, setPositions] = useState([]);
  const [newPosition, setNewPosition] = useState('');

  const fetchPositions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/positions');
      setPositions(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.error('Error fetching positions:', error);
    }
  };     

const handleAddPosition = async () => {
    if (!newPosition.trim()) return;
    try {
      await axios.post('http://localhost:5000/api/positions', { title: newPosition });
      setNewPosition('');
      fetchPositions();
    } catch (error) {
      console.error('Error adding position:', error);
      alert('Failed to add position.');
    }
  };

  const handleDeletePosition = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this position?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/positions/${id}`);
      fetchPositions();
    } catch (error) {
      console.error('Error deleting position:', error);
      alert('Failed to delete position.');
    }
  };

  useEffect(() => {
    fetchPositions();
  }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Manage Positions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="newPosition">
          <Form.Label>New Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter new position"
            value={newPosition}
            onChange={(e) => setNewPosition(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddPosition} className="mt-3">
          Add Position
        </Button>
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((position) => (
              <tr key={position._id}>
                <td>{position.title}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDeletePosition(position._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
};

export default PositionManager;
