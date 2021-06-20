import { ReactBingmaps } from 'react-bingmaps';

const bingmapKey =  "AksOASfzdybmndjlOxhWnhZaNtzG5CMgqUFIgB5Ji8W6Gr748WQL5mijk5w4OmDD";
const Map = ({pushPins, polyline}) => {
    return (
        <div className="map">
              <ReactBingmaps
                center={[0, 0]}
                zoom = {2}
                bingmapKey={bingmapKey}
                pushPins={pushPins}
                polyline={polyline}
              />
        </div>
    )
}

export default Map;