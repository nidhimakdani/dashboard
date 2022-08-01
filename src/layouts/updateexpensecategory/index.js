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
import {  useNavigate } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { useEffect, React, useState } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import TextField from '@mui/material/TextField';

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/expense/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";
import MDButton from "components/MDButton";
import axios from "axios";

const tokenStr = localStorage.getItem('Token')

function UpdateExpenseCategory() {
  const navigate = useNavigate()
  const [categoryname, setCategoryname] = useState("");

  const [currentcat, setCurrentcat] = useState('');
  const [currentcatid, setCurrentcatid] = useState('');
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  // const [categoryname, setCategoryname] = useState("");
  async function addexpensecategory(e) {
    e.preventDefault();
    try {
      const catdata = {
        categoryname,
      };

      console.log("dataaaa", catdata);
      alert("Sure you want to update")
      navigate("/expense")

      await axios
        .post(
          ` https://0170-49-36-87-221.in.ngrok.io/v1/admin/expense/updateCategoreExpense?categoryId=${currentcatid}`,
          JSON.stringify(catdata),

          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": ` https://0170-49-36-87-221.in.ngrok.io/v1/admin/expense/updateCategoreExpense?categoryId=${currentcatid}`,
              "Access-Control-Allow-Methods": "GET,POST,PUT",
              "Access-Control-Allow-Headers": " Content - Type",
              "Access-Control-Allow-Credentials": true,
              "Authorization": `Bearer ${tokenStr}`
            },
          }
        )
        .then(() => {

          console.log("new");
          // const mainToken = res.data.token;
          // const useremail = res.data.token;
          // localStorage.setItem("Token", mainToken);
          // console.log(useremail)
          // localStorage.setItem("email", useremail);
          //   console.log(useremail);
        })
        .catch(() => window.alert("Server Down"));

    } catch (error) {
      console.error("cach", error);
    }
  }

  useEffect(() => {
    const cc = localStorage.getItem('updatecat')
    const gc = localStorage.getItem('updatecatid')
    setCurrentcat(cc)
    setCurrentcatid(gc)
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Add Expense
                </MDTypography>
              </MDBox>
              {console.log(currentcatid, currentcat)}
              <MDBox my={3} mx={3} textAlign="center">

                <TextField
                  // value={currentcat}
                  id="outlined-helperText"
                  label={currentcat}
                  placeholder={currentcat}
                  onChange={(e) => setCategoryname(e.target.value)}
                  value={categoryname}
                  my={3}
                />

                {/* <MDInput defaultValue={currentcat} my={3} className="mx-2" onChange={(e) => setCategoryname(e.target.value)}
                value={categoryname}>ds</MDInput> */}
                {/* <MDInput placeholder="Amount">ds</MDInput>
                <MDInput placeholder="Description">ds</MDInput> */}
              </MDBox>

              <MDBox textAlign="center" my={3}>
                {/* <Link to="/addexpensecategory"> */}
                <MDButton onClick={(e) => (addexpensecategory(e))} className="mx-2" color="info">
                  Update Category
                </MDButton>
                {/* </Link> */}
              </MDBox>

              {/* <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox> */}
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              {/* <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              > */}
              {/* <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography> */}
              {/* </MDBox> */}
              {/* <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                /> */}
              {/* </MDBox> */}
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default UpdateExpenseCategory;















