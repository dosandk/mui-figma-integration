import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface AccordionProps extends MuiAccordionProps {
  title: string;
  content: string;
  children: React.ReactNode;
}

export const Accordion = ({ title, content, ...props }: AccordionProps) => {
  // const accordionTitle = title ?
  //   (<AccordionSummary expandIcon={<ExpandMoreIcon />}>
  //     <Typography>{title}</Typography>
  //   </AccordionSummary>)
  //   : null;
  //
  // const accordionContent = content ? (<AccordionDetails>
  //   {content}
  // </AccordionDetails>)
  //   : null;


  return <MuiAccordion {...props}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span">{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {content}
    </AccordionDetails>
  </MuiAccordion>
};


