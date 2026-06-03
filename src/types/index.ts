// Type definitions
export interface StatCardData {
  icon: React.ReactNode;
  value: string;
  label: string;
  badge: string;
  badgeColor?: string;
}

export interface InputFieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  icon?: React.ReactNode;
}
