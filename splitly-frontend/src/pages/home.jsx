import { IconLock } from "@tabler/icons-react";
import { FaUserGroup } from "react-icons/fa6";
import { IoCalculator } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";

import {
  Button,
  Container,
  Group,
  Image,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import image from "../assets/hero-img.jpg";
import MainLayout from "../layouts/mainLayout";
import "../styles/pages/home.css";
import { Link } from "react-router-dom";

export const MOCKDATA = [
  {
    icon: IoCalculator,
    title: "Smart Calculations",
    description:
      "Automatically calculate who owes what with smart expense splitting",
  },
  {
    icon: FaUserGroup,
    title: "Group Management",
    description: "Create groups for trips, roommates, or any shared expenses",
  },
  {
    icon: CiChat1,
    title: "Group Chat",
    description: "Discuss expenses and plans with built-in group chat",
  },
  {
    icon: IconLock,
    title: "Secure & Private",
    description: "Your financial data is encrypted and secure",
  },
];

function Feature({ icon: Icon, title, description }) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40} c="violet.9">
        <Icon size={38} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7} fw={500} size="xl">
        {title}
      </Text>
      <Text lh={1.6}>{description}</Text>
    </div>
  );
}

export default function Home() {
  const features = MOCKDATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <MainLayout>
      <Container size="xl" className="p-0">
        <div className="hero-inner">
          <div className="hero-content">
            <Title className="hero-title">Split Expenses with Friends,</Title>
            <Title className="hero-title" c="violet.9">
              Hassle-Free
            </Title>
            <Text mt="md">
              Striply makes it easy to share expenses with friends and family.
              Track group expenses, split bills, and settle up without the math.
            </Text>

            <Group mt={30}>
              <Link to="/login">
                <Button
                  radius="xl"
                  size="md"
                  bg="violet.5"
                  className="hero-control"
                >
                  Get started - It's Free
                </Button>
              </Link>
            </Group>
          </div>
          <Image src={image} className="hero-image" />
        </div>
      </Container>

      {/* feature section */}

      <Container className="wrapper p-0" size="xl">
        <Title className="title">Features</Title>

        <SimpleGrid
          mt={60}
          cols={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: "xl", md: 100 }}
          verticalSpacing={{ base: "xl", md: 100 }}
          className="text-center"
        >
          {features}
        </SimpleGrid>
      </Container>
    </MainLayout>
  );
}
