// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';
import { Typography, ImageList, ImageListItem, Skeleton, Box } from '@mui/material';

import img1 from 'src/assets/images/products/s1.jpg';

import img4 from 'src/assets/images/products/s4.jpg';
import img5 from 'src/assets/images/products/s5.jpg';
import img6 from 'src/assets/images/products/s6.jpg';
import img7 from 'src/assets/images/products/s11.jpg';
import ChildCard from 'src/components/shared/ChildCard';
import { useTranslation } from 'react-i18next';

interface photoType {
  img: string;
  id: number;
}

const photos: photoType[] = [
  {
    img: img1,
    id: 1,
  },

  {
    img: img4,
    id: 4,
  },
  {
    img: img5,
    id: 5,
  },
  {
    img: img6,
    id: 6,
  },
  {
    img: img7,
    id: 7,
  },

];

const PhotosCard = () => {
  const { t } = useTranslation();

  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ChildCard>
      <Typography variant="h4">{t('Photos')}</Typography>
      <ImageList cols={3} gap={20}>
        {photos.map((photo) => (
          <Box key={photo.id}>
            {
              isLoading ? (
                <>
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height={93}
                    key={photo.id}
                  ></Skeleton>
                </>
              ) : (
                <ImageListItem key={photo.id}>
                  <img
                    srcSet={`${photo.img} 1x, ${photo.img} 2x`}
                    alt={photo.img}
                    loading="lazy"
                    style={{ borderRadius: 8 }}
                  />
                </ImageListItem>
              )}
          </Box>
        ))}
      </ImageList>
    </ChildCard >
  )
};

export default PhotosCard;
