import { useEffect, useState } from "react";
import { Card, Grid, Text } from "@mantine/core";
import { getSummary } from "../data/api";

export default function SummaryCards() {
  const [summary, setSummary] = useState({
    totalOwed: 0,
    totalOwe: 0,
    activeGroups: 0,
    recentExpensesCount: 0,
  });

  useEffect(() => {
    getSummary().then(setSummary);
  }, []);

  const data = [
    { label: "Total You Are Owed", value: summary.totalOwed },
    { label: "Total You Owe", value: summary.totalOwe },
    { label: "Active Groups", value: summary.activeGroups },
    { label: "Recent Expenses Count", value: summary.recentExpensesCount },
  ];

  return (
    <Grid>
      {data.map((item, i) => (
        <Grid.Col span={3} key={i}>
          <Card withBorder>
            <Text size="sm" color="dimmed">{item.label}</Text>
            <Text fw={600} size="xl">${item.value}</Text>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}
