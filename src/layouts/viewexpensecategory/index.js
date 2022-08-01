
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { useState, useEffect, React } from "react";


import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

import MDButton from "components/MDButton";
import { Link,useNavigate } from "react-router-dom";

function Expense() {

  const navigate = useNavigate()

  const [finalcat, setcat] = useState("");
  const [am, setAm] = useState('');

  const getData = async () => {
      console.log(  'dataaaaaaaaaaaaaaaaaa',  localStorage.getItem('finalamount')
  )

  
    // try {
    //   const response = await  axios.get(` https://0170-49-36-87-221.in.ngrok.io/v1/admin/expense/viewExpense?token=${tokenStr}`);
    //   // console.log(response.data);
    //    finalArray = response.data;
    //   // console.log(finalArray.amount) 
    //   // finalArray.map((item =>item.categoryId === catFromStorage? console.log(item.amount): console.log('Noooo') ))
    //   // finalArray.map((item)=>{
        
    //   //   console.log(item.categoryId) 
    //   //   console.log(catFromStorage)
    //   //   if(item.categoryId === catFromStorage){
    //   //     console.log('000000sdsdsdsd',item.amount)
    //   //     setFinalAmount(item.amount)       
    //   //   }
    //   //   else{
    //   //     console.log("noooooooo")
    //   //   }
    //   //   return finalAmount ;
    //   // })
    //   setFetcheddata(response.data)
    //   // console.log(finalArray)
    //   // setData(response.cartdata);
    //   // setFetcheddata(response.fetcheddata);
    //   // console.log(fetcheddata)
    //   // console.log(response.data)
     
    // } catch (error) {
    //   // console.log("dd");
    // }
  }


  const clicked=  ()=>{
    navigate("/updateexpense", { replace: true });
}




  useEffect( async() => {
    
    setAm(localStorage.getItem("finalamount"))
    setcat(localStorage.getItem("selectedexpensecategory")) 
    console.log(am)
    await getData();
  }, []);  
  
  return (
    <DashboardLayout>
      {/* {console.log(categoryClicked)} */}
      {/* {console.log('working',am)} */}
      <DashboardNavbar />
      {/* {      console.log(fetcheddata)
} */}
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
                  Selected category : sales
                </MDTypography>
              </MDBox>
              <MDBox textAlign="center" my={3}>
                <Link to="/addexpense">
                  <MDButton className="mx-2" color="info">
                    Add Expense
                  </MDButton>
                </Link>
              </MDBox>
              {/* <Link to="/addexpense">
                <MDButton>Add Expense</MDButton>
              </Link> */}
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: [
                    { Header: "category", accessor: "category", align: "left" },
                    { Header: "expense", accessor: "expense", align: "center" },
                    // { Header: "amount", accessor: "amount", align: "center" },
                    // { Header: "expense", accessor: "expense", align: "center" },
                    { Header: "update", accessor: "update", align: "center" },
                    // { Header: "delete", accessor: "delete", align: "delete" },
                  ],  
              
                  rows: [
                    {
                      // delete: <MDButton>Delete</MDButton>,
                      category: <MDTypography>{finalcat}</MDTypography>,
                      update: <MDButton onClick={()=>clicked()}>Update Expense</MDButton>,
                      expense: <MDTypography> {localStorage.getItem("finalamount")} </MDTypography>,
                      // amount: <MDTypography>1250</MDTypography>,
                      // expense: <MDTypography>59744512</MDTypography>,
                    },
                  ], }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
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

export default Expense;
