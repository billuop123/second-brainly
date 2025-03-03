import { CustomButton } from "./components/CustomButton";
import { IoAddSharp } from "react-icons/io5";
function App() {
  return (
    <div className="flex justify-center items-center mt-6">
      <CustomButton variant="default" startIcon={<IoAddSharp />}>
        hahaha
      </CustomButton>
      <CustomButton
        variant="secondary"
        onClick={() => console.log("clicked middle one")}
      >
        hahaha
      </CustomButton>
      <CustomButton variant="destructive">hahaha</CustomButton>
    </div>
  );
}

export default App;
