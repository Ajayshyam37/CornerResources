import styled from "styled-components";
import Box from '@mui/material/Box';

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  position: absolute;
  font-family: 'Exo', sans-serif;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8px;
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledBox = styled(Box)({
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end', // Align items to the right
    alignItems: 'center', // Align items vertically in the center
    color: 'black',
    '& > :not(:last-child)': {
      marginRight: '10px', // Add margin to all but the last child
    },
  });

export const StyledBoxVideo = styled(Box)(({
    minHeight: '100%', // You can adjust this value as needed
    backgroundColor: '#f2f2f2', // Example background color
  }));

  export const PageHeader = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
  font-family: 'Exo', sans-serif;
`;

export const PageDescription = styled.p`
  font-size: 16px;
  color: black;
  margin-bottom: 20px;
  font-family: 'Exo', sans-serif;
`;