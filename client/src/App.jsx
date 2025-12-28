import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

import { Contact } from "./pages/Contact";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Error } from "./pages/Error";
import { SignOut } from "./pages/SignOut";
import { Layout } from "./components/layout/Layout";
import { TicketPage } from "./pages/TicketPage";
import { PassengerDetails } from "./pages/PassengerDetails";
import { PaymentPage } from "./pages/PaymentPage";
import { BookSuccess } from "./pages/BookSuccess";
import { About } from "./pages/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/Ticket" element={<TicketPage />} />
          <Route path="/passenger" element={<PassengerDetails />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<BookSuccess />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
