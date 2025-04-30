import { useEffect, useState } from "react";
import { Box, NavLink, Text } from "@mantine/core";
import { getGroups, getUser } from "../data/api";

export default function Sidebar() {
  const [groups, setGroups] = useState([]);
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    getGroups().then(setGroups);
    getUser().then(setUser);
  }, []);

  return (
    <Box w={240} p="md" style={{ borderRight: "1px solid #ddd", height: "100vh" }}>
      <Text fw={700} size="lg" mb="md">CollabSpace</Text>
      <NavLink label="Dashboard" />
      <NavLink label="Groups" />
      <NavLink label="Expenses" />
      <NavLink label="Chat" />
      <Text mt="md" size="sm" fw={500}>Groups</Text>
      {groups.map((g) => (
        <NavLink key={g.id} label={g.name} />
      ))}
      <Box mt="auto">
        <NavLink label="Settings" />
        <NavLink label="Logout" />
        <Text size="xs" mt="sm">{user.name}<br />{user.email}</Text>
      </Box>
    </Box>
  );
}
