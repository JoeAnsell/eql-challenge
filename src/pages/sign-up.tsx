import React, { useState, useContext } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormWrapper from "@/components/FormWrapper";
import Button from "@mui/material/Button";
import { useCookies } from "react-cookie";

import Link from "next/link";

const LoginPage: React.FC = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [cookies, setCookie] = useCookies(["logged_in"]);

  //   const { login } = useAuth();

  const router = useRouter();

  //   async function handleSubmit() {
  //     try {
  //       setError("");
  //       await login(email, password);
  //       router.push("/start");
  //     } catch {
  //       setError("Incorrect Email address or password");
  //     }
  //   }

  const handleSubmit = () => {
    console.log("handleSubmit");
    setCookie("logged_in", "false");
  };

  return (
    <Layout>
      <h1>Sign up</h1>
      <FormWrapper>
        <FormControl fullWidth>
          <TextField
            fullWidth
            id="first-name"
            label="First name"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            id="last-name"
            label="Last name"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            id="email"
            label="Email"
            variant="outlined"
            margin="normal"
          />
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </FormControl>
      </FormWrapper>
    </Layout>
  );
};

export default LoginPage;
