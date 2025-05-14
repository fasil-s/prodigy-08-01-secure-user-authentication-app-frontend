import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";


const app = ()=>{
 return <div>
    <Routes>
        <Route path="/signup" element={<SignUpPage />} />
    </Routes>
 </div>
}
export default app;
        
        
