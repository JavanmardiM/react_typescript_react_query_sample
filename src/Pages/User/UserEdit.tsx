import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { Fragment, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../../Models/user";
import userAxios from "../../Services/index";

const CustomizedCard = styled(Card)`
  color: #20b2aa;
`;
const defaultValues = {
  name: "",
  job: "",
};
const UserEdit: React.FC = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = () => {};

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const userId = params.id || "";
  const userQuery = useQuery<User, Error>("user", async () => {
    const res = await userAxios.getUserById(userId);
    return res.data.data;
  });
  console.log(
    "🚀 ~ file: UserEdit.tsx ~ line 45 ~ userQuery ~ userQuery",
    userQuery
  );

  return (
    <Fragment>
      <Box p={3}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={12} md={10} xl={10} lg={10}>
            <form onSubmit={handleSubmit}>
              <CustomizedCard>
                <CardHeader title="Edit User"></CardHeader>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        fullWidth
                        autoComplete="name"
                        variant="standard"
                        value={formValues.name}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="job"
                        name="job"
                        label="Job"
                        fullWidth
                        autoComplete="job"
                        variant="standard"
                        value={formValues.job}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="flex-end">
                    <Box pt={6}>
                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          Submit
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            navigate(-1);
                          }}
                        >
                          Back
                        </Button>
                      </Stack>
                    </Box>
                  </Grid>
                </CardContent>
              </CustomizedCard>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};
export default UserEdit;
