import { useEffect, useState } from "react";
import { Card, Text, Button } from "@mantine/core";
import { getUserGroups } from "../data/api";

export default function YourGroups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getUserGroups().then(setGroups);
  }, []);

  return (
    <Card withBorder>
      <Text fw={600}>Your Groups</Text>
      {groups.map((group) => (
        <Text key={group.id} mt="xs">
          {group.name}
        </Text>
      ))}
      <Button fullWidth mt="sm">
        View All Groups
      </Button>
    </Card>
  );
}
