import ArchiveRoundedIcon from "@mui/icons-material/ArchiveRounded";
import { Typography, Box, styled } from "@mui/material";

const ArchiveIcon = styled(ArchiveRoundedIcon)`
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
const EmptyArchives = () => {
  return (
    <Container>
      <ArchiveIcon />
      <Text>
        <strong>No Archived Notes to show</strong>
      </Text>
    </Container>
  );
};

export default EmptyArchives;
