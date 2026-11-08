
/* Import the three main website components */
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

/* Import the main CSS file */
import "./App.css";

/* Main React component */
function App() {
  return (
    <div className="app">
      {/* Display the website header */}
      <Header />

      {/* Display the blog content */}
      <Body />

      {/* Display the website footer */}
      <Footer />
    </div>
  );
}

/* Export App to main.jsx */
export default App;
