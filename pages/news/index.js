import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import BlogGrid from "../../components/Blog/BlogGrid";

const Blog = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="News"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News"
        bgImage="/images/news-bg.jpg"
      />

      <BlogGrid />

      <Footer />
    </>
  );
};

export default Blog;
