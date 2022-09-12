import React from "react";
import FigFile from "./figSide";

export default function MainSidebar(): JSX.Element {
  const [switchSideBar, setSideBar] = React.useState(false);

  const handleSwitchSideBar = () => {
    setSideBar(!switchSideBar);
  };

  return <FigFile onClick={handleSwitchSideBar} />;
}
