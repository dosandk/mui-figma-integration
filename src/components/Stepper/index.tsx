import {
  Stepper as MuiStepper,
  StepperProps as MuiStepperProps,
  Step,
  StepProps,
  StepLabel,
  StepLabelProps,
  StepContent,
  StepContentProps,
} from "@mui/material";

export interface StepItem {
  label: string;
  description?: string;
  content?: React.ReactNode;
  StepProps?: Omit<StepProps, 'children'>;
  StepLabelProps?: Omit<StepLabelProps, 'children'>;
  StepContentProps?: Omit<StepContentProps, 'children'>;
}

export interface StepperProps extends Omit<MuiStepperProps, 'children'> {
  steps: StepItem[];
  activeStep?: number;
  orientation?: 'horizontal' | 'vertical';
  alternativeLabel?: boolean;
  nonLinear?: boolean;
  onStepClick?: (step: number) => void;
}

export const Stepper = ({
  steps,
  activeStep = 0,
  orientation = 'horizontal',
  alternativeLabel = false,
  nonLinear = false,
  onStepClick,
  ...rest
}: StepperProps) => {
  return (
    <MuiStepper
      activeStep={activeStep}
      orientation={orientation}
      alternativeLabel={alternativeLabel}
      nonLinear={nonLinear}
      {...rest}
    >
      {steps.map((step, index) => (
        <Step
          key={step.label}
          onClick={() => onStepClick?.(index)}
          {...step.StepProps}
        >
          <StepLabel {...step.StepLabelProps}>
            {step.label}
            {step.description && (
              <div style={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                {step.description}
              </div>
            )}
          </StepLabel>
          {step.content && (
            <StepContent {...step.StepContentProps}>
              {step.content}
            </StepContent>
          )}
        </Step>
      ))}
    </MuiStepper>
  );
}; 