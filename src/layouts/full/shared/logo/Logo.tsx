import { FC } from 'react';
import { useSelector } from 'src/store/Store';
import { Link } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoDark } from 'src/assets/images/logos/dark-logo.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoDarkRTL } from 'src/assets/images/logos/dark-rtl-logo.svg';
import AccLogo from 'src/assets/images/logos/Acc_logo.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoLight } from 'src/assets/images/logos/light-logo.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoLightRTL } from 'src/assets/images/logos/light-logo-rtl.svg';
import { CardMedia, styled } from '@mui/material';
import { AppState } from 'src/store/Store';

const Logo: FC = () => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    paddingTop: '20px',
    overflow: 'hidden',
    display: 'block',
  }));

  if (customizer.activeDir === 'ltr') {
    return (
      <LinkStyled
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {customizer.activeMode === 'dark' ? (
          <CardMedia component="img" height="60" width={'150'} image={AccLogo} alt="green iguana" />
        ) : (
          <CardMedia component="img" height="60" width={'150'} image={AccLogo} alt="green iguana" />
        )}
      </LinkStyled>
    );
  }

  return (
    <LinkStyled
      to="/"
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {customizer.activeMode === 'dark' ? (
        <CardMedia component="img" height="60" width={'150'} image={AccLogo} alt="green iguana" />
      ) : (
        <CardMedia component="img" height="60" width={'150'} image={AccLogo} alt="green iguana" />
      )}
    </LinkStyled>
  );
};

export default Logo;
