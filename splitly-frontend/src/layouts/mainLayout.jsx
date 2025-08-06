import Header from "../components/header";
import Footer from "../components/footer";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <main style={{ padding: "1rem" }} className="grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
