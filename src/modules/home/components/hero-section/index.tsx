import { useReleases } from '@/shared/hooks/useReleases';
import { Box, CircularProgress } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./styles.scss";
import Image from 'next/image';


const HeroSection = () => {
  const { releases, error, isDataFetching } = useReleases();

  return (
    <div className="hero-section-wrapper">
      {isDataFetching ? (
        <CircularProgress />
      ) : releases && releases.length > 0 ? (
        <Carousel autoPlay>
          {releases.map((release) => (
            <Box component="div" key={release.id} className="carousel-item">
              <Image alt={release.title} src={release.poster_url} fill/>
              <p className="legend">Legend 1</p>
            </Box>
          ))}
        </Carousel>
      ) : (
        <p>No releases found.</p>
      )}
    </div>
  );
};

export default HeroSection;
