import { Container, Title, Text, Stack } from "@mantine/core";
import MainLayout from "../layouts/mainLayout";

export default function About() {
  return (
    <MainLayout>
      <Container py="xl">
        <Title order={2}>About Splitly</Title>
        <Stack mt="md" spacing="md">
          <Text>
            Splitly is a free, open-source web application designed to make
            group expense splitting simple and fair. Whether you're planning a
            trip with friends, sharing rent with roommates, or organizing a
            group event, Splitly helps you track who paid what and how much
            everyone owes — in just a few clicks.
          </Text>

          <Text>
            The idea came from real-life frustration: messy spreadsheets,
            forgotten receipts, and confusing group payments. Splitly solves
            that by allowing users to form groups, add shared expenses, assign
            who participated, and automatically calculate the fair splits. It
            supports custom rules like skipping a member for certain expenses
            too.
          </Text>

          <Text>
            This app was created as a personal side project and is now available
            for public use. No login or payment is required. It’s built using
            modern web technologies to ensure speed, clarity, and ease of use.
          </Text>

          <Text>
            If you'd like to contribute or check out the source code, visit the
            project’s GitHub repository (add your link here). Feedback and ideas
            are always welcome!
          </Text>
        </Stack>
      </Container>
    </MainLayout>
  );
}
