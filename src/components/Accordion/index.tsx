import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';

export interface AccordionProps extends MuiAccordionProps {
  title: string;
  content: string;
}

export const Accordion = ({ title, content, ...props }: AccordionProps) => (
  <MuiAccordion {...props}>
    <AccordionSummary>
      <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        {content}
      </Typography>
    </AccordionDetails>
  </MuiAccordion>
);
