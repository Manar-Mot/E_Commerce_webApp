import React from "react";
import Navbar from "../components/HomePage/Navbar";
import Header from "../components/HomePage/header";
import TopBar from "../components/HomePage/topBar";
import CategoriesSection from "../components/HomePage/categoriesSection";
import UniqueProducts from "../components/HomePage/UniqueProducts";
const HomePage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <CategoriesSection />

      <Header />
      <UniqueProducts />
    </>
  );
};

export default HomePage;
