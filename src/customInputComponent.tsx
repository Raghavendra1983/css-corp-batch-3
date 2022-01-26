import React, { ComponentProps, memo } from 'react';


type NewType = ComponentProps<'input'>;

const CustomInputComponent = (props: NewType) => {
    console.log(props);
    return (
        <>
            <input className="my-custom-input" type="text" {...props} />
        </>
    )
};

export default memo(CustomInputComponent);
