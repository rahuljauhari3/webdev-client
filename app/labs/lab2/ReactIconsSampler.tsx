import "./tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { BsLightningCharge } from "react-icons/bs";
import { TbPlanet } from "react-icons/tb";
import { MdRocketLaunch } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2>React Icons sampler</h2>
      <div className="flex flex-wrap gap-3 text-3xl">
        <VscAccount title="Account" />
        <AiOutlineDashboard title="Dashboard" />
        <FaBookBible title="Book" />
        <FaCalendar title="Calendar" />
        <FaEnvelopeOpenText title="Inbox" />
        <FaRegClock title="Clock" />
      </div>
      {/* On your own practice: bs and tb are new families. */}
      <div id="wd-personal-icons" className="mt-4 flex gap-3">
        <BsLightningCharge
          className="text-4xl text-orange-600"
          title="Lightning"
        />
        <TbPlanet className="text-4xl text-green-600" title="Planet" />
      </div>
      {/* With AI: md and hi2 are two more unused families. */}
      <div id="wd-ai-icons" className="mt-4 flex gap-3">
        <MdRocketLaunch className="text-4xl text-blue-600" title="Rocket" />
        <HiAcademicCap
          className="text-4xl text-blue-600"
          title="Academic cap"
        />
      </div>
    </div>
  );
}
