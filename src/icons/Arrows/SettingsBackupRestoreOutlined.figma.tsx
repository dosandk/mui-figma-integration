
import figma from "@figma/code-connect";
import {SettingsBackupRestoreOutlined} from "@mui/icons-material";

figma.connect(
  SettingsBackupRestoreOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11561",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SettingsBackupRestoreOutlined {...props} />
  }
);