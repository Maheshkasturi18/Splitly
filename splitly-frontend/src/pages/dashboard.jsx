import { Grid } from "@mantine/core";
import Sidebar from "../components/sidebar";
import SummaryCards from "../components/summaryCard";
import RecentExpenses from "../components/recentExpenses";
import YourGroups from "../components/yourGroups";

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <SummaryCards />
        <Grid mt="md">
          <Grid.Col span={6}>
            <RecentExpenses />
          </Grid.Col>
          <Grid.Col span={6}>
            <YourGroups />
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
}
