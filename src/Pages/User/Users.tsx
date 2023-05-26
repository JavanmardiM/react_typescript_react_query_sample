import { Box } from "@mui/material";
import { Fragment, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import DataTable from "../../Components/Data/DataTable";
import ResponsiveDialog from "../../Components/General/ResponsiveDialog";
import { User } from "../../Models/user";
import userAxios from "../../Services/index";

const Users: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [userID, setUserId] = useState<number>(0);
  const queryClient = useQueryClient();
  const userListQuery = useQuery<User[], Error>(
    "userList",
    async () => {
      const res = await userAxios.getUserList();
      return res.data.data;
    },
    { staleTime: 60000 }
  );

  const { mutate } = useMutation((id: number) => userAxios.deleteUserById(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("userList");
    },
  });

  const onUserDeleteHandler = (userId: number) => {
    setOpen(true);
    setUserId(userId);
  };
  const onAcceptHandler = (userId: number) => {
    mutate(userId);
    setOpen(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      {userListQuery.isLoading ? <div> Loading... </div> : null}
      <Box p={3}>
        <DataTable
          users={userListQuery.data}
          onDeleteUser={onUserDeleteHandler}
        />
      </Box>
      <ResponsiveDialog
        isOpen={open}
        userId={userID}
        handleAccept={onAcceptHandler}
        handleClose={onCloseHandler}
      ></ResponsiveDialog>
    </Fragment>
  );
};
export default Users;
