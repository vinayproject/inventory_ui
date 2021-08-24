import React from 'react';
import Lottie from 'lottie-react-web'

export default function lottieFunction(props) {
    return (
        <Lottie
        options={{
            animationData: props.image
        }}
        width={600}
        />
    )
}
