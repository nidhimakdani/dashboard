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

// react-router-dom components
import { Link } from "react-router-dom";
// import axious from "axios"
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import { React, useState } from "react";
import axios from "axios";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

const tokenStr = localStorage.getItem('Token')
function Cover() {

  // const [rememberMe, setRememberMe] = useState(false);

  // const handleSe tRememberMe = () => setRememberMe(!rememberMe);

  const [accname, setAccname] = useState("");
  const [email, setEmail] = useState("");
  async function SignupData(e) {
    e.preventDefault();
    try {
      const logindata = {
        accname,
        email,
      };

      console.log("dataaaa", logindata);
      await axios
        .post(
          "https://0170-49-36-87-221.in.ngrok.io/v1/admin/newEcommAcc",
          JSON.stringify(logindata),

          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "https://0170-49-36-87-221.in.ngrok.io/v1/admin/newEcommAcc",
              "Access-Control-Allow-Methods": "GET,POST,PUT",
              "Access-Control-Allow-Headers": " Content - Type",
              "Access-Control-Allow-Credentials": true,
              "Authorization" : `Bearer ${tokenStr}`

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
        .catch(() => window.alert("Invalid"));
    } catch (error) {
      console.error("cach", error);
    }
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Add Account
          </MDTypography>
          {/* <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography> */}
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Account Name"
                variant="standard"
                onChange={(e) => setAccname(e.target.value)}
                value={accname}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="date" variant="standard"  fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton onClick={(e) => SignupData(e)} variant="gradient" color="info" fullWidth>
                sign up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                 
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
