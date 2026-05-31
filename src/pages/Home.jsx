import Banar from "./HomeContent/Banar";
import Maincatagory from "./HomeContent/Maincatagory";
import Upcomingcourese from "./HomeContent/Upcomingcourese";
import PromoBanner from "./HomeContent/PromoBanner";
import Secondpromobannaer from "./HomeContent/Secondpromobannaer";
import TestimonialVideoSection from "./HomeContent/TestimonialVideoSection";
import ProfessionalFooter from "./Footer/ProfessionalFooter";
function Home() {
  return (
    <div>
      <Banar />
      <Maincatagory />
      <Secondpromobannaer />

      <Upcomingcourese />
      <PromoBanner />
      <TestimonialVideoSection/>
    </div>
  );
}

export default Home;