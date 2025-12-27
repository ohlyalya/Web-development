import { Link, NavLink, Outlet } from "react-router-dom";
import { Box, Button } from "@mui/material";

const Layout = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <nav>
        <Button component={Link} to="/">
          Главная
        </Button>

        <Button component={NavLink} to="/activated">
          Активация
        </Button>
      </nav>

      <Box sx={{ marginTop: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;