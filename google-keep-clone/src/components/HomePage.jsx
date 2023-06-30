import SideDrawer from "./SideDrawer";
import Notes from "./notes/Notes";
import DeleteNotes from "./delete/DeleteNotes";
import Archives from "./archives/Archives";
import Labels from "./labels/Labels";
import Reminders from "./reminders/Reminders";

import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Router>
        <SideDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/delete" element={<DeleteNotes />} />
          <Route path="/labels" element={<Labels />} />
          <Route path="/reminders" element={<Reminders />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default HomePage;
