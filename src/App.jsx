import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { getUserThunk } from "./redux/slices/UserSlice";
import CustomRouter from "./Router/CustomRouter";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getUserThunk());
    })();
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <CustomRouter />
        <ToastContainer position="bottom-right" autoClose={2000} draggable/>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
