import { Box, Button, Grid } from "@mui/material";
import { Fragment } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Components/General/Loading";
import MediaCard from "../../Components/General/MediaCard";
import { User } from "../../Models/user";
import userAxios from "../../Services";

const UserDetail: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  const userId = params.id!;
  const userQuery = useQuery<User, Error>(
    ["user", params.id],
    async () => {
      const res = await userAxios.getUserById(userId);
      return res.data.data;
    },
    { cacheTime: 30000 }
  );

  return (
    <Fragment>
      {userQuery.isLoading && <Loading />}
      {userQuery.data && (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={3}>
            <Box pt={4}>
              <MediaCard user={userQuery.data} />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box pt={2}>
              <Button
                variant="outlined"
                onClick={() => {
                  navigate(-1);
                }}
              >
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      )}
    </Fragment>
  );
};
export default UserDetail;
