/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
    return `${siteConfig.baseUrl}img/${img}`;
}

const ProjectTitle = () => (
  <h2 className="projectTitle">
    <img src={imgUrl(siteConfig.titleLogo)} style={{width:'300px'}} />
    <small>{siteConfig.tagline}</small>
  </h2>
);

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div className="main"><h5>
            <a href={this.props.config.baseUrl} className="nav-home">
              {this.props.config.footerIcon && (
              <div className="box">
                <img
                  src={this.props.config.baseUrl + this.props.config.footerIcon}
                  alt={this.props.config.title}
                  width="66"
                  height="66"
                />&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontSize: '3em', fontWeight: '200'}}>igia</span>
              </div>
              )}
            </a></h5>
            <span className="footer-text">{siteConfig.tagline}</span>
            <br /><br />
            <span className="footer-text small left">Logo Design By <a target="_blank" className="footer-text left" href="https://gillfishmandesign.com">GillFishmanDesign.com</a> Cambridge, Massachusetts</span>
            <br /><br />
            <span className="footer-text small left">{this.props.config.copyright}</span><br />
            <span className="footer-text small left">{this.props.config.trademark}</span>
          </div>
          <div>
            <h5>Documentation</h5>
            <a href={this.docUrl('gettingstarted')}>
              Getting Started
            </a>
            <a href={this.docUrl('LICENSE')}>
              License
            </a>
            <a href={this.docUrl('HD')}>
              Disclaimer
            </a>
            <a href={this.docUrl('igia-faq')}>
              FAQ
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={siteConfig.googleGroupsUrl}>
              Discussion Forum
            </a>
            <a href={this.pageUrl('users.html')}>
              Platform Users
            </a>
            <br />
            <h5>Contact us at</h5>
		<img src={imgUrl(siteConfig.contactImage)} style={{height:'1.3em'}} />
          </div>
          <div>
            <h5>More</h5>
            <a target="_blank" href="https://github.com/igia">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/igia.github.io/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
