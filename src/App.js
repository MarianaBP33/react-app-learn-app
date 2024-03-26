import LoginForm from "./components/LoginForm";
import RegisterStudent from "./components/RegisterStudent";
import RegisterTrainer from "./components/RegisterTrainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JoinUsTrainer from "./components/JoinUsTrainer";
import JoinUsStudent from "./components/JoinUsStudent";
import Box from "./components/Box";
import MyAccountStudent from "./components/MyAccountStudent";
import EditMyProfileStudent from "./components/EditMyProfileStudent";

function App() {
  return (
    <div className="">
      <Header />
      <div className="w-full flex items-center justify-center">
        {/* <LoginForm /> */}
        {/* <RegisterTrainer /> */}
        {/* <RegisterStudent /> */}
        {/* <JoinUsTrainer />
        <JoinUsStudent /> */}
        {/* <Box tag="some tag" title="Some Titile" description="Some desctiprion" image="/images/Image 135.jpg" /> */}
        <MyAccountStudent />
        {/* <EditMyProfileStudent /> */}
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
