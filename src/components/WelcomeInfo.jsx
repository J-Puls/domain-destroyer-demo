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
                <strong>
                    <a
                        href="https://dev.to/devteam/announcing-the-digitalocean-app-platform-hackathon-on-dev-2i1k"
                        target="_blank"
                        rel="noopener noreferrer">
                        DigitalOcean App Platform Hackathon.
                    </a>
                </strong>
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
            </p>

            <h3>
                I make all sorts of cool things for the web, <br />
                <a
                    href="https://jpuls.dev"
                    target="_blank"
                    rel="noopener noreferrer">
                    visit my website to learn more!
                </a>
                <br />
                <br />
                Happy Hacking!
            </h3>
            <a
                className="do-btn"
                href="https://cloud.digitalocean.com/apps/new?repo=https://github.com/J-Puls/domain-destroyer/tree/master">
                <img
                    src="https://mp-assets1.sfo2.digitaloceanspaces.com/deploy-to-do/do-btn-blue.svg"
                    alt="Deploy to DO"
                />
            </a>
        </div>
    );
};

export default WelcomeInfo;
