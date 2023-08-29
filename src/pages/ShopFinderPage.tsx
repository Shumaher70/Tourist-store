import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Typography, Spinner } from '@material-tailwind/react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

import { useRef, useState, useEffect, ReactElement, ReactNode } from 'react';
import PageMissed from './pageMissed/PageMissed';
import React from 'react';
import { nanoid } from '@reduxjs/toolkit';

const tourStops: [google.maps.LatLngLiteral, string, string, string][] = [
  [
    { lat: 51.219964, lng: 6.779361 },
    'Globetrotter',
    'Richmodstraße 10',
    '50667 Köln',
  ],
  [
    { lat: 50.934861, lng: 6.957111 },
    'Unterwegs',
    'Kasinostraße 13-15',
    '47051 Duisburg',
  ],
  [
    { lat: 50.938119, lng: 6.947741 },
    'Globetrotter',
    'Richmodstraße 10',
    '50667 Köln',
  ],
  [
    { lat: 50.926629, lng: 6.958961 },
    'Unterwegs',
    'Rosenstraße 10-13',
    '48143 Münster',
  ],
  [
    { lat: 52.019865, lng: 18.528776 },
    'Unterwegs',
    'Obernstraße 38',
    '33602 Bielefeld',
  ],
];

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <Spinner />;
  if (status === Status.FAILURE) return <PageMissed />;
  return <Map />;
};

interface markerProps extends google.maps.MarkerOptions {
  options?: google.maps.MarkerOptions;
  magazine?: string;
  address?: string;
  postAdress?: string;
}

export const Marker: React.FC<markerProps> = ({
  magazine,
  address,
  postAdress,
  ...options
}) => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  const popupContern =
    '<div class="textContent"><h5>' +
    magazine +
    '</h5><p>' +
    address +
    '</p><p>' +
    postAdress +
    '</p></div>';

  const infoWindow = new google.maps.InfoWindow({
    content: popupContern,
  });

  marker?.addListener('click', () => {
    infoWindow.close();
    infoWindow.open(marker.getMap(), marker);
  });

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

interface mapProps {
  children?: ReactNode;
}

export const Map = ({ children }: mapProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: { lat: 50.938119, lng: 6.947741 },
          zoom: 10,
        })
      );
    }
  }, [ref, map]);

  return (
    <>
      <div className="w-full h-full" ref={ref} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          // @ts-ignore
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const ShopFinderPage = () => {
  const navHeight = useSelector((state: RootState) => state.size.heightNav);

  return (
    <div style={{ paddingTop: `${navHeight}px` }}>
      <Typography variant="h1" className="text-center mt-10">
        OUR DETAILS
      </Typography>

      <Wrapper apiKey="" render={render}>
        <div className="px-[5%] py-[2%] h-[600px]">
          <Map>
            {tourStops.map(([position, magazine, address, postAdress]) => {
              return (
                <Marker
                  key={nanoid()}
                  position={position}
                  magazine={magazine}
                  address={address}
                  postAdress={postAdress}
                />
              );
            })}
          </Map>
        </div>
      </Wrapper>
    </div>
  );
};

export default ShopFinderPage;
