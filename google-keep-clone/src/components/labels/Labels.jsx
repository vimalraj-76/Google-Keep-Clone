import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import { Typography, Box, styled } from "@mui/material";

const Write = styled(CreateRoundedIcon)`
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
  margin-top: 35vh;
  margin-left: auto;
  margin-right: auto;
`;
const Labels = () => {
  return (
    <Container>
      <Write />
      <Text>
        <strong>No labels to show</strong>
      </Text>
    </Container>
  );
};

export default Labels;
