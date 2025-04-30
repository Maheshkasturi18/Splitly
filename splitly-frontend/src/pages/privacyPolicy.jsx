import { Container, Title, Text, Stack, List } from "@mantine/core";
import MainLayout from "../layouts/mainLayout";

export default function Privacy() {
  return (
    <MainLayout>
      <Container py="xl">
        <Title order={2}>Privacy Policy</Title>
        <Stack mt="md" spacing="md">
          <Text>
            Splitly respects your privacy. This app is designed to minimize the
            collection of any personal data, and no registration or personal
            details like email, name, or phone number are required to use it.
          </Text>

          <Title order={4}>What We Collect</Title>
          <List spacing="xs">
            <List.Item>
              We do not collect any personal information by default.
            </List.Item>
            <List.Item>
              Temporary data (like group names and expenses) may be stored in
              your browser or in our database if using shared links or group
              saving features.
            </List.Item>
            <List.Item>
              If hosting analytics (like Google Analytics or Vercel Insights),
              anonymous data like page views and browser types may be collected
              for improving performance.
            </List.Item>
          </List>

          <Title order={4}>Third-Party Services</Title>
          <Text>
            If third-party services are used (e.g., hosting or analytics), they
            may have their own privacy policies. As of now, no external login,
            tracking scripts, or advertisements are embedded.
          </Text>

          <Title order={4}>Your Consent</Title>
          <Text>
            By using this site, you agree to this privacy policy. If you are
            concerned about your privacy, you can simply stop using the app or
            self-host your own version via GitHub.
          </Text>
        </Stack>
      </Container>
    </MainLayout>
  );
}
