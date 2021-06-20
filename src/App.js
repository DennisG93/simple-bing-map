import React, {useState, useEffect} from 'react';
import Map from './Components/maps/Map';
import MarkersForm from './Components/markers-form/MarkersForm';
import {createNewPushPin} from './Components/maps/utils';
import './App.css';

const App = () => {
      const [pushPins, setPushPins] = useState([]);
      const [polyline, setPolyline] = useState({
        location: [],
        option: {
          strokeColor: "red",
          strokeThickness: 10,
        }
      });

      useEffect(() => {
        const location = pushPins.map(({location}) => location)
        setPolyline(prevPolyline => ({...prevPolyline, location}));
      }, [pushPins])

      const addPushPin = (values) => {
        setPushPins(prevPushPins => prevPushPins.concat(createNewPushPin(values)))
      }

    return (
      <div className="map-form-container">
        <MarkersForm onSubmit={addPushPin} />
          <div className="maps-wrapper">
            <Map pushPins={pushPins} polyline={polyline}/>
          </div>
      </div>
    );
}

export default App;
