import React, {useState} from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import theme from "./ui/Theme";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/about" component={() => <div>About Me</div>} />
          <Route exact path="/projects" component={() => <div>Projects</div>} />
          <Route exact path="/project1" component={() => <div>Project 1</div>} />
          <Route exact path="/project2" component={() => <div>Project 2</div>} />
          <Route exact path="/arcdevelopment" component={() => <div>Arc Development</div>} />
          <Route exact path="/resume" component={() => <div>My Resume</div>} />
          <Route
            exact
            path="/contact"
            component={() => <div>Contact Me</div>}
          />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
