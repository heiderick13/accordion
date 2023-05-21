import Accordion from "./components/Accordion/Accordion";

import desktopBox from "./assets/images/illustration-box-desktop.svg";
import desktopWoman from "./assets/images/illustration-woman-online-desktop.svg";

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="main-container relative bg-white rounded-3xl flex justify-between items-center gap-6 pe-10 py-14">
        <div className="img-container h-full w-1/2 overflow-hidden ">
          <img
            className="absolute translate-y-32 -translate-x-24  z-20"
            src={desktopBox}
            alt=""
          />
          <img className=" -translate-x-16 z-10" src={desktopWoman} alt="" />
        </div>
        <Accordion />
      </div>
    </div>
  );
}

export default App;
