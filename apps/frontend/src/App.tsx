
import { SidebarProvider } from "./components/ui/sidebar";
import Dashboard from "./pages/Dashboard";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
 return <BrowserRouter>
 <Routes>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/dashboard" element={<SidebarProvider><Dashboard/></SidebarProvider>}/>
    </Routes></BrowserRouter>
}

export default App;