import { IconCheck } from "@tabler/icons-react";
import {
  Button,
  Container,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import image from "../assets/hero-img.jpg";
import MainLayout from "../layouts/mainLayout";
import "../styles/pages/home.css";

export default function Home() {
  return (
    <MainLayout>
      <Container size="xl">
        <div className="hero-inner">
          <div className="hero-content">
            <Title className="hero-title">
              A <span className="hero-highlight">modern</span> React <br />{" "}
              components library
            </Title>
            <Text c="dimmed" mt="md">
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all
                components and hooks export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you
                can use Mantine in any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when
                user navigates with keyboard
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className="hero-control">
                Get started
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className="hero-control"
              >
                Source code
              </Button>
            </Group>
          </div>
          <Image src={image} className="hero-image" />
        </div>
      </Container>
    </MainLayout>
  );
}
