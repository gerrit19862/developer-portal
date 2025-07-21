import clsx from "clsx";
import styles from "@site/src/components/HomepageFeatures/styles.module.css";
import FeatureRow from "../FeatureRow";
import Intro, { IntroHeader } from "../Intro";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import React from "react";
import LinkGroup from "@site/src/components/LinkGroup";
import { NewBadge } from "@site/src/components/NewBadge";
import { Icon } from "@mittwald/flow-react-components";
import { IconCloudNetwork } from "@tabler/icons-react";

function PlatformIntro() {
  return (
    <Intro>
      <IntroHeader>
        <Icon>
          <IconCloudNetwork />
        </Icon>
        <h3>
          <Translate id={"index.deploy.title"}>
            Deploy your software easily
          </Translate>
        </h3>
      </IntroHeader>
      <p>
        <Translate id={"index.deploy.body"}>
          Deploy your applications and services to our platform with ease. We
          support a variety of programming languages, frameworks and databases.
        </Translate>
      </p>
    </Intro>
  );
}

function PlatformCoreFeatures() {
  return (
    <>
      <h3>
        <Translate id="index.deploy.platform.title">
          Platform features
        </Translate>
      </h3>
      <p>
        <Translate id={"index.deploy.platform.body"}>
          Our platform provides a variety of features to help you deploy your
          applications and services:
        </Translate>
      </p>
      <ul>
        <li>
          <LinkGroup
            title={
              <Translate id="index.deploy.platform.language">
                Runtime environments
              </Translate>
            }
            links={[
              <Link to="/docs/v2/platform/workloads/php">PHP</Link>,
              <Link to="/docs/v2/platform/workloads/nodejs">Node.js</Link>,
              <Link to="/docs/v2/platform/workloads/python">Python</Link>,
              <Link to="/docs/v2/platform/workloads/containers">
                Container <NewBadge />
              </Link>,
            ]}
          />
        </li>
        <li>
          <LinkGroup
            title={
              <Translate id="index.deploy.platform.databases">
                Databases
              </Translate>
            }
            links={[
              <Link to="/docs/v2/platform/databases/mysql">MySQL</Link>,
              <Link to="/docs/v2/platform/databases/redis">Redis</Link>,
              <Link to="/docs/v2/platform/databases/opensearch">
                OpenSearch
              </Link>,
            ]}
          />
        </li>
        <li>
          <LinkGroup
            title={
              <>
                <Translate id="index.deploy.platform.aihosting">
                  AI-Hosting
                </Translate>{" "}
                <NewBadge />
              </>
            }
            links={[
              <Link to="/docs/v2/platform/aihosting/introduction">Introduction</Link>,
            ]}
          />
        </li>
      </ul>
      <p>
        <Translate id="index.deploy.platform.features">
          Missing features?
        </Translate>{" "}
        <Link href="https://github.com/mittwald/feature-requests/issues">
          <Translate id="index.deploy.platform.features-link">
            Request them here!
          </Translate>
        </Link>
      </p>
    </>
  );
}

function PlatformTools() {
  return (
    <>
      <h3>
        <Translate id="index.deploy.tools.title">
          Tooling and Integration
        </Translate>
      </h3>
      <p>
        <Translate id="index.deploy.tools.body">
          We provide a variety of tools, integrations and tutorials to help you
          deploy your applications and services:
        </Translate>
      </p>
      <ul>
        <li>
          <LinkGroup
            title={
              <Translate id="index.deploy.tools.development">
                Local development
              </Translate>
            }
            links={[
              <Link to="/cli">CLI</Link>,
              <Link to="/docs/v2/platform/development/ddev">DDEV</Link>,
            ]}
          />
        </li>
        <li>
          <LinkGroup
            title={
              <Translate id="index.deploy.tools.deployment-provisioning">
                Deployment and Provisioning
              </Translate>
            }
            links={[
              <Link to="/docs/v2/guides/deployment/deployer">Deployer</Link>,
              <Link to="/docs/v2/guides/deployment/typo3surf">TYPO3 Surf</Link>,
              <Link to="/docs/v2/guides/deployment/terraform">
                Terraform <NewBadge />
              </Link>,
            ]}
          />
        </li>
      </ul>
    </>
  );
}

export default function PlatformFeature() {
  return (
    <FeatureRow>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--4")}>
            <PlatformIntro />
          </div>
          <div className={clsx("col col--4")}>
            <div className={clsx("padding--md", styles.feature)}>
              <PlatformCoreFeatures />
            </div>
          </div>
          <div className={clsx("col col--4")}>
            <div className={clsx("padding--md", styles.feature)}>
              <PlatformTools />
            </div>
          </div>
        </div>
      </div>
    </FeatureRow>
  );
}
