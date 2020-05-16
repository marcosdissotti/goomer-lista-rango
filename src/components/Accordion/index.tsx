import React, { useState, Children } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import ChevronDown from '../../assets/icons/chevron-down.svg';
import ChevronRight from '../../assets/icons/chevron-right.svg';

import { Container, Icon, Painel, AccordionWrapper } from './styles';

interface AccordionInterface {
  name: string;
  children: any;
}

const Accordion: React.FC<AccordionInterface> = ({ children, name }) => {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => setActive(!active);

  return (
    <Container>
      <AccordionWrapper onClick={handleClick}>
        <h2>{name}</h2>
        <div className="icon-wrapper">
          <Icon
            src={
              active
                ? require('../../assets/icons/chevron-down.svg')
                : require('../../assets/icons/chevron-right.svg')
            }
          />
        </div>
      </AccordionWrapper>
      <Painel active={active}>{children}</Painel>
    </Container>
  );
};

export default Accordion;