import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import Email from "../assets/email-alt.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} stroke={"#222"} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} stroke={"#222"} />
      </a>
      <a
        title="Email"
        href={`mailto:${config.email_account}`}
        target="_blank"
        rel="noopener"
      >
        <Email width={24} height={24} stroke={"#222"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
