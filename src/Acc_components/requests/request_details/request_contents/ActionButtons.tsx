// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import ChildCard from 'src/components/shared/ChildCard';
import { Check, Close } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export const ActionButtons = () => {
  const { t } = useTranslation();
   
  return (
    <ChildCard>
      <TextField
        id="outlined-multiline-static"
        placeholder="Share your thoughts"
        multiline
        fullWidth
        rows={4}
      />
      <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Button variant="contained" color="success" sx={{ display: 'flex', gap: '6px'}} >
          {t('Accept')}
          <Check sx={{width: '18px'}}/>
        </Button>
        <Button variant="contained" color="error" sx={{ display: 'flex', gap: '6px'}}>
          {t('Reject')}
          <Close sx={{width: '18px'}}/>
        </Button>
      </Box>
    </ChildCard>
  );
};
