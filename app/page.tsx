"use client";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CustomList from "./Components/CustomList";
import TopNavBar from "./Components/TopNavBar";
import LoadingButton from '@mui/lab/LoadingButton';
import { act } from "@testing-library/react";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const Home = () => {
  const [stuff1, setStuff1] = useState<any>([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const data = await fetch("/api/companies/")
    const data2 = await data.json();
    setStuff1(data2.data);
  };

  const handleClick = () => {
    setLoading(true);
    fetchData()
      .catch(() => {
        act(
          () => {
            setLoading(false);
            setError(true);
          }
        )
      });
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <TopNavBar />
      {!loading &&
        <div style={{ height: '50vh', margin: 'auto', width: '50vw', textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <LoadingButton
            role='fetch'
            onClick={handleClick}
            loading={loading}
            loadingIndicator={error ? "Try agian" : "Loading"}
            variant="outlined"

          >
            {error ? "Try Again" : "Fetch data"}
          </LoadingButton>
        </div>
      }

      {
        stuff1 && !error && stuff1.map((data: any) => (
          <CustomList key={Math.random()} stuff={data} />
        ))
      }
    </ThemeProvider>
  );

}

export default Home