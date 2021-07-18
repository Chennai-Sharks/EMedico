import { ComponentType, Fragment, useEffect } from 'react';
import { getIn, FormikContextType, FormikValues } from 'formik';
import { connect } from 'formik';
import flatten from './Flatten';

interface FocusErrorProps {
  formik: Pick<
    FormikContextType<FormikValues>,
    'isSubmitting' | 'touched' | 'isValidating' | 'errors'
  >;

  focusDelay?: number;
}

type GetProps<T> = T extends ComponentType<infer P> ? P : never;

export interface ConnectedFocusErrorProps extends FocusErrorProps {}

function formikConnect<T extends ComponentType<{ formik: any }>>(component: T) {
  return connect(component as any) as ComponentType<
    Omit<GetProps<T>, 'formik'>
  >;
}

function FocusError({
  formik: { isSubmitting, touched, isValidating, errors },
  focusDelay = 100,
}: FocusErrorProps) {
  useEffect(() => {
    if (isSubmitting && !isValidating) {
      const flattedTouched = flatten(touched);

      const errorNames = Object.keys(flattedTouched).reduce((prev, key) => {
        if (getIn(errors, key)) {
          prev.push(key);
        }
        return prev;
      }, [] as string[]);

      if (errorNames.length && typeof document !== 'undefined') {
        let errorElement: HTMLElement | null;

        errorNames.forEach((errorKey) => {
          const selector = `[name="${errorKey}"]`;
          if (!errorElement) {
            errorElement = document.querySelector(selector);
            return;
          }
        });

        setTimeout(() => {
          if (errorElement) {
            if (errorElement.className === 'MuiToggleButtonGroup-root')
              (errorElement.children.item(0) as HTMLElement).focus();
            else errorElement.focus();
          }
        }, focusDelay);
      }
    }
  }, [isSubmitting, isValidating, errors, touched, focusDelay]);

  return <Fragment />;
}

export const FormikErrorOnFocus = formikConnect(FocusError);
