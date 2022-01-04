import { GiPadlock } from "react-icons/gi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { TiThListOutline } from "react-icons/ti";

const Data = [
  {
    icon: <BsFillShieldLockFill size={25} fill="#0070ff" />,
    caption: "Automated Savings",
    subText:
      "Build a dedicated savings faster on your terms automatically or manually.",
    footer: "Save on Mojo",
  },
  {
    icon: <GiPadlock size={25} fill="#ff0000" />,
    caption: "Fixed Savings",
    subText:
      "Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.",
    footer: "Safelock",
  },
  {
    icon: <FiTarget size={25} fill="#98fb98" />,
    caption: "Goal-oriented Savings",
    subText:
      "Reach all your savings goals faster. Save towards multiple goals on your own  group.",
    footer: "Target Savings",
    arrow: {},
  },
  {
    icon: <TiThListOutline size={25} fill="#ff55a3" />,
    caption: "Flexible Savings",
    subText:
      "Save, Transfer, withdraw, manage and organize your money for free at any time.",
    footer: "Flex Naira",
  },
];

export default Data;
