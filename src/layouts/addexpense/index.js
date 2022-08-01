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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import axios from "axios"
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

import { React,useState } from "react";

import {  useNavigate } from "react-router-dom";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/expense/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";
import MDButton from "components/MDButton";
import TextField from "@mui/material/TextField";


const tokenStr = localStorage.getItem('Token')




function AddExpense() {
  // const { columns, rows } = authorsTableData();
  const navigate = useNavigate()
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  async function addexpense(e) {
    const categoryId = localStorage.getItem('selectedexpensecategoryid')
    console.log(categoryId)
    e.preventDefault();
    try {
            const expensedata = {
              amount,
              description,
              categoryId,
            };

              console.log("dataaaa", expensedata);
              await axios
                .post(
                  "https://07ae-2405-201-2029-a841-8851-104e-a9e8-3215.ngrok.io/v1/admin/expense/addexpense",
                  JSON.stringify(expensedata),

                       {
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                      "Access-Control-Allow-Origin": "https://07ae-2405-201-2029-a841-8851-104e-a9e8-3215.ngrok.io/v1/admin/expense/addexpense",
                      "Access-Control-Allow-Methods": "GET,POST,PUT",
                      "Access-Control-Allow-Headers": " Content - Type",
                      "Access-Control-Allow-Credentials": true,
                      "Authorization" : `Bearer ${tokenStr}`
                             },
                        }
                    )
                .then(() => {
                console.log("new");
                  localStorage.setItem('finalamount',amount)
                  navigate('/viewexpensecategory')
              })

                
        .catch(() => window.alert("Server down"));
        
    } catch (error) {
      console.error("cach", error);
    }
  }
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
              <br />
              {/* <TextField
                required
                id="outlined-basic"
                label="Category Name"
                color="success"
                focused
                style={{ marginTop: 11, width: "25ch", align: "right" }}
                // defaultValue="Hello World"
              />
              <TextField
                required
                id="outlined-basic"
                label="Category Name"
                color="success"
                focused
                style={{ marginTop: 11, width: "25ch", align: "right" }}
                // defaultValue="Hello World"
              /> */}
              <MDBox textAlign="center">
              <TextField
                label="Amount"
                id="outlined-start-adornment"
                style={{ marginTop: 11, width: "25ch" }}
                onChange={(e) => setAmount(e.target.value)}
              /><br />
              <TextField
                label="Description"
                id="outlined-multiline-static"
                multiline
                rows={4}
                style={{ marginTop: 11, width: "25ch" }}
                onChange={(e) => setDescription(e.target.value)}
              />
              </MDBox>
              <MDBox textAlign="center" my={3}>
                {/* <Link to="/addexpensecategory"> */}
                <MDButton onClick={(e) => addexpense(e)} className="mx-2" color="info">
                  Add Expense Category
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

export default AddExpense;
