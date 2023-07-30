import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = (props) => {
  
  const { main, content } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const accordionVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div>
      <motion.div
        className="accordion-title"
        onClick={toggleAccordion}
        initial={false}
      >
        {main}
      </motion.div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="accordion-content"
            variants={accordionVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordion