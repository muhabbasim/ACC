// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { CardContent, Typography, Box } from '@mui/material';
import starBg from 'src/assets/images/backgrounds/gold.png';
import BlankCard from 'src/components/shared/BlankCard';
import { useTranslation } from 'react-i18next';

const Banner = () => {

  const {t} = useTranslation();
  return (
    <BlankCard>
      <CardContent sx={{ p: '25px' }}>
        <Typography variant="subtitle1" textAlign="center" mb={2} textTransform="uppercase" color="textSecondary">
          service Provider
        </Typography>
        <Box textAlign="center">
          <img src={starBg} alt="star" width={95} />
          <Typography variant="h5">{t('Provider')}</Typography>
        </Box>
      </CardContent>
    </BlankCard>
  );
};

export default Banner;
