import { Navbar } from "./components/index";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonail,
  Work,
} from "./container/index";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonail />
      <Footer />
    </>
  );
}

export default App;
