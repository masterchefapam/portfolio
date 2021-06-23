import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Passion, Dedication and<br/>
        a lot of coffee.
       </SectionTitle>
       <SectionText>
         Speak your self what's your edge and what makes you vital
         to the company that will make them hire you.
   
        </SectionText>
        <Button>
          Learn More
        </Button>
    </LeftSection>
  </Section>
);

export default Hero;