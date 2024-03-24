import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const theme = createTheme({
  palette: {
    primary: {
      main: "#373860",
    },
    secondary: {
      main: "#efeeed",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/Portfolio">
        <Header />
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
