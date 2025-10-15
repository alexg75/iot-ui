import turn from "../controller/controller";
import { DeviceProperties } from "./Properties"

export const DeviceRows = () => {  
    const devices = [
        {id: 'LoungeTV', description: 'LOUNGE TV'},
        {id: 'LoungeConservatory', description: 'LOUNGE CONSERVATORY'},
        {id: 'KitchenSofa', description: 'KITCHEN SOFA'},
        {id: 'KitchenGarden', description: 'KITCHEN GARDEN'},        
    ]

    return (
        <div>
            {devices.map((device, i) => (
                <DeviceRow id={device.id} description={device.description}/>                           
            ))}
        </div>
    );

}

export const DeviceRow = (device: DeviceProperties) => {
    console.log(device);

    return (
        <div className="row">
            <div className="firstColumn">{device.description}</div>
            <div className="secondColumn"><button onClick={() => turn(device.id,'ON')}>ON</button></div>
            <div className="thirdColumn"><button onClick={() => turn(device.id,'OFF')}>OFF</button></div>
        </div>
    )
}
