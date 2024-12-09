
// //hello





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Form, Modal } from 'react-bootstrap';

// const EmployeeForm = ({ employee, onSave, showModal, handleClose }) => {
//   const [name, setName] = useState('');
//   const [positionId, setPositionId] = useState('');
//   const [salary, setSalary] = useState('');
//   const [positions, setPositions] = useState([]);

//   useEffect(() => {
//     // Fetch positions for the dropdown
//     const fetchPositions = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/positions');
//         setPositions(response.data);
//       } catch (error) {
//         console.error('Error fetching positions:', error);
//       }
//     };

//     fetchPositions();

//     if (employee) {
//       setName(employee.name);
//       setPositionId(employee.position?._id || '');
//       setSalary(employee.salary);
//     } else {
//       setName('');
//       setPositionId('');
//       setSalary('');
//     }
//   }, [employee]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newEmployee = { name, positionId, salary };

//     try {
//       if (employee) {
//         // Update existing employee
//         await axios.put(
//           `http://localhost:5000/api/employees/${employee._id}`,
//           newEmployee
//         );
//       } else {
//         // Add new employee
//         await axios.post('http://localhost:5000/api/employees', newEmployee);
//       }
//       onSave(); // Notify parent to refresh list
//       handleClose(); // Close modal
//     } catch (error) {
//       console.error('Error submitting the form:', error);
//       alert('Failed to save the employee. Please try again.');
//     }
//   };

//   return (
//     <Modal show={showModal} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>{employee ? 'Edit Employee' : 'Add Employee'}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="name">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="position" className="mt-3">
//             <Form.Label>Position</Form.Label>
//             <Form.Control
//               as="select"
//               value={positionId}
//               onChange={(e) => setPositionId(e.target.value)}
//               required
//             >
//               <option value="">Select a position</option>
//               {positions.map((position) => (
//                 <option key={position._id} value={position._id}>
//                   {position.title}
//                 </option>
//               ))}
//             </Form.Control>
//           </Form.Group>
//           <Form.Group controlId="salary" className="mt-3">
//             <Form.Label>Salary</Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="Enter salary"
//               value={salary}
//               onChange={(e) => setSalary(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit" className="mt-4">
//             Save
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default EmployeeForm;









//hi friday
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Modal } from 'react-bootstrap';

const EmployeeForm = ({ employee, onSave, showModal, handleClose }) => {
  const [name, setName] = useState('');
  const [positionId, setPositionId] = useState('');
  const [salary, setSalary] = useState('');
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Fetch positions for the dropdown
    const fetchPositions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/positions');
        setPositions(response.data);
      } catch (error) {
        console.error('Error fetching positions:', error);
      }
    };

    fetchPositions();

    if (employee) {
      setName(employee.name);
      setPositionId(employee.position?._id || '');
      setSalary(employee.salary);
    } else {
      setName('');
      setPositionId('');
      setSalary('');
    }
  }, [employee]);

  const resetForm = () => {
    setName('');
    setPositionId('');
    setSalary('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = { name, positionId, salary };

    try {
      if (employee) {
        // Update existing employee
        await axios.put(
          `http://localhost:5000/api/employees/${employee._id}`,
          newEmployee
        );
      } else {
        // Add new employee
        await axios.post('http://localhost:5000/api/employees', newEmployee);
      }
      onSave(); // Notify parent to refresh list
      resetForm(); // Clear the form
      handleClose(); // Close modal
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Failed to save the employee. Please try again.');
    }
  };

  const handleModalClose = () => {
    resetForm(); // Clear the form whenever the modal is closed
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>{employee ? 'Edit Employee' : 'Add Employee'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="position" className="mt-3">
            <Form.Label>Position</Form.Label>
            <Form.Control
              as="select"
              value={positionId}
              onChange={(e) => setPositionId(e.target.value)}
              required
            >
              <option value="">Select a position</option>
              {positions.map((position) => (
                <option key={position._id} value={position._id}>
                  {position.title}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="salary" className="mt-3">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-4">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EmployeeForm;

//monday code

