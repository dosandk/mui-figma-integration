
import figma from "@figma/code-connect";
import {QuestionAnswerOutlined} from "@mui/icons-material";

figma.connect(
  QuestionAnswerOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3073",
  { 
    props: {
    
    },
    example: ({ ...props }) => <QuestionAnswerOutlined {...props} />
  }
);