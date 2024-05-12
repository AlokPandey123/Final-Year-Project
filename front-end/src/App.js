import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CourseList from "./Pages/Course/CourseList";
import NotFound from "./Pages/NotFound";
import HomePage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgetPassword from "./Pages/Password/ForgetPassword";
import ResetPassword from "./Pages/Password/ResetPassword";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import CourseDescription from "./Pages/Course/CourseDescription";
import Profile from "./Pages/User/Profile";
import ChangePassword from "./Pages/Password/ChangePassword";
import EditProfile from "./Pages/User/EditProfile";
import CreateCourse from "./Pages/Course/CreateCourse";
import RequireAuth from "./Components/Auth/RequireAuth";
import NotRequireAuth from "./Components/Auth/NotRequireAuth";
import Denied from "./Pages/Denied";
import ComplainDashboard from "./Pages/Complain/ComplainDashboard";
import AddLecture from "./Pages/Complain/AddLecture";
import DisplayLectures from "./Pages/Complain/DisplayLectures"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />

        <Route element={<NotRequireAuth />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["USER", "ADMIN"]} />}>
          <Route path="/course/description" element={<CourseDescription />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/course/displaylectures" element={<DisplayLectures />} />
          <Route path="/complain/dashboard" element={<ComplainDashboard />} />
          <Route path="/course/addlecture" element={<AddLecture />} />
          <Route path="/course/create" element={<CreateCourse />} />
          <Route path="/courses" element={<CourseList />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/editprofile" element={<EditProfile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
