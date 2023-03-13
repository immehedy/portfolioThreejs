
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
    //   projection="geoAzimuthalEqualArea"
    //   projectionConfig={{
    //     rotate: [-80.0, -50.0, 0],
    //     center: [-15, -5],
    //     scale: 400
    //   }}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <Geographies
        geography="/features.json"
        // fill="#D6D6DA"
        stroke="#2C065D"
        strokeWidth={0.2}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>

      <Annotation
        subject={[90.4125, 23.8103]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Dhaka"}
        </text>
      </Annotation>
    </ComposableMap>
    
  );
};

export default MapChart;