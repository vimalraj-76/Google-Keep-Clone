import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import { Typography, Box, styled } from "@mui/material";

const Bell = styled(NotificationsActiveRoundedIcon)`
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
const Reminders = () => {
  return (
    <Container>
      <Bell />
      <Text>
        <strong>Notes with upcoming reminders appear here</strong>
      </Text>
    </Container>
  );
};

export default Reminders;
