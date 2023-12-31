/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import { Grid } from '@mui/material';
import { AppState, useDispatch, useSelector } from 'src/store/Store';
import PageContainer from 'src/components/container/PageContainer';
import Banner from 'src/Acc_components/user_details/bannar/Banner';
import { fetchRequest } from 'src/store/apps/requests/RequeststSlice';
import WelcomeCard from 'src/Acc_components/requests/request_details/req_welcom_card/WelcomeCard';
import RequestContent from 'src/Acc_components/requests/request_details/request_contents/RequestContent';
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

const RequestDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { t } = useTranslation();
  const requestId: any = location.pathname.split('/').pop();
  
  const BCrumb = [
    {
      to: '/',
      title: 'Home',
    },
    {
      to: '/requests',
      title: 'Requests',
    },
    {
      title: 'Request Details',
    },
  ];
  
  useEffect(() => {
    dispatch(fetchRequest(requestId));
  }, [dispatch]);

  const request: UserProps | any = useSelector((state: AppState) => state.requestReducer.selectedRequest)

  return (
    <PageContainer title="Request details" description="this is request details page">
      {/* breadcrumb */}
      <Breadcrumb title={t("Request details")} items={BCrumb} />
      {/* end breadcrumb */}

      <Grid container spacing={3}>
        <Grid item xs={12} lg={9}>
          <WelcomeCard user={request} />
        </Grid>
        <Grid item xs={12} sm={12} lg={3}>
          <Banner />
        </Grid>
        <Grid item xs={12}>
          <RequestContent user={request}/>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default RequestDetails
;
