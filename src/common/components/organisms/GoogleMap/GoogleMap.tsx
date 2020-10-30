import React, {FC} from 'react'
import {GoogleMap,withScriptjs,withGoogleMap} from 'react-google-maps'


interface Props {
        keyURL: string;
}
const Map :FC<Props> = ({keyURL})=>{
    return(
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat: -34.397, lng:150.644}}
            />
    );
}
export default  withScriptjs(
    withGoogleMap(
        Map
    )
)
