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
import { useState, React, useEffect } from "react";
import axios from "axios"
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import DataTable from "examples/ExpenseList/DataTable";

// Data
// import authorsTableData from "layouts/accounts/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";
import MDButton from "components/MDButton";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const token = localStorage.getItem('Token')

// const navigate = useNavigate();
function Accounts() {
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  // const click = () => {
  //   alert("gradient");
  //   navigate("www.google.com");
  // };
  const [fetcheddata, setFetcheddata] = useState([]);
  const getData = async () => {

  // const tokenStr = localStorage.getItem('Token')


    try {
      const response = await  axios.get(`https://0170-49-36-87-221.in.ngrok.io/v1/admin/viewAccount?token=${token}
      `);
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
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();

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
                  List of Accounts
                </MDTypography>
              </MDBox>
              <MDBox textAlign="center" my={3}>
                <Link to="/authentication/sign-up">
                  <MDButton className="mx-2" color="info">
                    Add Account
                  </MDButton>
                </Link>
              </MDBox>
              {/* <button onClick={() => navigate("h6")}>Add</button> */}
              <MDBox pt={1}>
                  <DataTable table={{columns: [
      {  accessor: "accountname", align: "left" },
      { accessor: "profit", align: "left" },
      { accessor: "email", align: "left" },
      {  accessor: "date", align: "center" },
    ], rows: [
                       
                        
                        {
                          
                          accountname: 'accountname',
                          profit: 'profit',
                          email: 'email',
                          date: 'date',
                        }
                      
                      ],}}  isSorted={false}
                      entriesPerPage={false}
                      showTotalEntries={false}
                      noEndBorder/>
                  <div> {fetcheddata.map((item)=>(
                          
                          
                  <DataTable
                    table={{  
                      
                      columns: [
                        { accessor: "accountname", align: "left" },
                        {accessor: "profit", align: "left" },
                        {  accessor: "email", align: "left" },
                        {  accessor: "date", align: "center" },
                      ],
                      
                      rows: [
                       
                        
                        {
                          /* eslint no-underscore-dangle: 0 */

                          accountname: <MDTypography >{item.accname}</MDTypography>,
                          profit: <MDTypography>2424</MDTypography>,
                          email: <MDTypography>{item.email}</MDTypography>,
                          date: <MDTypography>{item.createDate.slice(0, 10)}</MDTypography>,
                        }
                      
                      ],
                    
                    }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  /> ))}</div>
                </MDBox>
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

export default Accounts;
