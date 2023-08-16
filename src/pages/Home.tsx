import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { CenteredContainer, CenteredContent, Header } from '../components/pageStyles';

import styled from 'styled-components';

const StyledCard = styled(Card)`
  position: relative;
  height: 100%;
  display: flex;
  max-width: auto;
`;

const StyledCardActionArea = styled(CardActionArea)`
  flex-grow: 1;
`;

export function Home() {
  const navigateTo = useNavigate();

  const handleCardClick = (pageUrl: string) => {
    navigateTo(pageUrl);
  };

  return (
    <>
      <Header>
        Corner Resources
      </Header>
      <CenteredContainer>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <StyledCard>
              <StyledCardActionArea onClick={() => handleCardClick('/Tech/Welcome')}>
                <CardMedia
                  component="img"
                  height="100%"
                  width="auto"
                  image="https://images.unsplash.com/photo-1504904126298-3fde501c9b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Tech Team"
                  sx={{ filter: 'blur(1.5px)' }}
                />
                <CardContent sx={{ height: '100%' }}>
                  <CenteredContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Tech Team
                    </Typography>
                  </CenteredContent>
                </CardContent>
              </StyledCardActionArea>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledCard>
              <StyledCardActionArea onClick={() => handleCardClick('/Worship/Welcome')}>
                <CardMedia
                  component="img"
                  height="100%"
                  width="auto"
                  image="https://images.unsplash.com/photo-1583162061967-eacb13d913a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Worship Team"
                  sx={{ filter: 'blur(1.5px)' }}
                />
                <CardContent sx={{ height: '100%' }}>
                  <CenteredContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Worship Team
                    </Typography>
                  </CenteredContent>
                </CardContent>
              </StyledCardActionArea>
            </StyledCard>
          </Grid>
        </Grid>
      </CenteredContainer>
    </>
  );
}
