import Header from "../components/header";
// import { Footer } from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>{children}</main>
    </>
  );
}
