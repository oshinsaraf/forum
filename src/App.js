import React, { useState } from "react";
import * as Components from "./Components";
import "./styles.css";
import backgroundVideo from "./video.mp4"; // Adjust the path to your video file

function App() {
  const [signIn, toggle] = useState(true);

  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`App ${signIn ? "signin" : "signup"}`}>
        <Components.Container>
          {signIn ? (
            <Components.SignInContainer signinIn={signIn}>
              <Components.Form>
                <Components.Title>Sign in</Components.Title>
                <Components.Input type="email" placeholder="Email" />
                <Components.Input type="password" placeholder="Password" />
                <Components.Anchor href="#">
                  Forgot your password?
                </Components.Anchor>
                <Components.Button>Sign In</Components.Button>
              </Components.Form>
            </Components.SignInContainer>
          ) : (
            <Components.SignUpContainer signinIn={signIn}>
              <Components.Form>
                <Components.Title>Create Account</Components.Title>
                <Components.Input type="text" placeholder="Name" />
                <Components.Input type="email" placeholder="Email" />
                <Components.Input type="password" placeholder="Password" />
                <Components.Button>Sign Up</Components.Button>
              </Components.Form>
            </Components.SignUpContainer>
          )}
          <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>
              <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>
              <Components.RightOverlayPanel signinIn={signIn}>
                <Components.Title>Hello there!</Components.Title>
                <Components.Paragraph>
                  Enter Your personal details and start your journey with us
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Sign Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </div>
    </div>
  );
}

export default App;
