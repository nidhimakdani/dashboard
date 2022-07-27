
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import * as React from "react";
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
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  // const [startDate, setStartDate] = useState(new Date());
  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
    console.log(currency)
  };
  const dasta = [1, 2, 3, 4];
  console.log(dasta);

  // const [startDate, setStartDate] = useState(new Date());
  // const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
  //   <button className="example-custom-input" onClick={onClick} ref={ref}>
  //     {value}
  //   </button>
  // ));
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
                  Add sold orders
                </MDTypography>
              </MDBox>
              <div>
                <TextField
                  type="date"
                  label="Sale Date"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Order ID"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Buyer User ID"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Full Name"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="First Name"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Last Name"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Number of Items"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Payment Method"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  type="date"
                  label="Date Posted"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Street 1"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Street 2"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Delivery City"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Delivery State"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Delivery Zipcode"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Delivery Country"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <FormControl style={{ margin: 11, width: "25ch" }}>
                  <InputLabel id="demo-simple-select-label">
                    Currency
                  </InputLabel>
                  <Select
                    style={{ height: "8ch" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currency}
                    label="currency"
                    onChange={handleChange}
                  >
                     {ccc?.map((item)=>(
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
                />
                <TextField
                  label="Coupon Code"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Coupon Details"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Discount Amount"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Delivery Discount"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Delivery"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Sales tax"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Order total"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Status"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Card Processing Fees"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Order Net"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Adjusted Order Total"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Adjusted Card Processing Fees"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Adjusted Net Order Amount"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Buyer"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Order Type"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="Payment Type"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="InPerson Discount"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="InPerson Location"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
                <TextField
                  label="SKU"
                  id="filled-size-normal"
                  variant="filled"
                  style={{ margin: 11, width: "25ch" }}
                />
              </div>
              <MDBox textAlign="center" my={3}>
                {/* <Link to="/addexpensecategory"> */}
                <MDButton className="mx-2" color="info">
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
