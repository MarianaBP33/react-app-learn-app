import LoginForm from "./components/auth/LoginForm";
import RegisterStudent from "./components/auth/RegisterStudent";
import RegisterTrainer from "./components/auth/RegisterTrainer";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import MyAccountStudent from "./components/profiles/student/MyAccountStudent";
import JoinUs from "./components/joinUs/JoinUs";
import EditMyProfileStudent from "./components/profiles/student/EditMyProfileStudent";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <Header />
      <Routes >
      <Route path="/" element={<LoginForm />}/>
      <Route path="/login" element={<LoginForm />}/>
      <Route path="/registrationStudent" element={<RegisterStudent />} />
      <Route path="/registrationTrainer" element={<RegisterTrainer />} />
      <Route path="/joinUs" element={<JoinUs />} />
      <Route path="/myAccountStudent" element={<MyAccountStudent />} />
      <Route path="/editProfileStudent" element={<EditMyProfileStudent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
