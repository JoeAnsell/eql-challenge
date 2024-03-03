import React, { useState, useContext } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormWrapper from "@/components/FormWrapper";
import Link from "next/link";

const LoginPage: React.FC = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
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

  return (
    <Layout>
      <FormWrapper>
        <FormControl>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </FormControl>
      </FormWrapper>
    </Layout>
  );
};

export default LoginPage;
