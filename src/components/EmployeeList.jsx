// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Table, TextField,Typography,MenuItem, FormControl, Pagination,Select,Grid,InputGroup ,Box } from '@mui/material';
// import EmployeeForm from './EmployeeForm';
// import { Container } from 'react-bootstrap';
// import PositionManager from './PositionManager'; 



// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [search, setSearch] = useState('');
//   const [filter, setFilter] = useState('');
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [showPositionManager, setShowPositionManager] = useState(false);
//   const handleOpenPositionManager = () => setShowPositionManager(true);
//   const handleClosePositionManager = () => setShowPositionManager(false);

//  const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/employees', {
//         params: { page, search, filter, limit: 5 },
//       });
//       setEmployees(response.data.employees);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error('Error fetching employees:', error);
//       alert('Failed to fetch employees.');
//     }
//   };

//   const handleDelete = async (id) => {
//     const isConfirmed = window.confirm('Do you want to loose this particular employee')
//     if(!isConfirmed) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/employees/${id}`);
//       fetchEmployees();
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//       alert('Failed to delete employee.');
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, [page, search, filter]);

//   const handleAdd = () => {
//     setSelectedEmployee(null);
//     setShowModal(true);
//   };

//   const handleEdit = (employee) => {
//     setSelectedEmployee(employee);
//     setShowModal(true);
//   };

// const handleClose = () => setShowModal(false);
//   return (
//     <Container maxWidth="lg">

//      <Grid container spacing={3}>
//         {/* Header */}
//         <Grid item xs={12}>
//           <Typography
//             variant="h4"
//             sx={{
//               backgroundColor: '#DC143C',
//               padding: '10px',
//               borderRadius: '5px',
//               textAlign: 'left',
//               color: '#fff',
//               fontWeight: 'bold',
//             }}
//           >
//             Employee Management
//           </Typography>
//         </Grid>

//         {/* Search and Filter Section */}
//         <Grid container spacing={3} item xs={12}>
//           <Grid item xs={12} md={4}>
//             <TextField
//               fullWidth
//               label="Search by name"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <FormControl fullWidth>
//               <Select
//                 value={filter}
//                 onChange={(e) => setFilter(e.target.value)}
//                 displayEmpty
//               >
//                 <MenuItem value="">
//                   <em>Filter by Position</em>
//                 </MenuItem>
//                 <MenuItem value="Developer">Developer</MenuItem>
//                 <MenuItem value="Manager">Manager</MenuItem>
//                 <MenuItem value="Designer">Designer</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} md={4} container justifyContent="flex-end">
//             <Button variant="contained" onClick={handleAdd} sx={{ backgroundColor: '#4CAF50', color: '#fff' }}>
//               Add Employee
//             </Button>
//           </Grid>
//         </Grid>

//         {/* Employee Table */}
//         <Grid item xs={12}>
//           <Table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Position</th>
//                 <th>Salary</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees.map((employee) => (
//                 <tr key={employee._id}>
//                   <td>{employee?.name}</td>
//                   <td>{employee?.position?.title}</td>
//                   <td>{employee.salary}</td>
//                   <td>
//                     <Button
//                       variant="contained"
//                       onClick={() => handleEdit(employee)}
//                       sx={{ backgroundColor: '#ff9800', color: '#fff', marginRight: '5px' }}
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       variant="contained"
//                       onClick={() => handleDelete(employee._id)}
//                       sx={{ backgroundColor: '#f44336', color: '#fff' }}
//                     >
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Grid>

//         {/* Pagination */}
//         {/* <Grid item xs={12}>
//           <Pagination
//             count={totalPages}
//             page={page}
//             onChange={(e, value) => setPage(value)}
//             sx={{ display: 'flex', justifyContent: 'flex-end' }}
//           />
//         </Grid> */}

// <Grid
//   container
//   spacing={3}
//   sx={{
//     position: 'fixed', 
//     bottom: 0,         
//     left: 0,           
//     right: 0,          
//     backgroundColor: '#fff', // Optional background for visibility
//     padding: '10px',    // Adds some spacing
//     boxShadow: '0 -2px 5px rgba(0,0,0,0.1)', // Optional shadow for separation
//     zIndex: 1000,       // Ensures it stays above other elements
//   }}
// >
//   <Pagination
//     count={totalPages} // Total number of pages from the API
//     page={page} // Current page
//     onChange={(e, value) => setPage(value)} // Update the current page
//     sx={{
//       margin: '0 auto', // Centers the pagination horizontally
//     }}
//   />
// </Grid>


//         {/* Employee Form Modal */}
//         <EmployeeForm
//           showModal={showModal}
//           handleClose={handleClose}
//           employee={selectedEmployee}
//           onSave={fetchEmployees}
//         />

// <Button
//         variant="contained"
//         onClick={handleOpenPositionManager}
//         sx={{ backgroundColor: '#2196F3', color: '#fff', marginBottom: '10px' }}
//       >
//         Manage Positions
//       </Button>
//       <PositionManager
//         show={showPositionManager}
//         handleClose={handleClosePositionManager}
//       />


//       </Grid>
//       </Container>








//   );
// };

// export default EmployeeList;







