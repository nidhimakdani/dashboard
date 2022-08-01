
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import React, { useState } from "react";
// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import FormControl from "@mui/material/FormControl";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

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
import Select from "@mui/material/Select";
import "react-datepicker/dist/react-datepicker.css";
// import { cardContentClasses } from "@mui/material";

const cc = require("currency-codes");

console.log(cc.codes());
const ccc = cc.codes()

function SoldOrdersForm() {


/* eslint no-multi-assign: ["error", { "ignoreNonDeclaration": true }] */




  

  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  // const [startDate, setStartDate] = useState(new Date());
  // const [currency, setCurrency] = React.useState("");

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  //   console.log(currency)
  // };
  // const dasta = [1, 2, 3, 4];
  // console.log(dasta);

  const [user, setUser] = useState({
      Sale_Date: "",
      Order_ID: "",
      Buyer_User_ID: "",
      // Full_Name: "",
      // First_Name: "",
      // Last_Name: "",
      // Number_of_Items: "",
      // Payment_Method: "",
      // Date_Posted: "",
      // Street_1: "",
      // Street_2: "",
      // Delivery_City: "",
      // Delivery_State: "",
      // Delivery_Zipcode: "",
      // Delivery_Country: "",
      // Currency: "",
      // Order_Value: "",
      // Coupon_Code: "",
      // Coupon_Details: "",
      // Discount_Amount: "",
      // Delivery_Discount: "",
      // Delivery: "",
      // Sales_tax: "",
      // Order_total: "",
      // Status: "",
      // Card_Processing_Fees: "",
      // Order_Net: "",
      // Adjusted_Order_Total: "",
      // Adjusted_Net_Order_Amount: "",
      // Buyer: "",
      // Order_Type: "",
      // Payment_Type: "",
      // InPerson_Discount: "",
      // InPerson_Location: "",
      // SKU: "",
    });
    let name;
    let value;
    const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      console.log(e.target.value);

      setUser({ ...user, [name]: value });
    };


    const soldordersform = (e) => {
      console.log(e.target.value);

    } 

