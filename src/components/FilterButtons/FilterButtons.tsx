import React from 'react';
import {Box, Button, styled} from "@mui/material";

interface FilterButtonsProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FiltersContainer = styled(Box)({
  marginTop: "20px",
  display: "flex",
  gap: "0.5rem",
})

const FilterButtons: React.FC<FilterButtonsProps> = ({filter, setFilter}) => {
  return (
    <FiltersContainer>
      <Button variant={'outlined'} color={"info"} onClick={() => setFilter('All')}>All</Button>
      <Button variant={'outlined'} color={"success"} onClick={() => setFilter('Active')}>Active</Button>
      <Button variant={'outlined'} color={"error"} onClick={() => setFilter('Completed')}>Completed</Button>
    </FiltersContainer>
  );
};

export default FilterButtons;
