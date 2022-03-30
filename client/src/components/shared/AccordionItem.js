import { useState } from 'react';
import { CollapsibleItem } from 'react-materialize';

const AccordionItem = ({ header, content}) => {
  const [open, setOpen] = useState(false)

  return(
    <CollapsibleItem
      expanded={true}
      header={header}
      node="div"
      onSelect={() => setOpen(!open)}
    >
      {content}
    </CollapsibleItem>
  )
}

export default AccordionItem;