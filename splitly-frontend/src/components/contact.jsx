import {
  Button,
  Container,
  Group,
  SimpleGrid,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef(); // Form ref for emailjs
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.trim().length < 2 && "Name must be at least 2 characters long",
      email: (value) =>
        !/^\S+@\S+$/.test(value) && "Please enter a valid email address",
      subject: (value) => value.trim().length === 0 && "Subject is required",
    },
  });

  const handleSubmit = async () => {
    try {
      const result = await emailjs.sendForm(
        "service_0l5skgs",
        "template_oybdrdt",
        formRef.current,
        "y6Xb9utVu8zhVIXO2" // Also known as USER_ID
      );
      console.log(result.text);
      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <Container size="sm">
      <form ref={formRef} onSubmit={form.onSubmit(handleSubmit)}>
        <Title
          order={2}
          size="h1"
          style={{ fontFamily: "Greycliff CF, var(--mantine-font-family)" }}
          fw={700}
          ta="center"
        >
          Get in touch
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            required
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            required
            {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          required
          {...form.getInputProps("subject")}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          required
          {...form.getInputProps("message")}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md" bg="violet.5">
            Send message
          </Button>
        </Group>
      </form>
    </Container>
  );
}
