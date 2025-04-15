import { Box, CircularProgress } from '@mui/material'
import "./styles.scss"
import { useTrending } from '@/shared/hooks/useTrending';
const HeroSection = () => {

  const { trending, error, isDataFetching } = useTrending();
  return (
    <Box className="hero-section-wrapper" sx={{ backgroundImage: "url(/images/hero-section.jpg)" }}>
      {
        isDataFetching ? <CircularProgress /> : trending.length > 0 ? <>
        {trending.map((trending)=>{
          return<>{trending.title}</>
        })}
        </> : <></>
      }
    </Box>
  )
}

export default HeroSection
