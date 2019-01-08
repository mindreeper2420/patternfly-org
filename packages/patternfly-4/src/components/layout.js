import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, withPrefix, Link } from 'gatsby';

// import './layout.css'
// import '@patternfly/react-core/dist/styles/base.css'

import {
  BackgroundImage,
  BackgroundImageSrc,
  Brand,
  Nav,
  NavItem,
  NavList,
  NavVariants,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  Switch
} from '@patternfly/react-core';
import { Location } from '@reach/router';

import brandImg from './l_pf-reverse-164x11.png';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true
    };
  }

  handleChange = isChecked => {
    this.setState({ isChecked });
  };

  render() {
    const { activeItem, isChecked } = this.state;
    const { sideNav } = this.props;
    const PageNav = (
      <Location>
        {({ location }) => {
          console.log(location);
          const currentPath = location.pathname;
          return (
            <Nav aria-label="Nav">
              <NavList variant={NavVariants.horizontal}>
                <NavItem isActive={currentPath.indexOf('/get-started/') > -1}>
                  <Link to="/get-started/">Get Started</Link>
                </NavItem>
                <NavItem isActive={currentPath.indexOf('/design-guidelines/') > -1}>
                  <Link to="/design-guidelines/">Design Guidelines</Link>
                </NavItem>
                <NavItem isActive={currentPath.indexOf('/docs/') > -1}>
                  <Link to="/docs/">Documentation</Link>
                </NavItem>
                <NavItem isActive={currentPath.indexOf('/community/') > -1}>
                  <Link to="/community/">Community</Link>
                </NavItem>
                <NavItem isActive={currentPath.indexOf('/blog/') > -1}>
                  <Link to="/blog/">Blog</Link>
                </NavItem>
              </NavList>
            </Nav>
          );
        }}
      </Location>
    );
    const bgImages = {
      [BackgroundImageSrc.lg]: withPrefix('/img/pfbg_1200.jpg'),
      [BackgroundImageSrc.sm]: withPrefix('/img/pfbg_768.jpg'),
      [BackgroundImageSrc.sm2x]: withPrefix('/img/pfbg_768@2x.jpg'),
      [BackgroundImageSrc.xl]: withPrefix('/img/pfbg_2000.jpg'),
      [BackgroundImageSrc.filter]: withPrefix('/img/background-filter.svg#image_overlay')
    };
    // const PageToolbar = (
    //   <Toolbar>
    //     <ToolbarGroup>
    //       <ToolbarItem>
    //         <Switch
    //           id="simple-switch"
    //           label={isChecked ? 'React' : 'Core'}
    //           isChecked={isChecked}
    //           onChange={this.handleChange}
    //           aria-label="simple Switch example"
    //         />
    //       </ToolbarItem>
    //     </ToolbarGroup>
    //   </Toolbar>
    // );
    const SiteHeader = (
      <PageHeader
        logo={<Link to="/">
          <Brand src={brandImg} alt="Patternfly Logo"/>
        </Link>}
        // toolbar={PageToolbar}
        topNav={PageNav}
      />
    );
    return (<StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <BackgroundImage src={bgImages} />
        <Page header={SiteHeader} sidebar={sideNav ? <PageSidebar nav={sideNav} isNavOpen /> : null}>
          <PageSection variant={PageSectionVariants.light}>
            {this.props.children}
          </PageSection>
        </Page>
      </>} />);
  }

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  sideNav: PropTypes.node,
  activeNavItem: PropTypes.number
}

Layout.defaultProps = {
  activeNavItem: 0
};

export default Layout