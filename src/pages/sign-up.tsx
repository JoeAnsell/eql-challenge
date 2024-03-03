import React, { useState, useContext } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormWrapper from "@/components/FormWrapper";
import Button from "@mui/material/Button";
import { useCookies } from "react-cookie";

const LoginPage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cookies, setCookie] = useCookies(["logged_in"]);

  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("handleSubmit");
    console.log("firstName", firstName);
    console.log("lastName", lastName);
    console.log("email", email);

    setCookie("logged_in", "true");
    router.push("/quiz");
  };

  return (
    <Layout>
      <h1>Sign up</h1>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <TextField
              fullWidth
              id="first-name"
              label="First name"
              variant="outlined"
              margin="normal"
              required
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <TextField
              fullWidth
              id="last-name"
              label="Last name"
              variant="outlined"
              margin="normal"
              required
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </FormControl>
        </form>
      </FormWrapper>
    </Layout>
  );
};

export default LoginPage;
