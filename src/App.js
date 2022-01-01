import React from "react";
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Home from "./pages/home/home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Collections from "./pages/collections/collections";
import Collection from "./pages/collections/collection";
import Cart from "./pages/Cart/cart";
import Register from "./pages/register/register";
import './App.css'


function App(props) {
  library.add(fab, fas);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="collections/*" element={<Collections />}>
          <Route path=":catID" element={<Collections key={Math.random()} />} />
        </Route>
        <Route path = "collection/:ID" element = {< Collection />} />
        <Route path = "Cart" element={< Cart />}/>
        <Route path ="register" element={< Register />} />
        <Route
          path="*"
          element={
            <main>
              <p>
                خطای <big>۴۰۴</big> صفحه مورد نظر یافت نشد .
              </p>
            </main>
          }
        />
      </Routes>
      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
