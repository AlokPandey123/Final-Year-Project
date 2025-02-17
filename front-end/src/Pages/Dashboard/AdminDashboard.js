import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { FaUsers } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, getAllCourses } from "../../Redux/courseSlice";
import { getStatsData } from "../../Redux/statSlice";
import { Link } from "react-router-dom";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allUsersCount, subscribedUsersCount } = useSelector(
    (state) => state.stat
  );
  const { allPayments, finalMonths, monthlySalesRecord } = useSelector(
    (state) => state.razorpay
  );

  const userData = {
    labels: ["Registered User", "Registered Admins"],
    datasets: [
      {
        label: "User Details",
        data: [allUsersCount, subscribedUsersCount+1],
        backgroundColor: ["yellow", "green"],
        borderColor: ["yellow", "green"],
        borderWidth: 1,
      },
    ],
  };

  const salesData = {
    labels: [
      "January",
      "Febraury",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    fontColor: "white",
    datasets: [
      {
        label: "Complain / Month",
        data: monthlySalesRecord,
        backgroundColor: ["rgb(255, 99, 132)"],
        borderColor: ["white"],
        borderWidth: 2,
      },
    ],
  };

  // getting the courses data from redux toolkit store
  const myCourses = useSelector((state) => state.course.coursesData);

  // function to handle the course delete
  const handleCourseDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete the Account?")) {
      const res = await dispatch(deleteCourse(id));

      // fetching the new updated data for the course
      if (res.payload.success) {
        await dispatch(getAllCourses());
      }
    }
  };

  useEffect(() => {
    (async () => {
      await dispatch(getAllCourses());
      await dispatch(getStatsData());
     
    })();
  }, []);

  return (
    <Layout>
      <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-white">
        <h1 className="text-center text-3xl font-semibold text-yellow-500">
          Admin Dashboard
        </h1>

        {/* creating the records card and chart for sales and user details */}
        <div className="grid grid-cols-2 gap-5 m-auto mx-10">
          {/* displaying the users chart and data */}
          <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
            {/* for displaying the pie chart */}
            <div className="w-80 h-80">
              <Pie data={userData} />
            </div>

            {/* card for user data */}
            <div className="grid grid-cols-2 gap-5">
              {/* card for registered users */}
              <div className="flex items-center justify-between py-5 px-5 gap-5 rounded-md shadow-md">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Registered Users</p>
                  <h3 className="text-4xl font-bold">{allUsersCount}</h3>
                </div>
                <FaUsers className="text-yellow-500 text-5xl" />
              </div>

              {/* card for enrolled users */}
              <div className="flex items-center justify-between py-5 px-5 gap-5 rounded-md shadow-md">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Registered Admins</p>
                  <h3 className="text-4xl font-bold">{subscribedUsersCount+1}</h3>
                </div>
                <FaUsers className="text-green-500 text-5xl" />
              </div>
            </div>
          </div>

          {/* displaying the sales chart and data */}
          <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
            {/* for displaying the bar chart */}
            <div className="h-80 relative w-full">
              <Bar className="absolute bottom-0 h-80 w-full" data={salesData} />
            </div>

            {/* card for user data */}
            <div className="grid grid-cols-2 gap-5" >
              {/* card for registered users */}
              <div className="flex items-center justify-between py-5 px-5 gap-5 rounded-md shadow-md">
                <div className="flex flex-col items-center">
                <Link to={"/courses"}>
              <button className=" px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
              Total Registered Complains
              </button>
            </Link>
                  
                </div>
                <FcSalesPerformance className="text-yellow-500 text-5xl" />
              </div>

              {/* card for enrolled users */}
              <div className="flex items-center justify-between py-5 px-5 gap-5 rounded-md shadow-md">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Solved Complains</p>
                  <h3 className="text-4xl font-bold">
                    0
                  </h3>
                </div>
                <FcSalesPerformance className="text-yellow-500 text-5xl" />
              </div>
            </div>
          </div>
        </div>

        {/* CRUD courses section */}
        <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-center text-3xl font-semibold">
              User Overview
            </h1>

            {/* add course card */}
            <button
              onClick={() => {
                navigate("/signup");
              }}
              className="w-fit bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold text-lg cursor-pointer"
            >
              Create New Account
            </button>
          </div>

          <table className="table overflow-x-scroll">
            <thead>
              <tr>
                <th>S No.</th>
                <th>Number Of Users</th>
                <th>Number Of Registered Complains</th>
                <th>Faculty</th>
                <th>Solved Complains</th>
                <th>Pending Complains</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {myCourses?.map((element, index) => {
                return (
                  <tr key={element?._id}>
                    <td>{index + 1}</td>
                    <td>
                      {allUsersCount}
                    </td>
                    <td>{subscribedUsersCount}</td>
                    <td>XYZ</td>
                    <td>0</td>
                    <td className="max-w-28 overflow-hidden text-ellipsis whitespace-nowrap">
                     0
                    </td>

                    <td className="flex items-center gap-4">
                      {/* to edit the course */}
                      <button
                        onClick={() =>
                          navigate("/course/creat", {
                            state: {
                              initialCourseData: {
                                newCourse: false,
                                ...element,
                              },
                            },
                          })
                        }
                        className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                      >
                        <MdOutlineModeEdit />
                      </button>

                      {/* to delete the course */}
                      <button
                      
                        className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold"
                      >
                        <BsTrash />
                      </button>

                      {/* to CRUD the lectures */}
                      <button
                        onClick={() =>
                          navigate("/course/displaylecture", {
                            state: { ...element },
                          })
                        }
                        className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold"
                      >
                        <BsCollectionPlayFill />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
