import "./style.css";

import { YMaps, Map, Placemark } from "react-yandex-maps";

const Maps = () => (
  <YMaps>
    <div className="branches">
      <Map
        defaultState={{ center: [41.288899, 69.227586], zoom: 12 }}
        width={1680}
        height={870}
      >
        <Placemark defaultGeometry={[41.288899, 69.227586]} />
      </Map>
    </div>
  </YMaps>
);

export default Maps;
