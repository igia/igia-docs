/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl (doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

const Register = props => (
      <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc38F2WK70mqcp3BhXrS6K9p2qTiQFa_ldpN1dCkUwhrk-Zpw/viewform?usp=pp_url&entry.185840096=Send+me+updates+on+igia+releases.&entry.185840096=Send+me+major+announcements+on+igia-related+updates+and+news.&entry.185840096=Please+feel+free+to+contact+me+about+collaboration+or+other+opportunities.">
          {props.linkText}
      </a>
);

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a target="_blank" className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    <img src={imgUrl(siteConfig.titleLogo)} style={{width:'300px'}} />
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    const {googleGroupsUrl, registrationUrl} = siteConfig;
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('platformoverview', language)}>Platform Overview</Button>
            <Button href={docUrl('gettingstarted', language)}>Get Started</Button>
            <Button href="https://github.com/igia">View on Github</Button>
            <Button href={registrationUrl}>Stay Informed</Button>
            <Button href={googleGroupsUrl}>Ask a Question</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

class Features extends React.Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="container">
                    <div className="wrapper">
                        <div className="gridBlock">
                            <div className="blockElement alignCenter imageAlignTop threeByGridBlock">
                                <div className="blockImage" style={{width: '282px', maxWidth: '282px'}}>
                                    <a target="_blank" href="https://hl7.org/fhir"><img height="60" src="/img/fhir.svg"/></a>
                                </div>
                                <div className="blockContent">
                                    <h2>
                                        <div>
                                            <span>
                                              <p>Standards Focused</p>
                                            </span>
                                        </div>
                                    </h2>
                                    <div>
                                          <span>
                                            <p>Focused on leading standards in healthcare technology, including SMART on FHIR</p>
                                          </span>
                                    </div>
                                </div>
                            </div>
                            <div className="blockElement alignCenter imageAlignTop threeByGridBlock">
                                <div className="blockImage">
                                    <img src="/img/hipaa.png"/>
                                </div>
                                <div className="blockContent">
                                    <h2>
                                        <div>
                                            <span>
                                              <p>HIPAA Aware</p>
                                            </span>
                                        </div>
                                    </h2>
                                    <div>
                                      <span>
                                        <p>HIPAA-aware best practice configurations</p>
                                      </span>
                                    </div>
                                </div>
                            </div>
                            <div className="blockElement alignCenter imageAlignTop threeByGridBlock">
                                <div className="blockImage">
                                    <img src="/img/opensource.png"/>
                                </div>
                                <div className="blockContent">
                                    <h2>
                                        <div>
                                            <span>
                                              <p>Open Source</p>
                                            </span>
                                        </div>
                                    </h2>
                                    <div>
                                      <span>
                                        <p>Focused on open-source, reusable, transparent development</p>
                                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Descriptions extends React.Component {
  render() {
    return (
        <div>
         <Container>
            <hr />
            <div className="blockElement">
               <div className="blockContent">
                 <h2><span className="center">Vision</span></h2>
                     <igia/> was started out of a belief that building clinical applications is too hard. We set out to build a scalable, open-source platform that could reduce the barriers to building clinical-grade applications. By supporting some of the more complex issues in healthcare--data integration, HIPAA compliance, and auditing, to name a few--we hoped that innovators throughout the healthcare ecosystem could more easily create solutions for pressing clinical problems.
                 <h2><span className="center">Guiding Principles</span></h2>
                 <ul>
                   <li><strong>Open Source</strong>. Released under the <em>Mozilla Public License v2.0.</em></li>
                   <li><strong>Built By Providers</strong>. Built through a unique collaboration between <a target="_blank" href="http://www.persistent.com">Persistent Systems</a> and <a target="_blank" href="http://www.partners.org">Partners HealthCare</a>, a not-for-profit healthcare system founded by Brigham & Women’s Hospital and Massachusetts General Hospital.  This means that igia was built within a provider organization, with real clinical use cases driving our product development and product roadmap.</li>
                   <li><strong>Standards Focused</strong>. Leverage existing standards, like <a target="_blank" href="http://smarthealthit.org">SMART</a>, <a target="_blank" href="http://hl7.org/fhir">FHIR</a>, and <a target="_blank" href="http://www.hl7.org">HL7</a>, wherever possible.  We are excited about the work being done in this space, and expect <igia/> to become a major implementation of these standards.</li>
                   <li><strong>Modern Architecture</strong>. Employ modern development paradigms, like a microservices ecosystem, app registries, and continuous integration and deployment.</li>
                   <li><strong>Developer Friendly</strong>. Built by and for developers. Through tutorials and code snippets, igia provides the tools to build and deploy robust, scalable, and functional clinical applications.</li>
                 </ul>
                 <h2><span className="center">Key Features</span></h2>
                 <ul>
                   <li><strong>FHIR Facade</strong>. Uses <a target="_blank" href="http://hapifhir.io/">HAPI-FHIR</a> and supports <a target="_blank" href="https://www.hl7.org/fhir/STU3/index.html">FHIR STU 3.</a>  Included are configuration settings for integrating HAPI within the igia ecosystem, as well as building out FHIR services from your own internal data services.</li>
                   <li><strong>SMART App Launching</strong>. Leverages <a target="_blank" href="https://smarthealthit.org/">SMART</a> profiles and standards to demonstrate how an app can launch against an EHR or other federated authentication system.</li>
                   <li><strong>Data Integration</strong>. With <a target="_blank" href="http://camel.apache.org">Apache Camel</a> as a base, we have built a suite of tooling around data services and data integration to facilitate the exchange and use of data within <igia/>.</li>
                   <li><strong>Workflow and Care Management.</strong> Using the workflow automation engine <a target="_blank" href="https://camunda.com/">Camunda</a> as a base, <igia/> includes significant functionality to facilitate the creation of care workflows and pathways, by wrapping Camunda's underlying APIs in healthcare-specific functionality.</li>
                   <li><strong>HIPAA-aware</strong>. <igia/> includes documentation articulating the key aspects of HIPAA as it pertains to software development in the healthcare environment, and how to design your system to be aware of these policies and regulations.</li>
                 </ul>
                 <br />
                   <i><b>Ready to begin?</b></i> Please head to our <a href="/docs/platformoverview">overview page</a> or to our <a href="/docs/gettingstarted">getting started page</a>.

                 <br />
                 <br />
                   <i><b>Want to be informed or get involved?</b></i> <Register linkText="Register for igia updates"/> to connect with us.
                 <br />
                 <br />
               </div>
            </div>
            <hr />
            <br />
            <div className="blockContent center">
              <span style={{ fontSize: '1.3em'}} >
                  <small><p>The <igia/> project is part of an ongoing collaboration between <a target="_blank" href="https://www.partners.org">Partners HealthCare</a> and <a target="_blank" href="https://www.persistent.com">Persistent Systems</a>, a large technology services company. All code has been released by Persistent Systems under the Mozilla Public License (V2) and the project is open for community contributions. The <igia/> project supports the <a href="https://www.partners.org/About/Mission-Vision/Default.aspx" target="_blank">mission and vision  of Partners HealthCare</a> through collaboration, innovation, and open-sourcing of healthcare information technology and applications.</p></small>
              </span>
              <div className="container">
                <div className="wrapper">
                  <div className="gridBlock">
                    <div className="blockElement alignCenter imageAlignTop twoByGridBlock">
                      <div className="blockImage">
                          <a target="_blank" href="https://www.partners.org"><img height="90" style={{width: '245.6px'}} src="/img/Partners_FoundedBy_Vert_614x225.svg"/></a>
                      </div>
                    </div>
                    <div className="blockElement alignCenter imageAlignTop twoByGridBlock">
                      <div className="blockImage">
                        <a target="_blank" href="https://www.persistent.com"><img height="90" src="/img/Persistent_logo.png"/></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
           <br />
           <br />
        </Container>
      </div>
);
  }
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <HomeSplash />
        <div className="mainContainer">
          <Features />
        </div>
        <Descriptions />
      </div>
    );
  }
}

module.exports = Index;
