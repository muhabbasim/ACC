import { CssBaseline, ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { dispatch, useSelector } from "src/store/Store";
import { ThemeSettings } from "./theme/Theme";
import RTL from "./layouts/full/shared/customizer/RTL";
import ScrollToTop from "./components/shared/ScrollToTop";
import Router from "./routes/Router";
import { AppState } from "./store/Store";
import { useEffect } from "react";
import { setLanguage } from "./store/customizer/CustomizerSlice";

function App() {
  const routing = useRoutes(Router);
  const theme = ThemeSettings();
  const customizer = useSelector((state: AppState) => state.customizer);

  const languageAdjustment = () => {
    if (customizer.activeDir === 'ltr') {
      dispatch(setLanguage('en'))
    } else if (customizer.activeDir === 'rtl'){
      dispatch(setLanguage('ar'))
    }
  }

  useEffect(() => {
    languageAdjustment()
  },[])

  return (
    <ThemeProvider theme={theme}>
      <RTL direction={customizer.activeDir}>
        <CssBaseline />
        <ScrollToTop>{routing}</ScrollToTop>
      </RTL>
    </ThemeProvider>
  );
}

export default App;
