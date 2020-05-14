import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import ChevronDown from '../../assets/icons/chevron-down.svg';
import ChevronRight from '../../assets/icons/chevron-right.svg';

import { Container, Icon } from './styles';

interface AccordionInterface {
  active: boolean;
}

const Accordion: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => setActive(!active);

  return (
    <Container active={active}>
      <button className="accordion" onClick={handleClick}>
        <h2>Almoços</h2>
        <div className="icon-wrapper">
          <Icon
            src={
              active
                ? require('../../assets/icons/chevron-down.svg')
                : require('../../assets/icons/chevron-right.svg')
            }
          />
        </div>
      </button>
      {active && <div className="panel" />}
    </Container>
  );
};

export default Accordion;
