import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Books from "../pages/Books";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";

import Banar from "../pages/HomeContent/Banar";
import Maincatagory from "../pages/HomeContent/Maincatagory";
import UpcomingCourseDetailPage from "../pages/UpcomingCourseDetailPage";
import PromoBanner from "../pages/HomeContent/PromoBanner";
import Couresdetailpage from "../pages/Couresdetailpage";
import AnnouncementPage from "../pages/AnnouncementPage";
import TermsAndConditions from "../pages/TermsAndConditions";
import CategoryCourses from "../pages/CategoryCourses";
import BusinessBranding from "../pages/HomeContent/Businessbranding";

import BlogDetail from "../pages/BlogDetail"; 

import SEODetails from "../pages/SEODetails";
import ERPDetails from "../pages/ERPDetails"; // ⭐ صرف ایک بار صاف امپورٹ
import DigitalMarketingDetails from "../pages/DigitalMarketingDetails";
import WebDevelopmentDetails from "../pages/WebDevelopmentDetails";
import MobileAppDevelopmentDetails from "../pages/MobileAppDevelopmentDetails";
import AISolutionsDetails from "../pages/AISolutionsDetails";
import WhatsAppAutomationDetails from "../pages/WhatsAppAutomationDetails";
import SalesManager from "../pages/ERPModule/Sales Management";

function AppRoutes() {
  return (
    <Routes>
      {/* Layout Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/books" element={<Books />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic Blog Route */}
        <Route path="/blog/:slug" element={<BlogDetail />} /> 

        {/* Home page content */}
        <Route path="/banar" element={<Banar />} />
        <Route path="/maincatagory" element={<Maincatagory />} />
        <Route
          path="/upcoming-course/:id"
          element={<UpcomingCourseDetailPage />}
        />
        <Route path="/promobanner" element={<PromoBanner />} />
        <Route
          path="/course/:slug"
          element={<Couresdetailpage />}
        />
        <Route path="/AnnouncementPage" element={<AnnouncementPage />} />
        
        {/* ⭐ ERP Details Route Path (Perfect Mapping) */}
        <Route path="/ERPDetails" element={<ERPDetails />} />
        
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/BusinessBranding" element={<BusinessBranding />} />
        <Route path="/erp/SalesManager" element={<SalesManager />} />
        <Route
          path="/category/:category"
          element={<CategoryCourses />}
        />
        <Route path="/SEODetails" element={<SEODetails />} />
        <Route path="/DigitalMarketingDetails" element={<DigitalMarketingDetails />} />
        <Route path="/WebDevelopmentDetails" element={<WebDevelopmentDetails />} />
        <Route path="/MobileAppDevelopmentDetails" element={<MobileAppDevelopmentDetails />} />
        <Route path="/AISolutionsDetails" element={<AISolutionsDetails />} />
        <Route path="/WhatsAppAutomationDetails" element={<WhatsAppAutomationDetails />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;