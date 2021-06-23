import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container style={{position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    zIndex:'9999',
    backgroundColor: "#0d1a1c"}}>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center",color:'white',marginBottom:'20px'}}>
          <DiCssdeck size="3rem"/><Span>Renesto</Span>
        </a>

      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#project">
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>
            About
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