/* eslint-disable camelcase */


      // e.preventDefault();
      /* eslint no-multi-assign: ["error", { "ignoreNonDeclaration": true }] */

  //       const catdata = {      /* eslint no-multi-assign: ["error", { "ignoreNonDeclaration": false }] */

  //         Sale_Date,
          
  //         // Full_Name,
  //         // First_Name,
  //         // Last_Name,
  //         // Number_of_Items,
  //         // Payment_Method,
  //         // Date_Posted,
  //         // Street_1,
  //         // Street_2,
  //         // Delivery_City,
  //         // Delivery_State,
  //         // Delivery_Zipcode,
  //         // Delivery_Country,
  //         // Currency,
  //         // Order_Value,
  //         // Coupon_Code,
  //         // Coupon_Details,
  //         // Discount_Amount,
  //         // Delivery_Discount,
  //         // Delivery,
  //         // Sales_tax,
  //         // Order_total,
  //         // Status,
  //         // Card_Processing_Fees,
  //         // Order_Net,
  //         // Adjusted_Order_Total,
  //         // Adjusted_Net_Order_Amount,
  //         // Buyer,
  //         // Order_Type,
  //         // Payment_Type,
  //         // InPerson_Discount,
  //         // InPerson_Location,
  //         // SKU,
  // }
  
        // console.log("dataaaa", catdata);
        //   await axios
        //     .post(
        //       `https://07ae-2405-201-2029-a841-8851-104e-a9e8-3215.ngrok.io/v1/admin/expense/addexpensecategory`,
        //       JSON.stringify(catdata),
  
        //       {
        //         headers: {
        //           Accept: "application/json",
        //           "Content-Type": "application/json",
        //           "Access-Control-Allow-Origin": `https://07ae-2405-201-2029-a841-8851-104e-a9e8-3215.ngrok.io/v1/admin/expense/addexpensecategory`,
        //           "Access-Control-Allow-Methods": "GET,POST,PUT",
        //           "Access-Control-Allow-Headers": " Content - Type",
        //           "Access-Control-Allow-Credentials": true,
        //           "Authorization" : `Bearer ${tokenStr}`
        //         },
        //       }
        //     )
        //     .then(() => {
        //       console.log("new");
        //       navigate("/expense")
  
        //       // const mainToken = res.data.token;
        //       // const useremail = res.data.token;
        //       // localStorage.setItem("Token", mainToken);
        //       // console.log(useremail)
        //       // localStorage.setItem("email", useremail);
        //       //   console.log(useremail);
        //     })
        //     .catch(() => window.alert("Server Down"));
        // } catch (error) {
        //   console.error("cach", error);
        // }
      

    // const [startDate, setStartDate] = useState(new Date());
    // const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    //   <button className="example-custom-input" onClick={onClick} ref={ref}>
    //     {value}
    //   </button>
    // ));
    return (
      <DashboardLayout>
        {/* {console.log(currency)} */}
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
                    Add sold orders
                  </MDTypography>
                </MDBox>
                <div>
                  <TextField
                    type="date"
                    label="Sale Date"
                    id="filled-size-normal"
                    variant="filled"
                    onChange={handleInputs}
                    value={user.Sale_Date}
                    name="Sale_Date"
                    style={{ margin: 11, width: "25ch" }}
                  />
                  <TextField
                    label="Order ID"
                    id="filled-size-normal"
                    variant="filled"
                    onChange={handleInputs}
                    value={user.Order_ID}
                    name="Order_ID"
                    style={{ margin: 11, width: "25ch" }}
                  />
                  <TextField
                    label="Buyer User ID"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Buyer_User_ID}
                    name="Buyer_User_ID"
                  />
                  <TextField
                    label="Full Name"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Full_Name}
                    name="Full_Name"
                  />
                  <TextField
                    label="First Name"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.First_Name}
                    name="First_Name"

                  />
                  <TextField
                    label="Last Name"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Last_Name}
                    name="Last_Name"
                  />
                  <TextField
                    label="Number of Items"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Number_of_Items}
                    name="Number_of_Items"
                  />
                  <TextField
                    label="Payment Method"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Payment_Method}
                    name="Payment_Method"
                  />
                  <TextField
                    type="date"
                    label="Date Posted"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Date_Posted}
                    name="Date_Posted"
                  />
                  <TextField
                    label="Street 1"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Street_1}
                    name="Street_1"
                  />
                  <TextField
                    label="Street 2"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Street_2}
                    name="Street_2"
                  />
                  <TextField
                    label="Delivery City"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Delivery_City}
                    name="Delivery_City"
                  />
                  <TextField
                    label="Delivery State"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Delivery_State}
                    name="Delivery_State"
                  />
                  <TextField
                    label="Delivery Zipcode"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Delivery_Zipcode}
                    name="Delivery_Zipcode"
                  />
                  <TextField
                    label="Delivery Country"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Delivery_Country}
                    name="Delivery_Country"
                  />
                  <FormControl style={{ margin: 11, width: "25ch" }}>
                    <InputLabel id="demo-simple-select-label">
                      Currency
                    </InputLabel>
                    <Select
                      style={{ height: "8ch" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={currency}
                      label="currency"
                      onChange={handleInputs}
                      value={user.Currency}
                      name="Currency"

                    >
                      {ccc?.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* <TextField
                  type="select"
                  label="Currency"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                /> */}
                  <TextField
                    label="Order Value"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Order_Value}
                    name="Order_Value"

                  />
                  <TextField
                    label="Coupon Code"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Coupon_Code}
                    name="Coupon_Code"

                  />
                  <TextField
                    label="Discount Details"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Coupon_Details}
                    name="Coupon_Details"
                  />


                  <TextField
                    label="Delivery Amount"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Discount_Amount}
                    name="Discount_Amount"

                  />


                  <TextField
                    label="Coupon Code"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Delivery_Discount}
                    name="Delivery_Discount"

                  />


                  <TextField
                    label="Delivery_Discount"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Delivery_Discount}
                    name="Delivery_Discount"

                  />
                  <TextField
                    label="Delivery"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Delivery}
                    name="Delivery"

                  />
                  <TextField
                    label="Sales tax"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Sales_tax}
                    name="Sales_tax"

                  />
                  <TextField
                    label="Order total"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Order_total}
                    name="Order_total"

                  />
                  <TextField
                    label="Status"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Status}
                    name="Status"

                  />
                  <TextField
                    label="Card Processing Fees"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Card_Processing_Fees}
                    name="Card_Processing_Fees"

                  />
                  <TextField
                    label="Order Net"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Order_Net}
                    name="Order_Net"

                  />
                  <TextField
                    label="Adjusted Order Total"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Adjusted_Order_Total}
                    name="Adjusted_Order_Total"

                  />
                  <TextField
                    label="Adjusted Card Processing Fees"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Adjusted_Card_ProcessingFees}
                    name="Adjusted_Card_ProcessingFees"

                  />
                  <TextField
                    label="Adjusted Net Order Amount"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Adjusted_Net_Order_Amount}
                    name="Adjusted_Net_Order_Amount"

                  />
                  <TextField
                    label="Buyer"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Buyer}
                    name="Buyer"

                  />
                  <TextField
                    label="Order Type"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Order_Type}
                    name="Order_Type"

                  />
                  <TextField
                    label="Payment Type"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.Payment_Type}
                    name="Payment_Type"

                  />
                  <TextField
                    label="InPerson Discount"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.InPerson_Discount}
                    name="InPerson_Discount"

                  />
                  <TextField
                    label="InPerson Location"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.InPerson_Location}
                    name="InPerson_Location"

                  />
                  <TextField
                    label="SKU"
                    id="filled-size-normal"
                    variant="filled"
                    style={{ margin: 11, width: "25ch" }}
                    onChange={handleInputs}
                    value={user.SKU}
                    name="SKU"

                  />
                </div>
                <MDBox textAlign="center" my={3}>
                  {/* <Link to="/addexpensecategory"> */}
                  <MDButton onClick={(e) => soldordersform(e)} className="mx-2" color="info">
                    ADD
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

  export default SoldOrdersForm;
