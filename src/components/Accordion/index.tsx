import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface AccordionProps extends MuiAccordionProps {
  children: React.ReactNode;
}

export const Accordion = ({ children, ...rest }: AccordionProps) => (
  <MuiAccordion {...rest}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    </AccordionSummary>
    <AccordionDetails>
      {children}
    </AccordionDetails>
  </MuiAccordion>
);
