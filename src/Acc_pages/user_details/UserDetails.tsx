/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import { CardContent, Grid } from '@mui/material';
import BlankCard from 'src/components/shared/BlankCard';
import { fetchTicket } from 'src/store/apps/tickets/TicketSlice';
import { AppState, useDispatch, useSelector } from 'src/store/Store';
import PageContainer from 'src/components/container/PageContainer';
import AccountTab from 'src/components/pages/account-setting/AccountTab';
import WelcomeCard from 'src/Acc_components/user_details/welcomCard/WelcomeCard';
import Banner from 'src/Acc_components/user_details/bannar/Banner';
import { useTranslation } from 'react-i18next';

type UserProps = {
  AgentName: string;
  Date: string;
  Id: number
  Label: string;
  Status: string;
  thumb: string;
  ticketDescription:string;
  ticketTitle: string;
}

const UserDetails = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const location = useLocation();
  const userId: any = location.pathname.split('/').pop();

  const BCrumb = [
    {
      to: '/',
      title: 'Home',
    },
    {
      to: '/users',
      title: 'Users',
    },
    {
      title: 'User Details',
    },
  ];
  
  useEffect(() => {
    dispatch(fetchTicket(userId));
  }, [dispatch]);
  


  const user: UserProps | any = useSelector((state: AppState) => state.ticketReducer.selectedTicket)

  return (
    <PageContainer title="User details" description="this is User details page">
      {/* breadcrumb */}
      <Breadcrumb title={<>{t('User details')}</>}  items={BCrumb} />
      {/* end breadcrumb */}

      <Grid container spacing={3}>
        <Grid item xs={9}>
          <WelcomeCard user={user} t={t} />
        </Grid>
        <Grid item xs={20} sm={3}>
          <Banner/>
        </Grid>
        <Grid item xs={12}>
          <BlankCard>
            <CardContent>
              <AccountTab />
            </CardContent>
          </BlankCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default UserDetails;
