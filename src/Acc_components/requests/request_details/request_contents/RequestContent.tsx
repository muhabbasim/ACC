// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import IntroCard from './IntroCard';
import PhotosCard from './PhotosCard';
import UploadedFiles from './UploadedFiles';
import { ActionButtons } from './ActionButtons';

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
}

const RequestContent = ({ user }: UserProps) => {
  console.log(user);
  
  return (
    <PageContainer title="Request details" description="this is User Profile page">
      <Grid container spacing={3}>
        <Grid item sm={12} lg={8}>
          <IntroCard />
        </Grid>
        <Grid item sm={12} lg={4}>
          <PhotosCard />
        </Grid>
        <Grid item xs={12} lg={12}>
          <UploadedFiles />
        </Grid>
        <Grid item xs={12} lg={12}>
          <ActionButtons />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default RequestContent;
