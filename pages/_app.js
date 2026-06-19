import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/icofont.min.css";
import "../styles/meanmenu.css";
import "react-tabs/style/react-tabs.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "../styles/style.css";
import "../styles/responsive.css";
// Global RTL Style
import "../styles/rtl.css";

import Layout from "../components/_App/Layout";
import Affiliations from "../components/Popup";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      {/* <Affiliations /> */}
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
