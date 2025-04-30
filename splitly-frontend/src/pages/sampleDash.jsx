// Dashboard.jsx
import {
  Card,
  Text,
  Button,
  Group,
  Loader,
  Grid,
  Stack,
  Box,
  Title,
  ScrollArea,
  NavLink,
  Avatar,
  Divider,
} from "@mantine/core";
import {
  IconHome,
  IconUsers,
  IconListCheck,
  IconMessage,
  IconPlus,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";


const mockGroups = ["Trip to Mountains", "Weekend Project"];

const SampleDashboard = () => {
  return (
      <Grid gutter={0}>
        {/* Sidebar */}
        <Grid.Col
          span={2}
          style={{
            backgroundColor: "#f8f9fa",
            minHeight: "100vh",
            borderRight: "1px solid #e0e0e0",
          }}
        >
          <Stack justify="space-between" style={{ height: "100%" }}>
            <Box>
              <Title order={3} px="md" pt="md" color="dark">
                CS
              </Title>
              <Title order={4} px="md" pb="lg">
                CollabSpace
              </Title>
              <NavLink label="Dashboard" icon={<IconHome size={18} />} active />
              <NavLink label="Groups" icon={<IconUsers size={18} />} />
              <NavLink label="Expenses" icon={<IconListCheck size={18} />} />
              <NavLink label="Chat" icon={<IconMessage size={18} />} />
              <Divider my="sm" label="Groups" labelPosition="left" />
              <ScrollArea h={120} px="sm">
                {mockGroups.map((g, i) => (
                  <NavLink key={i} label={g} />
                ))}
              </ScrollArea>
            </Box>

            <Box px="md" pb="md">
              <NavLink label="Settings" icon={<IconSettings size={18} />} />
              <NavLink label="Logout" icon={<IconLogout size={18} />} />
              <Divider my="sm" />
              <Group>
                <Avatar radius="xl">U</Avatar>
                <Box>
                  <Text size="sm" fw={500}>
                    User Name
                  </Text>
                  <Text size="xs" c="dimmed">
                    user@example.com
                  </Text>
                </Box>
              </Group>
            </Box>
          </Stack>
        </Grid.Col>

        {/* Main Content */}
        <Grid.Col span={10} p="lg">
          <Grid gutter="lg">
            <Grid.Col span={3}>
              <Card shadow="sm" radius="md" withBorder>
                <Text>Total You Are Owed</Text>
                <Text>$ ---</Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={3}>
              <Card shadow="sm" radius="md" withBorder>
                <Text>Total You Owe</Text>
                <Text>$ ---</Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={3}>
              <Card shadow="sm" radius="md" withBorder>
                <Text>Active Groups</Text>
                <Text>---</Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={3}>
              <Card shadow="sm" radius="md" withBorder>
                <Text>Recent Expenses Count</Text>
                <Text size="xs">Latest 0 shown below</Text>
              </Card>
            </Grid.Col>

            <Grid.Col span={6}>
              <Card withBorder radius="md" shadow="xs">
                <Group position="apart" mb="sm">
                  <div>
                    <Text fw={600}>Recent Expenses</Text>
                    <Text size="sm" c="dimmed">
                      Overview of the latest expenses added across your groups.
                    </Text>
                  </div>
                  <Button variant="light" rightIcon={<IconPlus size={16} />}>
                    Add Expense
                  </Button>
                </Group>
                <Stack spacing="sm">
                  <Box h={20} bg="#f1f1f1" radius="sm" />
                  <Box h={20} bg="#f1f1f1" radius="sm" />
                  <Box h={20} bg="#f1f1f1" radius="sm" />
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={6}>
              <Card withBorder radius="md" shadow="xs">
                <Text fw={600}>Your Groups</Text>
                <Text size="sm" c="dimmed" mb="sm">
                  Quick access to your most recently active groups.
                </Text>
                <Stack spacing="sm">
                  <Box h={20} bg="#f1f1f1" radius="sm" />
                  <Box h={20} bg="#f1f1f1" radius="sm" />
                  <Box h={20} bg="#f1f1f1" radius="sm" />
                </Stack>
                <Button fullWidth mt="md" variant="light">
                  View All Groups
                </Button>
              </Card>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
  );
};

export default SampleDashboard;
