import {
  Tabs as MuiTabs,
  TabsProps as MuiTabsProps,
  Tab,
  TabProps,
  Box,
  BoxProps,
} from "@mui/material";

export interface TabItem {
  label: string;
  content?: string | React.ReactElement;
  disabled?: boolean;
  icon?: string | React.ReactElement;
  iconPosition?: 'top' | 'bottom' | 'start' | 'end';
  sx?: TabProps['sx'];
}

export interface TabsProps extends Omit<MuiTabsProps, 'children'> {
  tabs: TabItem[];
  value?: number;
  defaultValue?: number;
  onChange?: (event: React.SyntheticEvent, newValue: number) => void;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'standard' | 'scrollable' | 'fullWidth';
  scrollButtons?: 'auto' | boolean;
  centered?: boolean;
  TabPanelProps?: Omit<BoxProps, 'children'>;
}

export const Tabs = ({
  tabs,
  value,
  defaultValue,
  onChange,
  orientation = 'horizontal',
  variant = 'standard',
  scrollButtons = 'auto',
  centered = false,
  TabPanelProps,
  ...rest
}: TabsProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <MuiTabs
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        orientation={orientation}
        variant={variant}
        scrollButtons={scrollButtons}
        centered={centered}
        {...rest}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            disabled={tab.disabled}
            icon={tab.icon}
            iconPosition={tab.iconPosition}
            sx={tab.sx}
          />
        ))}
      </MuiTabs>
      {tabs.map((tab, index) => (
        <TabPanel
          key={index}
          value={value ?? defaultValue ?? 0}
          index={index}
          {...TabPanelProps}
        >
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
};

interface TabPanelProps extends Omit<BoxProps, 'children'> {
  children?: string | React.ReactElement;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}; 
