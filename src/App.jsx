import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/FakeAuthContext";
import { CitiesProvider } from "./contexts/CitiesContext";

// pages
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";
// import ProtectedRoute from "./pages/ProtectedRoute";

// components
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// without Lazy Loading
/*
✓ 440 modules transformed.
dist/index.html                   0.47 kB │ gzip:   0.31 kB
dist/assets/bg-f6f92717.jpg     344.58 kB
dist/assets/index-cf6c4dbd.css   45.91 kB │ gzip:  11.37 kB
dist/assets/index-cbe1ac40.js   516.03 kB │ gzip: 154.46 kB
*/
// Layzy Loading
/*
✓ 443 modules transformed.
dist/index.html                           0.47 kB │ gzip:   0.31 kB
dist/assets/bg-f6f92717.jpg             344.58 kB
dist/assets/Logo-515b84ce.css             0.03 kB │ gzip:   0.05 kB
dist/assets/Login-f39ef3ff.css            0.35 kB │ gzip:   0.22 kB
dist/assets/Product-cf1be470.css          0.47 kB │ gzip:   0.27 kB
dist/assets/PageNav-d3c5d403.css          0.51 kB │ gzip:   0.28 kB
dist/assets/Homepage-07a78d6a.css         0.53 kB │ gzip:   0.31 kB
dist/assets/AppLayout-ed3c204d.css       17.56 kB │ gzip:   7.02 kB
dist/assets/index-29205648.css           26.57 kB │ gzip:   4.39 kB
dist/assets/Product.module-02d70b80.js    0.06 kB │ gzip:   0.07 kB
dist/assets/PageNotFound-26687ca4.js      0.15 kB │ gzip:   0.15 kB
dist/assets/ProtectedRoute-30789f03.js    0.19 kB │ gzip:   0.17 kB
dist/assets/Logo-b12f75ed.js              0.23 kB │ gzip:   0.20 kB
dist/assets/PageNav-0ab667c2.js           0.49 kB │ gzip:   0.27 kB
dist/assets/Pricing-a2893d28.js           0.65 kB │ gzip:   0.41 kB
dist/assets/Homepage-0acd6dc9.js          0.67 kB │ gzip:   0.42 kB
dist/assets/Product-3ab1c90e.js           0.86 kB │ gzip:   0.49 kB
dist/assets/Login-e604532b.js             1.01 kB │ gzip:   0.54 kB
dist/assets/AppLayout-14f4da36.js       163.25 kB │ gzip:  51.48 kB
dist/assets/index-f18c4996.js           351.20 kB │ gzip: 102.29 kB
*/

// Layzy Loading
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Homepage = lazy(() => import("./pages/Homepage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const ProtectedRoute = lazy(() => import("./pages/ProtectedRoute"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              {/* equal to path="/" */}
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
