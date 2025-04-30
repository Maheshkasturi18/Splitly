import React from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Burger, Center, Container, Group, Menu, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom"; // 👈 Import Link
import "../styles/components/header.css";

const links = [
  { link: "/login", label: "Login/Signup" },
  // Add more if needed
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <Link to={link.link} className="link">
              <Center>
                <span className="linkLabel">{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} to={link.link} className="link">
        {link.label}
      </Link>
    );
  });

  return (
    <header className="header">
      <Container size="xl">
        <div className="inner">
          <Title c="violet.9">
            {" "}
            <a href="/" className="header-logo">Splitly</a>
          </Title>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
