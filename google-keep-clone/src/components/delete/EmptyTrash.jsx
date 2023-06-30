import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { Typography, Box, styled } from "@mui/material";

const EmptyTrashIcon = styled(DeleteOutlineRoundedIcon)`
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
const EmptyTrash = () => {
  return (
    <Container>
      <EmptyTrashIcon />
      <Text>
        <strong>Trash is Empty</strong>
      </Text>
    </Container>
  );
};

export default EmptyTrash;
