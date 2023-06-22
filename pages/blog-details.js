import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import BlogDetailsContent from "../components/Blog/BlogDetailsContent";

const BlogDetails = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImage="/images/poverty-alleviation/poverty-alleviation-bg.jpg"
      />

      <BlogDetailsContent />

      <Footer />
    </>
  );
};

export default BlogDetails;
