import ProjectCard from "./Projectcard";

function Fullstack() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        title="Party Hunt"
        imgPath="/Assets/partyhunt.png"
        description="A party discovery app with real-time location and event sharing."
        ghLink="https://github.com/AleksandaPrpa/PartyHunt"
      />
    </div>
  );
}

export default Fullstack;
