import { Container, Title, Text, Stack, List } from "@mantine/core";
import MainLayout from "../layouts/mainLayout";

export default function Terms() {
  return (
    <MainLayout>
      <Container py="xl">
        <Title order={2}>Terms & Conditions</Title>
        <Stack mt="md" spacing="md">
          <Text>
            By using Splitly, you agree to the following terms. These terms are
            meant to keep usage fair and protect the project creator from
            unintended liabilities.
          </Text>

          <Title order={4}>Usage</Title>
          <List spacing="xs">
            <List.Item>
              Splitly is a free tool for personal and non-commercial use.
            </List.Item>
            <List.Item>
              Anyone is allowed to use the app for managing and splitting shared
              expenses.
            </List.Item>
            <List.Item>
              You agree not to misuse or abuse the platform for illegal or
              malicious purposes.
            </List.Item>
          </List>

          <Title order={4}>Disclaimer</Title>
          <Text>
            Splitly is provided "as is" without any guarantees. While I try to
            ensure the app works correctly, I make no warranties about data
            accuracy, availability, or performance.
          </Text>
          <Text>
            You use this tool at your own risk. I will not be held responsible
            for any loss, data issues, or conflicts that arise from the use of
            this app.
          </Text>

          <Title order={4}>Changes to the Terms</Title>
          <Text>
            These terms may be updated at any time. It is your responsibility to
            review them periodically. Continued use of the app constitutes
            acceptance of any changes.
          </Text>
        </Stack>
      </Container>
    </MainLayout>
  );
}
