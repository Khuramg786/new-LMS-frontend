
import Navbar from "../component/Navbar/Navbar";
import Footer from "../pages/Footer/ProfessionalFooter";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "70px" }}>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;