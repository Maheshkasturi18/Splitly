import { useEffect, useState } from "react";
import { Card, Text, Button } from "@mantine/core";
import { getRecentExpenses } from "../data/api";

export default function RecentExpenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getRecentExpenses().then(setExpenses);
  }, []);

  return (
    <Card withBorder>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Text fw={600}>Recent Expenses</Text>
        <Button size="xs">Add Expense</Button>
      </div>
      {expenses.map((exp) => (
        <Text key={exp.id} mt="xs">{exp.title} - ${exp.amount}</Text>
      ))}
    </Card>
  );
}
