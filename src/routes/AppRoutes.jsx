import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Books from "../pages/Books";

import Banar from "../pages/HomeContent/Banar";
import Maincatagory from "../pages/HomeContent/Maincatagory";
import Upcomingcourese from "../pages/HomeContent/Upcomingcourese";
import PromoBanner from "../pages/HomeContent/PromoBanner";

import Blogs from "../pages/Blogs";
import BlogDetail from "../pages/BlogDetail";
import Couresdetailpage from "../pages/Couresdetailpage";
import UpcomingCourseDetailPage from "../pages/UpcomingCourseDetailPage";
import AnnouncementPage from "../pages/AnnouncementPage";
import TermsAndConditions from "../pages/TermsAndConditions";
import CategoryCourses from "../pages/CategoryCourses";
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

        {/* Home page content */}
        <Route path="/banar" element={<Banar />} />
        <Route path="/maincatagory" element={<Maincatagory />} />
     <Route
  path="/upcoming-course/:id"
  element={<UpcomingCourseDetailPage />}
/>
        <Route path="/promobanner" element={<PromoBanner />} />
        <Route path="/course/:id" element={<Couresdetailpage />} />
        {/* <Route path="/UpcomingCourseDetailPage" element={<UpcomingCourseDetailPage />} /> */}
        <Route path="/AnnouncementPage" element={<AnnouncementPage />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
       <Route
  path="/category/:category"
  element={<CategoryCourses />}
/>

        {/* BLOG DETAIL */}
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Route>

      {/* Separate route */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;