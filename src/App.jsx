import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/frontend/HomeLayout";
import Login from "./components/frontend/Login";
import Register from "./components/frontend/Register";
import MasterLayout from "./layouts/admin/MasterLayout";
import MainLayout from "./layouts/admin/MainLayout";
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import RoomDetails from "./components/admin/RoomDetails";
import MessDetails from "./components/admin/MessDetails";
import ManageStudents from "./components/admin/ManageStudents";
import ManageRooms from "./components/admin/ManageRooms";
import ComplaintBox from "./components/admin/ComplaintBox";
import "./App.css";
import { useEffect, useState } from "react";
import StudentDashboard from "./components/student/StudentDashboard";
import StudentProfile from "./components/student/StudentProfile";
import BookHostel from "./components/student/BookHostel";
import HostelDetails from "./components/student/HostelDetails";
import MessBill from "./components/student/MessBill";
import AntiRagging from "./components/student/AntiRagging";
import Complaint from "./components/student/Complaint";

// const role = localStorage.getItem("role");
// console.log(role);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: role === null ? <HomeLayout /> : <MasterLayout />,
//     children: [
//       { path: "/", element: role == null && <Login /> },
//       { path: "/register", element: role == null && <Register /> },
//       {
//         path: "/",
//         element: role && <MainLayout />,
//         children: [
//           {
//             path: "/dashboard",
//             element: role == "admin" ? <Dashboard /> : <StudentDashboard />,
//           },
//           {
//             path: "/profile",
//             element: role == "admin" ? <Profile /> : <StudentProfile />,
//           },
//           {
//             path: "/book-hostel",
//             element: role == "student" && <BookHostel />,
//           },
//           {
//             path: "/room-details",
//             element: role == "admin" ? <RoomDetails /> : <HostelDetails />,
//           },
//           {
//             path: "/manage-rooms",
//             element: role == "admin" && <ManageRooms />,
//           },
//           {
//             path: "/mess-details",
//             element: role == "admin" && <MessDetails />,
//           },
//           {
//             path: "/manage-students",
//             element: role == "admin" && <ManageStudents />,
//           },
//           {
//             path: "/mess-bill",
//             element: role == "student" && <MessBill />,
//           },
//           {
//             path: "/anti-ragging",
//             element: role == "student" && <AntiRagging />,
//           },
//           {
//             path: "/complaint-box",
//             element: role == "admin" ? <ComplaintBox /> : <Complaint />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

function App() {
  const [role, setRole] = useState(localStorage.getItem("role"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: role === null ? <HomeLayout /> : <MasterLayout />,
      children: [
        { path: "/", element: role == null && <Login /> },
        { path: "/register", element: role == null && <Register /> },
        {
          path: "/",
          element: role && <MainLayout />,
          children: [
            {
              path: "/dashboard",
              element: role == "admin" ? <Dashboard /> : <StudentDashboard />,
            },
            {
              path: "/profile",
              element: role == "admin" ? <Profile /> : <StudentProfile />,
            },
            {
              path: "/book-hostel",
              element: role == "student" && <BookHostel />,
            },
            {
              path: "/room-details",
              element: role == "admin" ? <RoomDetails /> : <HostelDetails />,
            },
            {
              path: "/manage-rooms",
              element: role == "admin" && <ManageRooms />,
            },
            {
              path: "/mess-details",
              element: role == "admin" && <MessDetails />,
            },
            {
              path: "/manage-students",
              element: role == "admin" && <ManageStudents />,
            },
            {
              path: "/mess-bill",
              element: role == "student" && <MessBill />,
            },
            {
              path: "/anti-ragging",
              element: role == "student" && <AntiRagging />,
            },
            {
              path: "/complaint-box",
              element: role == "admin" ? <ComplaintBox /> : <Complaint />,
            },
          ],
        },
      ],
    },
  ]);

  useEffect(() => {
    window.onstorage = (event) => {
      if (event.key === null && event.value === null) {
        // Local storage has been cleared
        console.log('Local storage cleared');
      }else{
        setRole(localStorage.getItem("role"));
        console.log(role);
      }
    };
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
