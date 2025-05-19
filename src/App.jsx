import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";


const app = ()=>{
 return <div>
    <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login " element={<LoginPage />} />
    </Routes>
 </div>
}
export default app;
        
        
