import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Water Resource</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   value={age}
        //   label="Age"
          onChange={handleChange}
        >
          <MenuItem>Brackish Surface Water</MenuItem>
          <MenuItem value={20}>Brackish Surface Water2</MenuItem>
          
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Water Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   value={age}
        //   label="Age"
          onChange={handleChange}
        >
          <MenuItem >User Defined1</MenuItem>
          <MenuItem value={20}>User Defined2</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  );
}