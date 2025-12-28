/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

import flightJSON from "../data/flight.json"; // flight json data

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  // flight search functionality
  const [flight, setFlight] = useState([]);
  const [filteredFlight, setFilteredFlight] = useState([]);
  const [flightData, setFlightData] = useState({
    LocalDate: "",
    ReturnDate: "",
    flightType: "",
  });

  //search flight available all complete data
  const [completeFlightData, setCompleteFlightData] = useState([]);

  const storeTokenLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!Token;

  const SignOutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const useAuthentication = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchFlightData = async (searchData) => {
    try {
      const flights = flight.filter(
        (curFlights) =>
          curFlights.fromCity
            .toLowerCase()
            .includes(searchData.fromCity.toLowerCase()) &&
          curFlights.toCity
            .toLowerCase()
            .includes(searchData.toCity.toLowerCase())
      );

      setFilteredFlight(flights);

      const LocalDate = new Date(searchData.date).toLocaleDateString();
      const ReturnDate = searchData.returnDate
        ? new Date(searchData.returnDate).toLocaleDateString()
        : "";

      const flightType = searchData.flightType;

      setFlightData({
        LocalDate: LocalDate,
        ReturnDate: ReturnDate,
        flightType: flightType,
      });
    } catch (error) {
      console.log("search:", error);
    }
  };

  const AllFlightData = (selectedFlight) => {
    try {
      setCompleteFlightData(selectedFlight);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    useAuthentication();
    setFlight(flightJSON);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenLS,
        SignOutUser,
        user,
        searchFlightData,
        filteredFlight,
        flightData,
        AllFlightData,
        completeFlightData,
      }}>
      {children}s
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
