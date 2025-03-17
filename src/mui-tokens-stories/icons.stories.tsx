import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import * as MuiIcons from '@mui/icons-material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';


import { AcUnitOutlined } from "@mui/icons-material";

export default {
  title: 'MUI/Icons',
} as Meta;

const icons = Object.entries(MuiIcons);
const iconsPerPage = 30; // Кількість іконок на сторінку
const totalPages = Math.ceil(icons.length / iconsPerPage);

console.table(icons)

const Template: StoryFn = () => {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const startIndex = (page - 1) * iconsPerPage;
  const displayedIcons = icons.slice(startIndex, startIndex + iconsPerPage);

  return (
    <Stack spacing={3} alignItems="center">
      {/* Контейнер для іконок */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
        {displayedIcons.map(([name, Icon]) => (
          <Box key={name} sx={{ textAlign: 'center' }}>
            <Tooltip title={name}>
              <IconButton>
                <Icon />
              </IconButton>
            </Tooltip>
            <Typography variant="caption">{name}</Typography>
          </Box>
        ))}
      </Box>

      {/* Пагінація */}
      <Pagination count={totalPages} page={page} onChange={handleChange} />
    </Stack>
  );
};

export const AllIcons = Template.bind({});
