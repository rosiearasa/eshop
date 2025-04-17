import React from "react";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header } from "./components/header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer/>
    </>
  );
};
