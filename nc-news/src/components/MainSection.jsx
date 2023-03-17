import FlashSiteErrors from "./FlashSiteErrors";

const MainSection = ({ element }) => {
  return (
    <main className="articles">
      
      <div className="container mt-5">
        <FlashSiteErrors />
        {element}
      </div>
    </main>
  );
};

export default MainSection;
