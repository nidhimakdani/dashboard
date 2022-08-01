
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios"
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, React, useState } from "react";

const token = localStorage.getItem('Token')

function Expense() {
  const [fetcheddata, setFetcheddata] = useState([]);

  const navigate = useNavigate()

  const clicked = async (selectedexpensecategory, id) => {
    console.log(selectedexpensecategory)
    localStorage.setItem('selectedexpensecategory', selectedexpensecategory)
    localStorage.setItem('selectedexpensecategoryid', id)
    try {
      const response = await axios.get(`https://4a72-2405-201-2029-a841-8851-104e-a9e8-3215.in.ngrok.io/v1/admin/expense/viewExpense?token=${token}`);
      const finalArray = response.data;
      console.log(finalArray)
      finalArray.map((item) => {
        console.log('wddwwf', item.categoryId)
        console.log("selected cat", id)
        if (item.categoryId === id) {
          console.log('amount', item.amount)
          localStorage.setItem('finalamount', item.amount)
          navigate("/viewexpensecategory", { replace: true });
        }
        else {
          localStorage.setItem('finalamount', 0)
          navigate("/viewexpensecategory", { replace: true });
        }
        return item.amount || 0;
      })
    } catch (error) {
      console.log("error");
    }
  }

  const getData = async () => {
    try {
      const response = await axios.get(`https://4a72-2405-201-2029-a841-8851-104e-a9e8-3215.in.ngrok.io/v1/admin/expense/viewCategoryExpense?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjJkZTJkMDdjMjcyZWNkNTU3MmQ2YTYzIiwicGFzc3dvcmQiOiJhZG1pbiIsImxvZ0lkIjoiNjJlM2NjYjlkM2E1YjdjZGFiZTVkNzc2IiwiaWF0IjoxNjU5MDk2MjQ5LCJleHAiOjE2NTkwOTk4NDl9.5Hg3tQRQqOMTQs0g_c8xf0C_qPphLFUGzbs78iFEBm4`);
      console.log("Some data : ", response.data)
      setFetcheddata(response?.data || [])
    } catch (error) {
      
      console.log("dd", error);
    }
  }

  const update = (selectedexpensecategory, id) => {
    navigate("/updateexpensecategory", { replace: true });
    console.log('from update button', selectedexpensecategory)
    console.log('from update button', id)

    localStorage.setItem('updatecat', selectedexpensecategory)
    localStorage.setItem('updatecatid', id)
  }

  useEffect(() => {
  

    getData();
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
                  Main expense
                </MDTypography>
              </MDBox>
              <MDBox textAlign="center" my={3}>
                <Link to="/addexpensecategory">
                  <MDButton className="mx-2" color="info">
                    Add Expense Category
                  </MDButton>
                </Link>
              </MDBox>
              <MDBox pt={1}>
                <DataTable table={{
                  columns: [
                    { accessor: "category", align: "left" },
                    { accessor: "date", align: "center" },
                    { accessor: "update", align: "center" },
                  ], rows: [
                    {
                      category: 'category',
                      update: 'update',
                      date: 'date',
                    }
                  ],
                }} isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder />
                <div> {fetcheddata.length &&fetcheddata.map((item) => (

                  <DataTable
                    table={{
                      columns: [
                        { accessor: "category", align: "left" },
                        { accessor: "date", align: "center" },
                        { accessor: "update", align: "center" },
                      ],
                      rows: [
                        {
                          /* eslint no-underscore-dangle: 0 */
                          category: <MDButton onClick={() => clicked(item.categoryname, item._id)}>{item.categoryname}</MDButton>,
                          date: <MDTypography>{item.createdAt.slice(0, 10)}</MDTypography>,
                          update: <MDButton onClick={() => update(item.categoryname, item._id)}>Update</MDButton>,
                        }
                      ],
                    }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />))}</div>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Expense;
