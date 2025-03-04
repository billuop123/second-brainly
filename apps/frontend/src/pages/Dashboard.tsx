import { CiShare2 } from "react-icons/ci";
import { CustomButton } from "../components/CustomButton";
import { IoAddSharp } from "react-icons/io5";
import { CustomCard } from "../components/Card";
import { CustomDialog } from "../components/CustomDialog";
import { useContext, useState } from "react";
import { AppSidebar } from "../components/App-sidebar";
import { useContent } from "@/hookk/useContent";


const getEmbedUrl = (url) => {
  return url.replace("watch?v=", "embed/");
};

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

      const content=useContent()
    console.log(content)
  return (
    <div className="relative">
      {/* Buttons container */}
      <div className="fixed top-0 right-0 w-full flex justify-end gap-4 p-3 bg-white z-10">
        <CustomButton variant="default" startIcon={<CiShare2 />}>
          Share
        </CustomButton>
        <CustomDialog
          setIsOpen={setIsOpen}
          buttonProp={
            <CustomButton variant="secondary" startIcon={<IoAddSharp />}>
              Add Content
            </CustomButton>
          }
          isOpen={isOpen}
        
        />
      </div>

      {/* Sidebar */}
      <AppSidebar />

      {/* Content container */}
      <div className="pt-16 pl-64"> {/* Add padding-top and padding-left to avoid overlap */}
        <div className="flex gap-4 ml-3 mr-3 flex-wrap">
        
        {content.map(({ type, link, title }) => 
  type === "youtube" ? (
    <CustomCard key={link} type={type} link={getEmbedUrl(link)} title={title} tags="tags" />
  ) : (
    <CustomCard key={link} type={type} link={link} title={title} tags="tags" />
  )
)}


          {/* <CustomCard
            type="youtube"
            link="https://www.youtube.com/watch?v=sD4Of6KaurA"
            title="something"
            tags="tags"
          />
          <CustomCard
            type="twitter"
            link="https://x.com/SanjamTuli/status/1895079714286403776"
            title="haha"
            tags="tags"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;