// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { CardContent, Grid, Typography, MenuItem } from '@mui/material';

// components
import BlankCard from '../../shared/BlankCard';
import CustomTextField from '../../forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../forms/theme-elements/CustomFormLabel';
import CustomSelect from '../../forms/theme-elements/CustomSelect';
import { useTranslation } from 'react-i18next';

// images

interface locationType {
  value: string;
  label: string;
}

// locations
const locations: locationType[] = [
  {
    value: 'us',
    label: 'United States',
  },
  {
    value: 'uk',
    label: 'United Kingdom',
  },
  {
    value: 'india',
    label: 'India',
  },
  {
    value: 'russia',
    label: 'Russia',
  },
];

// currency
const currencies: locationType[] = [
  {
    value: 'us',
    label: 'US Dollar ($)',
  },
  {
    value: 'uk',
    label: 'United Kingdom (Pound)',
  },
  {
    value: 'india',
    label: 'India (INR)',
  },
  {
    value: 'russia',
    label: 'Russia (Ruble)',
  },
];

const AccountTab = () => {
  const [location, setLocation] = React.useState('india');
  const { t } = useTranslation();

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  //   currency
  const [currency, setCurrency] = React.useState('india');

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <BlankCard>
          <CardContent>
      
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-name"
                  >
                    {t('Username')}
                     
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-name"
                    value="Mathew Anderson"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* 2 */}
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-store-name"
                  >
                    {t('Name Store')}
                     
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-store-name"
                    value="Maxima Studio"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* 3 */}
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-location"
                  >
                    {t('Location')}
                    
                  </CustomFormLabel>
                  <CustomSelect
                    fullWidth
                    id="text-location"
                    variant="outlined"
                    value={location}
                    onChange={handleChange1}
                  >
                    {locations.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* 4 */}
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-currency"
                  >
                    {t('Currency')}
                    
                  </CustomFormLabel>
                  <CustomSelect
                    fullWidth
                    id="text-currency"
                    variant="outlined"
                    value={currency}
                    onChange={handleChange2}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* 5 */}
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-email"
                  >
                    {t('Email')}
                    
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-email"
                    value="info@modernize.com"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* 6 */}
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-phone"
                  >
                    {t('Phone')}
                    
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-phone"
                    value="+91 12345 65478"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* 7 */}
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-address"
                  >
                    {t('Address')}
                    
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-address"
                    value="814 Howard Street, 120065, India"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </BlankCard>
     
      </Grid>
    </Grid>
  );
};

export default AccountTab;
