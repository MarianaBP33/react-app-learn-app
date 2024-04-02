import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
  fetch(`https://api.github.com/users?since=${page}&per_page=${rowsPerPage}`)
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [page, rowsPerPage]);

  return (
    <div className='mr-5'>
    <h2 className="text-2xl font-bold mb-4 ">My Trainers</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="min-w-full divide-y divide-gray-200 mr-4">
        <TableHead>
          <TableRow>
            <TableCell  className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</TableCell>
            <TableCell  className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trainers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {users.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((user) => (
              <TableRow key={user.id}>
            <TableCell component="th" scope="row" className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user.id}
              </TableCell>
            <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{user.login}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </div>
  );
}