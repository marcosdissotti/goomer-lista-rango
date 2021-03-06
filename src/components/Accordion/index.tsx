import React, { useState, useEffect } from 'react';

import { Container, Icon, Painel, AccordionWrapper } from './styles';

interface AccordionInterface {
  name: string;
  found: boolean;
  first?: boolean;
  children: any;
}

const Accordion: React.FC<AccordionInterface> = ({
  children,
  name,
  found,
  first,
}) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    found && setActive(true);
    first && setActive(true);
  }, []);

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
