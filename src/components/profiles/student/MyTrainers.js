import React from 'react';
import Table from '../../BasicTable';

// users model
// const users = [
//   {
//     id: number,
//     name: string,
//   },
// ];
// src/App.jsx

import { useEffect, useState } from "react";

const MyTrainers = () => {
  const url = 'https://api.github.com/users';
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
      getUsers();
  }, []);

  return (
    <Table />
  );
}

export default MyTrainers;