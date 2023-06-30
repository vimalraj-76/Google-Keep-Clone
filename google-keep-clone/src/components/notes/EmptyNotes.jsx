import { LightbulbOutlined as Lightbulb } from "@mui/icons-material";
import { Typography, Box, styled } from "@mui/material";

const Light = styled(Lightbulb)`
  font-size: 150px;
  opacity: 0.2;
`;
const Text = styled(Typography)`
  opacity: 0.3;
  font-size: 25px;
`;
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;
const EmptyNotes = () => {
  return (
    <Container>
      <Light />
      <Text>
        <strong>Notes you add appear here</strong>
      </Text>
    </Container>
  );
};

export default EmptyNotes;
