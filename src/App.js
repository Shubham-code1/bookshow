import Navbar from "./frontEnd/components/navbar/navbar";
import BookingPage from "./frontEnd/components/bookingPage/bookingPage";
import './responsive.css';


function App() {

  return (
    <>
      <Navbar />
      <div className="main">
        <section className="movie"></section>
        <BookingPage />
      </div>
    </>
  );
}

export default App;











