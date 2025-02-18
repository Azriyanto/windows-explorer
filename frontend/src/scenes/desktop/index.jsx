import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import FolderIcon from '@mui/icons-material/Folder';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Desktop" subtitle="Welcome to your desktop" />
      </Box>

      <Link to="/gallery" className="button is-info m-5"><FolderIcon/>Gallery</Link>
      <Link to="/gallery" className="button is-info m-5"><FolderIcon/>Dowenload</Link>
      <Link to="/gallery" className="button is-info m-5"><FolderIcon/>Documents</Link>
      <Link to="/gallery" className="button is-info m-5"><FolderIcon/>Pictures</Link>
      <Link to="/gallery" className="button is-info m-5"><FolderIcon/>Musik</Link>
      <Link to="/gallery" className="button is-info m-5"><FolderIcon/>Video</Link>

    </Box>
  );
};

export default Dashboard;
