import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps
} from "@mui/material";

export interface ContainerProps extends MuiContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <MuiContainer {...rest}>
      {children}
    </MuiContainer>
  );
} 
