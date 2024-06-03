import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CenteredContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

const CenteredBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const HostApp: React.FC = () => {
  const [listName, setListName] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (listName.trim() !== '') {
      navigate(`/todo?listName=${listName}`);
    }
  };

  return (
    <CenteredContainer>
      <CenteredBox>
        <Typography variant="h4" gutterBottom>
          Welcome to the Todolist App
        </Typography>
        <TextField
          id="list-name"
          label="Please enter todo's name to start"
          variant="outlined"
          value={listName}
          onChange={(e) =>  setListName(e.target.value) }
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Create Todo List
        </Button>
      </CenteredBox>
    </CenteredContainer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HostApp />} />
        <Route path="/todo" element={<div id="todo-app"></div>} />
      </Routes>
    </Router>
  );
};

export default App;
