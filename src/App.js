import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Import Router, Switch, and Route
import * as Components from "./Components";
import Forum from "./home";

function App() {
  const [signIn, toggle] = useState(true);

  return (
    <Router>
      <div className={`App ${signIn ? "signin" : "signup"}`}>
        <video autoPlay loop muted className="background-video">
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Components.Container>
          {signIn ? (
            <Components.SignInContainer signinIn={signIn}>
              {/* Rest of your Sign In component */}
            </Components.SignInContainer>
          ) : (
            <Components.SignUpContainer signinIn={signIn}>
              {/* Rest of your Sign Up component */}
            </Components.SignUpContainer>
          )}
          <Components.OverlayContainer signinIn={signIn}>
            {/* Rest of your Overlay component */}
          </Components.OverlayContainer>
        </Components.Container>

        <Switch>
          <Route path="/home">
            <Forum />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
