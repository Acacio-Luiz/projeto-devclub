import Header from "../components/Header";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentList from "../components/AppointmentList";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />

      <AppointmentForm />

      <AppointmentList />

      <Footer />
    </>
  );
}

export default Home;