import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, TextField, Typography, MenuItem, FormControl, Pagination, Select, Grid, Box } from '@mui/material';
import { Container } from 'react-bootstrap';
import EmployeeForm from './EmployeeForm';
import PositionManager from './PositionManager';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showPositionManager, setShowPositionManager] = useState(false);

  const handleOpenPositionManager = () => setShowPositionManager(true);
  const handleClosePositionManager = () => setShowPositionManager(false);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/employees', {
        params: { page, search, filter, limit: 5 },
      });
      setEmployees(response.data.employees);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching employees:', error);
      alert('Failed to fetch employees.');
    }
  };

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Do you want to lose this particular employee?');
    if (!isConfirmed) return;
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Failed to delete employee.');
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [page, search, filter]);

  const handleAdd = () => {
    setSelectedEmployee(null);
    setShowModal(true);
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };
  // const handleEdit = (employee) => {
  //   setSelectedEmployee(employee);
  //   setShowModal(true);
  // };
  

  const handleClose = () => setShowModal(false);

  return (
  








    <Container maxWidth="lg">
      {/* Main Box Wrapper */}
      <Box
        sx={{
          padding: '40px',//changed 20
          borderRadius: '8px',
          boxShadow: 3,
          backgroundColor: '#fff',
          marginTop: '30px',
          marginBottom: '30px',
        }}
      >
        <Grid container spacing={3}>
          {/* Header */}
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                backgroundColor: '#DC143C',
                padding: '10px',
                borderRadius: '5px',
                textAlign: 'left',
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              Employee Management
            </Typography>
          </Grid>

          {/* Search and Filter Section */}
          <Grid container spacing={3} item xs={12}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                size='small'
                label="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}

                displayEmpty
                
                sx={{
                  borderRadius: '5px',
                  padding: '10px', // Match the padding with the header's padding
                }}
              />
            </Grid>
           

            







<Grid item xs={12} md={4}>
  <FormControl fullWidth>
    <TextField
      select
      size="small"
      label="Filter by Position"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      displayEmpty
      sx={{
        borderRadius: '5px',
        padding: '10px', // Match the padding with the header's padding
      }}
    >
      <MenuItem value="">
        <em>All Positions</em>
      </MenuItem>
      <MenuItem value="Developer">Developer</MenuItem>
      <MenuItem value="Manager">Manager</MenuItem>
      <MenuItem value="Designer">Designer</MenuItem>
      <MenuItem value="Tester">Tester</MenuItem>
      <MenuItem value="Hr">Hr</MenuItem>
      <MenuItem value="Business Analyst">Business Analyst</MenuItem>
    </TextField>
  </FormControl>
  <Button
    variant="contained"
    onClick={() => setFilter('')}
    sx={{
      marginTop: '10px',
      backgroundColor: '#DC143C',
      padding:'5px',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#e60000',
      },
    }}
  >
    Clear Filter
  </Button>
</Grid>
            <Grid item xs={12} md={4} container justifyContent="flex-end">
              <Button
                variant="contained"
                onClick={handleAdd}
                sx={{
              
                  backgroundColor: '#4CAF50',
                  color: '#fff',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  '&:hover': {
                    backgroundColor: '#e68900',
                  },
                }}
              >
                Add Employee
              </Button>
            </Grid>
          </Grid>

          {/* Employee Table */}
          <Grid item xs={12}>
            <Table sx={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Salary</th>
                  <th style={{ textAlign: 'right', padding: '10px', fontWeight: 'bold' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee?._id}>
                    <td>{employee?.name}</td>
                    <td>{employee?.position?.title}</td>
                    <td>{employee?.salary}</td>
                    <td style={{ textAlign: 'right' }}>
                      <Button
                        variant="contained"
                        onClick={() => handleEdit(employee)}
                        sx={{
                          backgroundColor: '#ff9800',
                          color: '#fff',
                          marginRight: '10px',
                          padding: '8px 15px',
                          borderRadius: '5px',
                          '&:hover': {
                            backgroundColor: '#e68900',
                          },
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => handleDelete(employee._id)}
                        sx={{
                          backgroundColor: '#f44336',
                          color: '#fff',
                          padding: '8px 15px',
                          borderRadius: '5px',
                          '&:hover': {
                            backgroundColor: '#e68900',
                          },
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Grid>

          {/* Pagination (Fixed at bottom) */}
          <Grid
            container
            spacing={3}
            sx={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: '#fff',
              padding: '10px',
              boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
              zIndex: 1000,
            }}
          >
            <Pagination
              count={totalPages}
              page={page}
              onChange={(e, value) => setPage(value)}
              sx={{
                margin: '0 auto',
              }}
            />
          </Grid>

          {/* Employee Form Modal */}
          <EmployeeForm
            showModal={showModal}
            handleClose={handleClose}
            employee={selectedEmployee}
            onSave={fetchEmployees}
          />

          {/* Manage Positions Button */}
          <Grid item xs={12} container justifyContent="flex-end">
          <Button 
            variant="contained"
            onClick={handleOpenPositionManager}
            sx={{
              backgroundColor: '#2196F3',
              color: '#fff',
              marginBottom: '10px',
              borderRadius: '5px',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#e68900',

              }
            }}
          >
            Manage Positions
          </Button>
          </Grid>

          <PositionManager
            show={showPositionManager}
            handleClose={handleClosePositionManager}
          />
        </Grid>
      </Box>
    </Container>

  );
};

export default EmployeeList;




