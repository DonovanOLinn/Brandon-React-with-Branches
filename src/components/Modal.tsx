import React from 'react'

type Props = {
    open: boolean;
    onClose?: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>)
    return (
        <h1>Modal</h1>
    )
}

export default Modal