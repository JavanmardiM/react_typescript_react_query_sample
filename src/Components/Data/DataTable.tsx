import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { User } from "../../Models/user";
import { Box } from "@mui/system";
import { Avatar, Grid, IconButton, Stack, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

interface DataTypeProps {
  users: User[] | undefined;
  onDeleteUser: (userId: number) => void;
}

export default function DataTable(props: DataTypeProps) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Grid container justifyContent="flex-start">
        <Box p={3}>
          <Typography variant="h6">Users List</Typography>
        </Box>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width="10%">avatar</TableCell>
              <TableCell width="10%" align="right">
                first_name
              </TableCell>
              <TableCell width="10%" align="right">
                last_name
              </TableCell>
              <TableCell width="30%" align="right">
                email
              </TableCell>
              <TableCell width="30%" align="right">
                actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props?.users &&
              props?.users.length > 0 &&
              props.users.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell width="10%" component="th" scope="row">
                    <Avatar alt="Remy Sharp" src={row.avatar} />
                  </TableCell>
                  <TableCell width="10%" align="right">
                    {row.first_name}
                  </TableCell>
                  <TableCell width="10%" align="right">
                    {row.last_name}
                  </TableCell>
                  <TableCell width="30%" align="right">
                    {row.email}
                  </TableCell>
                  <TableCell width="30%" align="right">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Stack direction="row" spacing={1}>
                        <IconButton
                          size="large"
                          edge="start"
                          color="success"
                          aria-label="edit"
                          onClick={() => {
                            navigate(`/main/user-detail/${row.id}`);
                          }}
                        >
                          <InfoIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          edge="start"
                          color="error"
                          aria-label="delete"
                          onClick={() => {
                            props.onDeleteUser(row.id);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
