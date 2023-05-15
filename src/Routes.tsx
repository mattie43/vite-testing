import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './assets/Theme'
import Home from "./components/Home";
import PathTwo from "./components/PathTwo";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/path2",
    element: <PathTwo />
  }
])

export default function Routes() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
