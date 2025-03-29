import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { getUsers, updateUser, deleteUser } from '../services/api';
import { toast } from 'react-toastify';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      toast.error('Failed to fetch users');
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setOpen(true);
  };

  const handleUpdate = async () => {
    if (!editUser) return;
    try {
      await updateUser(editUser.id, {
        first_name: editUser.first_name,
        last_name: editUser.last_name,
      });
      setOpen(false);
      fetchUsers();
      toast.success('User updated successfully');
    } catch (error) {
      toast.error('Failed to update user');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
      toast.success('User deleted successfully');
    } catch (error) {
      toast.error('Failed to delete user');
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        User Management
      </Typography>
      <Grid container spacing={4}>
        {users.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                sx={{
                  height: 200,
                  objectFit: 'cover',
                }}
                image={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {user.first_name} {user.last_name}
                </Typography>
                <Typography>{user.email}</Typography>
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Button
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="First Name"
            fullWidth
            value={editUser?.first_name || ''}
            onChange={(e) => setEditUser(prev => prev ? {...prev, first_name: e.target.value} : null)}
          />
          <TextField
            margin="dense"
            label="Last Name"
            fullWidth
            value={editUser?.last_name || ''}
            onChange={(e) => setEditUser(prev => prev ? {...prev, last_name: e.target.value} : null)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleUpdate}>Save</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UserList;