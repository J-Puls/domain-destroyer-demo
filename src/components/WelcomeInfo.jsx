import React from "react";
const WelcomeInfo = () => {
    return (
        <div className="welcome-info">
            <h1>Welcome back to 1995!</h1>
            <p>
                This application showcases my TypeScript interpretation of the
                timeless shareware classic <strong>Desktop Destroyer</strong> by
                Miroslav Němeček. All aspects of this project were created as an
                entry to the{" "}
                <em>
                DigitalOcean App Platform Hackathon.
                </em>
            </p>

            <p>
                If you're interested in using the{" "}
                <strong>domain-destroyer</strong> game in your own project, you
                can{" "}
                <a
                    href="https://www.npmjs.com/package/domain-destroyer"
                    target="_blank"
                    rel="noopener noreferrer">
                    get the npm package
                </a>{" "}
                or{" "}
                <a
                    href="https://github.com/J-Puls/domain-destroyer"
                    target="_blank"
                    rel="noopener noreferrer">
                    clone the source code.
                </a>
            </p>
            <p>
                If you would like to view the source code for this demo
                application,{" "}
                <a
                    href="https://github.com/J-Puls/domain-destroyer-demo"
                    target="_blank"
                    rel="noopener noreferrer">
                    check out the GitHub repo.
                </a>
                You can learn to make applications similar to this for yourself
                by reading my related{" "}
                <a href="https://dev.to/jpuls/simple-sprite-animations-for-games-on-the-web-digitalocean-hackathon-blog-part-1-ndb">
                    Dev posts on the subject!
                </a>
            </p>
            <p className="disclaimer">
                <small>
                    I take no credit for the original artwork depicted in this
                    project, I simply modified it from its original form to suit
                    the needs of this application.
                </small>
            </p>
            <h3>
                I make all sorts of cool things for the web, <br />
                <a
                    href="https://jpuls.dev"
                    target="_blank"
                    rel="noopener noreferrer">
                    visit my website to learn more!
                </a>
            </h3>
        </div>
    );
};

export default WelcomeInfo;
