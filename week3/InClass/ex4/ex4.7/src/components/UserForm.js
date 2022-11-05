import React from 'react';

import MyInput from './MyInput';
function UserForm({ listInput }) {

    return (
        <form>
            {
                listInput.map((i) => (
                    <>
                        <MyInput name={i.name} type={i.type} label={i.label} />
                        <br />
                        <br />
                    </>
                ))

            }
        </form>
    )
}

export default UserForm;