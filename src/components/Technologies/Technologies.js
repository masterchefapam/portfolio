import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaCcStripe } from 'react-icons/fa';
import {SiNextDotJs,SiTailwindcss} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      Lorem ipsum dolor sit amet consectetur,
       adipisicing elit. Adipisci enim praesentium non 
       qui itaque dolore nisi, eligendi ipsa illo illum 
       sed aliquid mollitia sequi dolorum exercitationem 
      aliquam iusto libero impedit?
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" style={{color:'#f96400'}}/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js, Express and Mongodb
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaCcStripe size="3rem" style={{color:'#665bff'}}/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Stripe e-commerce
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" style={{color:'#0483a8'}}/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNextDotJs size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTailwindcss size="3rem" style={{color:'#0483a8'}}/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Tailwind Css Framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
