// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Box, Avatar, Typography, Card, CardContent, Grid} from '@mui/material';

import welcomeImg from 'src/assets/images/backgrounds/welcome-bg.svg';
type Props = {
  AgentName: string;
  Date: string;
  Id: number
  Label: string;
  Status: string;
  thumb: string;
  ticketDescription:string;
  ticketTitle: string;
}
type UserProps = {
  user: Props
  t: any
}

const WelcomeCard = ({ user, t }: UserProps) => {
  return (
    <Card elevation={0} sx={{ backgroundColor: (theme) => theme.palette.primary.light, py: 0 }}>
      <CardContent sx={{ py: 4, px: 2 }}>
        <Grid container justifyContent="space-between">
          <Grid item sm={6} display="flex" alignItems="center">
            <Box
              gap="16px"
              sx={{
                display: {
                  xs: 'block',
                  sm: 'flex',
                },
                alignItems: 'center',
                gap: '36px'
              }}
            >
              <Avatar src={user?.thumb} alt="img" sx={{ width: 120, height: 120 }} />
              <Box>
                <Typography variant="h6" whiteSpace="nowrap">
                  {t('Username')}
                </Typography>
                <Typography variant="h3" whiteSpace="nowrap">
                  {user?.AgentName}
                </Typography>

              </Box>
            </Box>
             
          </Grid>
          <Grid item sm={6}>
            <Box mb="-51px">
              <img src={welcomeImg} alt={welcomeImg} width={'340px'} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
