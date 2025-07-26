import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center min-h-dvh">
      <h1 className="text-blue-500 text-3xl">Hello GSAP</h1>
    </div>
  );
};

export default App;
