import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

const defaultAccordion = [
  {
    title: '1. What is the nature of the school curriculum?',
    text: 'The school’s curriculum is very rich. It is a rich blend of South Sudan and British curriculum aligned with the International Primary Curriculum (IPC).',
  },
  {
    title: '2. When does school resume and close daily?',
    text: 'School resumes at 8.00am and closes at 12.00pm for the nursery and 2.00pm for the primary. However, Fridays are usually for club activities and school closes at 1.30pm.',
  },
  {
    title: '3. Is admission from the nursery into the primary automatic?',
    text: 'Admission from the nursery into the primary is automatic but pupils must take reading tests to guarantee their admission.',
  },
  {
    title: '4. Does the school run a shuttle bus for pupils?',
    text: 'The school run a bus shuttle. Parents also bring in their children and pick them up after school.',
  },
  {
    title: '5. What is the ratio of pupils to teachers?',
    text: 'The ratio of pupils to teachers is at most twenty- five (25) pupils to two (2) teachers per class from the nursery to primary two and at most twenty- five (25) pupils to one (1) teacher per class from primary three to six.',
  },
];
const AccordionBlog = () => {
  const [activeDefault, setActiveDefault] = useState(0);
  return (
    <Accordion
      className="accordion dlab-accordion faq-1 box-sort-in m-b30"
      defaultActiveKey="-1"
    >
      {defaultAccordion.map((d, i) => (
        <div className="panel">
          <div className="acod-head">
            <h6 className="acod-title">
              <Accordion.Toggle
                as={Link}
                variant="link"
                className={` ${activeDefault === i ? '' : 'collapsed'}`}
                onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
                eventKey={`${i}`}
              >
                {d.title}
              </Accordion.Toggle>
            </h6>
          </div>

          <Accordion.Collapse eventKey={`${i}`} className="acod-body">
            <div className="acod-content">{d.text}</div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
export { defaultAccordion };
export default AccordionBlog;
