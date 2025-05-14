import { Route, Routes } from "react-router-dom";

const app = ()=>{
 return <div>
    <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/about" element={<LoginPage />} />
    </Routes>
 </div>
        
}
export default app;
