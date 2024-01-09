import MenuBar from "@components/CmsLayout/non-authenticated/MenuBar";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <>
      <MenuBar />
      <Outlet />
    </>
  );
};

export default LandingLayout;
