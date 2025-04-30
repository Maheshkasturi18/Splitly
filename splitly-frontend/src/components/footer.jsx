import React from "react";
import { Container, Group, Text, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";
import "../styles/components/footer.css"; // Adjust the path as necessary

export default function Footer() {
  return (
    <footer className="footer">
      <Container py="md" size="xl">
        <div className="footer-inner">
          <Text size="sm" c="dimmed">
            © {new Date().getFullYear()} <a href="/" className="footer-logo"> Splitly</a>. All rights reserved.
          </Text>

          <Group spacing="sm">
            <Anchor component={Link} to="/about" size="sm" c="violet.9">
              About
            </Anchor>
            <Anchor component={Link} to="/privacy" size="sm" c="violet.9">
              Privacy
            </Anchor>
            <Anchor component={Link} to="/terms" size="sm" c="violet.9">
              Terms
            </Anchor>
          </Group>
        </div>
      </Container>
    </footer>
  );
}
