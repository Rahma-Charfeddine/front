import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/login' />} />
        <Route path="/login" Component={Login} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*IT sets up the routing configuration for a React application using React Router.
 It defines three routes: a default route that redirects to the login page,
  a login route that renders the login component,
 and a dashboard route that matches any sub-paths under /dashboard/ and renders the dashboard component.
 */






/*
The code imports necessary components and functions from the "react-router-dom" package. 
These include BrowserRouter, Navigate, Route, and Routes. 
These components and functions are used to define and manage the routing in the application.*/


/*It then imports two custom components: Dashboard and Login.
 These components are used as the main views/pages that will be rendered when the corresponding routes are matched.*/



 /* The App function is defined as the main component of the application.
 It serves as the entry point for rendering the application.
 The BrowserRouter component is used as a wrapper around the routes.
  It enables the use of routing features in the application by providing the necessary context for routing.
  The Routes component is used to define the route configuration
  individual Route components*/

  /* 3 routes
  The Navigate component is used to redirect the user to the /login route.
   So, when the root path / is matched, it will navigate to the /login route.
"/login". It also has an element prop that renders the Login component.
 This means that when the /login path is matched, the Login component will be rendered.*/
