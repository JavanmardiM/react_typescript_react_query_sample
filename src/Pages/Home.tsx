import { Box, Button } from "@mui/material";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Box p={3}>home</Box>
      <Box p={3}>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/main/users");
          }}
        >
          Users List
        </Button>
      </Box>
    </Fragment>
  );
};
export default Home;
