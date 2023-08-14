import styled from "styled-components";
import Box from '@mui/material/Box';

export const Header = styled('header')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100px', // Default height
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px', // Default font size

  '@media (max-width: 600px)': {
    fontSize: '18px', // Adjusted font size for smaller screens
    height: '80px', // Adjusted height for smaller screens
  },
});


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
  padding: 8px; // Default padding
  
  @media (max-width: 600px) {
    padding: 4px; // Adjusted padding for smaller screens
  }
`;


export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width:100%;
`;

export const StyledBox = styled(Box)(() => ({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  color: 'black',
  '& > :not(:last-child)': {
    marginRight: '10px', // Default margin-right
  },
  '@media (max-width: 600px)': {
    '& > :not(:last-child)': {
      marginRight: '5px', // Adjusted margin-right for smaller screens
    },
  },
}));


export const PageHeader = styled.h1`
  font-size: 24px; // Default font size
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
  font-family: 'Exo', sans-serif;
  
  @media (max-width: 600px) {
    font-size: 20px; // Adjusted font size for smaller screens
  }
`;


export const PageDescription = styled.p`
  font-size: 16px; // Default font size
  color: black;
  margin-bottom: 20px;
  font-family: 'Exo', sans-serif;
  
  @media (max-width: 600px) {
    font-size: 14px; // Adjusted font size for smaller screens
  }
`;


export const selectedButtonStyles = {
  
  color:'#FF8F00',
  fontWeight: 'bold',
};

export const CenteredTitle = styled('h3')({
  margin: 'auto', // Center the title horizontally
});

export const StyledHeading3 = styled.h3`
  font-size: 28px; // Default font size
  @media (max-width: 600px) {
    font-size: 18px; // Adjusted font size for smaller screens
  }
`;

export const RoundedRectangle = styled.div`
  display: inline-block;
  background-color: #FF8F00;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 10px;
  @media (max-width: 600px) {
    padding: 3px 6px;
    margin:5px;
  }
`;

export const TagsText = styled.p`
  margin: 0;
  display: inline-block;
  color: white;
  font-size: 16px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

