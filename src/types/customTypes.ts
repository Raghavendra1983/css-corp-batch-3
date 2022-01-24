import { FieldConfig, GenericFieldHTMLAttributes } from 'formik';

type IsFirstType = {
  isFirst?: boolean;
  isLast?: never;
};

type IsLastType = {
  isFirst?: never;
  isLast?: boolean;
};

export type SelectOptions = {
  value: string;
  text: string;
};

export type FieldsProps<T> = {
  options?: SelectOptions[];
} & IsFirstOrLastProps &
  FieldConfig<T> &
  GenericFieldHTMLAttributes;

export type IsFirstOrLastProps = IsFirstType | IsLastType;
