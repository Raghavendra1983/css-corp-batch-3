import CustomInputComponent from './customInputComponent';
import { Field, Form, Formik } from 'formik';
import React from 'react';

type Props = {};

export const FormikBasic = (props: Props) => {
    return (
        <Formik
            initialValues={{ email: '', color: '', firstName: '', lastName: '' }}
            onSubmit={(values, actions) => {

                alert(JSON.stringify(values, null, 2));
                actions.resetForm();

            }}
        >
            <Form>
                <div className='flex flex-column'>
                    <div>
                        <Field name="lastName" placeholder="Last Name" />
                    </div>
                    <div>
                        <Field name="color" component="select">
                            <option value=''>Select</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </Field>
                    </div>
                    <div>
                        <Field name="firstName" as={CustomInputComponent} placeholder="First Name" />
                    </div>
                    <div>
                        <Field name="submit" component="button" type="submit">Click</Field>
                    </div>
                </div>
            </Form>
        </Formik>

    )

};
