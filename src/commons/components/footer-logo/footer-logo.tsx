import React from 'react';

// components
import FooterIcon from '../footer-icon';

// @material
import { Box } from '@material-ui/core';

const FooterLogo: React.FC = () => {
  return (
    <Box p={1}>
      <FooterIcon />
    </Box>
  );
}

export default FooterLogo;
