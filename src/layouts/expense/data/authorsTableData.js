/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";

// // Images
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
import MDButton from "components/MDButton";
import { useEffect, React, useState } from "react";
import axios from "axios"

export default function data () {
  const [fetcheddata, setFetcheddata] = useState([]);
  const getData = async () => {

  // const tokenStr = localStorage.getItem('Token')


    try {
      const response = await  axios.get(`https://0170-49-36-87-221.in.ngrok.io/v1/admin/expense/viewExpense?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjJkZTJkMDdjMjcyZWNkNTU3MmQ2YTYzIiwicGFzc3dvcmQiOiJhZG1pbiIsImxvZ0lkIjoiNjJlMjQ1M2NiZWVjNGNlYWYzYzk1NjYyIiwiaWF0IjoxNjU4OTk2MDI4LCJleHAiOjE2NTg5OTk2Mjh9.Lu-GCHRYpRAJwypUwASSqoptF0mQ-5ayFaqbin7Q9ww`);
      // console.log(response.data);
      // const finalArray = response.data;
      // finalArray.map((item => ( console.log(item.amount))))
      setFetcheddata(response.data)
      // console.log(finalArray)
      // setData(response.cartdata);
      // setFetcheddata(response.fetcheddata);
      // console.log(fetcheddata)
      console.log(response.data)
    } catch (error) {
      console.log("dd");
    }
  }

  useEffect(() => {
    getData();
  }, []);  
  // const Author = ({ image, name, email }) => (
  //   <MDBox display="flex" alignItems="center" lineHeight={1}>
  //     <MDAvatar src={image} name={name} size="sm" />
  //     <MDBox ml={2} lineHeight={1}>
  //       <MDTypography display="block" variant="button" fontWeight="medium">
  //         {name}
  //       </MDTypography>
  //       <MDTypography variant="caption">{email}</MDTypography>
  //     </MDBox>
  //   </MDBox>
  // );

  // const Job = ({ title, description }) => (
  //   <MDBox lineHeight={1} textAlign="left">
  //     <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
  //       {title}
  //     </MDTypography>
  //     <MDTypography variant="caption">{description}</MDTypography>
  //   </MDBox>
  // );

  return {

    columns: [
      { Header: "category", accessor: "category", align: "left" },
      { Header: "amount", accessor: "amount", align: "center" },
      { Header: "expense", accessor: "expense", align: "center" },
      { Header: "update", accessor: "update", align: "center" },
      { Header: "delete", accessor: "delete", align: "center" },
    ],

    rows: [
      fetcheddata.map((item)=>(item.amount)),
      
      {
        delete: <MDButton>Delete</MDButton>,
        update: <MDButton>Update</MDButton>,
        category: <MDTypography>item.descriptio</MDTypography>,
        amount: <MDTypography>item.amount</MDTypography>,
        expense: <MDTypography>item.createdAt</MDTypography>,
      }
    
    ],
  };
}
