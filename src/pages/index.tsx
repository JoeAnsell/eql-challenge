import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { Button } from "@mui/material";
import global from "../components/globalComponentStyles.module.scss";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import clsx from "clsx";

export default function Home() {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["logged_in"]);
  const handleButtonClick = () => {
    if (cookies.logged_in) {
      router.push("/quiz");
    } else {
      router.push("/sign-up");
    }
  };

  return (
    <Layout>
      <h1>Is This Dog?</h1>
      <div className={clsx(global.standAloneButton)}>
        <Button onClick={handleButtonClick} variant="contained">
          Enter the Kennel
        </Button>
      </div>
    </Layout>
  );
}
