import ProjectCard from "./Projectcard";
import { theme } from "../../UI/ChangeThemeBtn";
import PartyHunt from "../../Assets/Projects/partyhunt.png";
import Loader from "../../UI/Loader";
function Fullstack() {
  return (
    <div
      className={`py-30 md:p-40  flex flex-wrap md:flex-row flex-col justify-evenly md:gap-10 gap-4 w-screen ${theme.bg_transition} ${theme.text}`}
    >
      <ProjectCard
        title="Party Hunt"
        imgPath=""
        description="A party discovery app with real-time location and event sharing."
        ghLink="https://github.com/AleksandaPrpa/PartyHunt"
      >
        <img src={PartyHunt} />
      </ProjectCard>
      <ProjectCard
        title="Party Hunt"
        imgPath=""
        description="A party discovery app with real-time location and event sharing."
        ghLink="https://github.com/AleksandaPrpa/PartyHunt"
      >
        <img src={PartyHunt} />
      </ProjectCard>
      <ProjectCard
        title="Party Hunt"
        imgPath=""
        description="A party discovery app with real-time location and event sharing."
        ghLink="https://github.com/AleksandaPrpa/PartyHunt"
      >
        <img src={PartyHunt} />
      </ProjectCard>
      <ProjectCard
        title="Party Hunt"
        imgPath=""
        description="A party discovery app with real-time location and event sharing."
        ghLink="https://github.com/AleksandaPrpa/PartyHunt"
      >
        <img src={PartyHunt} />
      </ProjectCard>
      <ProjectCard
        title="Party Hunt"
        imgPath=""
        description="A party discovery app with real-time location and event sharing."
        ghLink="https://github.com/AleksandaPrpa/PartyHunt"
      >
        <img src={PartyHunt} />
      </ProjectCard>
      <ProjectCard
        title="Party Hunt"
        imgPath=""
        description="A party discovery app with real-time location and event sharing."
        ghLink="https://github.com/AleksandaPrpa/PartyHunt"
      >
        <img src={PartyHunt} />
      </ProjectCard>
    </div>
  );
}

export default Fullstack;
