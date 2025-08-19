import Header from "../components/header";
import Footer from "../components/footer";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
