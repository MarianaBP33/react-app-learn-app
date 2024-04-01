import LoginForm from "./components/LoginForm";
import RegisterStudent from "./components/RegisterStudent";
import RegisterTrainer from "./components/RegisterTrainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyAccountStudent from "./components/MyAccountStudent";
import JoinUs from "./components/JoinUs";
import EditMyProfileStudent from "./components/EditMyProfileStudent";
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
