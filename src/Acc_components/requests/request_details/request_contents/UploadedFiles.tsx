// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Box } from '@mui/material';
import { IconDatabase, IconMail, IconMapPin, IconPhone, IconScreenShare } from '@tabler/icons-react';
import DashboardCard from 'src/components/shared/DashboardCard';
import { Download } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const UploadedFiles = () => {
  // chart color
  const { t } = useTranslation();

  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const error = theme.palette.error.main;
  const errorlight = theme.palette.error.light;
  const warning = theme.palette.warning.main;
  const warninglight = theme.palette.warning.light;
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const success = theme.palette.success.main;
  const successlight = theme.palette.success.light;

  interface statType {
    title: string;
    subtitle: string;
    time: string;
    color: string;
    lightcolor: string;
    icon: JSX.Element;
  }

  const stats: statType[] = [
    {
      title: 'Trip to singapore',
      subtitle: 'working on',
      time: 'Read',
      color: primary,
      lightcolor: primarylight,
      icon: <IconMapPin width={20} />,
    },
    {
      title: 'Archived Data',
      subtitle: 'working on',
      time: 'Read',
      color: secondary,
      lightcolor: secondarylight,
      icon: <IconDatabase width={20} />,
    },
    {
      title: 'Meeting with client',
      subtitle: 'pending',
      time: 'Read',
      color: warning,
      lightcolor: warninglight,
      icon: <IconPhone width={20} />,
    },
    {
      title: 'Screening Task Team',
      subtitle: 'working on',
      time: 'Read',
      color: error,
      lightcolor: errorlight,
      icon: <IconScreenShare width={20} />,
    },
    {
      title: 'Send envelope to John',
      subtitle: 'done',
      time: 'Read',
      color: success,
      lightcolor: successlight,
      icon: <IconMail width={20} />,
    },
  ];

  return (
    <DashboardCard title={t("Uploaded Files")}>
      <>
        <Stack spacing={3} mt={5}>
          {stats.map((stat, i) => (
            <Stack
              direction="row"
              spacing={3}
              justifyContent="space-between"
              alignItems="center"
              key={i}
              sx={{ cursor: 'pointer'}}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar
                  variant="rounded"
                  sx={{ bgcolor: stat.lightcolor, color: stat.color, width: 40, height: 40 }}
                >
                  {stat.icon}
                </Avatar>
                <Box>
                  <Typography variant="h6" mb="4px">
                    {stat.title}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {stat.subtitle}
                  </Typography>
                </Box>
              </Stack>

              <Typography variant="subtitle2" color="textSecondary">
                {stat.time} 
              </Typography>
            </Stack>
          ))}
        </Stack>
      </>
    </DashboardCard>
  );
};

export default UploadedFiles;
