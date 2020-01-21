import React, {useState, useEffect} from 'react';
import { Scene, LineLayer, PointLayer } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';
import './App.css';

function App() {
  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new Mapbox({
        pitch: 20,
        style: 'normal',
        center: [ 114.40419128403744, 30.5362960338081 ],
        zoom: 3.5,
      })
    });
    
    Promise.all([
      fetch('https://gw.alipayobjects.com/os/basement_prod/dbd008f1-9189-461c-88aa-569357ffc07d.json').then(d => d.json()),
      fetch('https://gw.alipayobjects.com/os/basement_prod/4472780b-fea1-4fc2-9e4b-3ca716933dc7.json').then(d => d.text()),
    ]).then(function onLoad([ world, dot ]) {
      const flyline = [
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "100.992541, 15.870032"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "114.727669, 4.535277"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "9.501785, 56.26392"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "-66.590149, 18.220833"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "174.885971, -40.900557"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "104.990963, 12.565679"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "6.129582999999999, 49.815273"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "8.468945999999999, 60.47202399999999"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "108.277199, 14.058324"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "-95.712891, 37.09024"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "121.49917, 25.12653"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "-9.429499000000002, 6.428055"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "127.766922, 35.907757"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "10.451526, 51.165691"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "23.881275, 55.169438"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "34.851612, 31.046051"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "53.847818, 23.424076"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "102.495496, 19.85627"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "21.824312, 39.074208"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "25.48583, 42.733883"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "15.472962, 49.81749199999999"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "78.96288, 20.593684"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "-3.435973, 55.378051"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "33.429859, 35.126413"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "8.227511999999999, 46.818188"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "114.066662, 22.588638"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "14.550072, 47.516231"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "2.213749, 46.227638"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "12.56738, 41.87194"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "105.318756, 61.52401"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "80.77179699999999, 7.873053999999999"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "5.291265999999999, 52.132633"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "35.243322, 38.963745"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "18.643501, 60.12816100000001"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "25.748151, 61.92410999999999"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "-3.74922, 40.46366700000001"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "113.551538, 22.109432"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "4.469936, 50.503887"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "-106.346771, 56.130366"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "138.252924, 36.204824"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "17.679076, 43.915886"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "-88.49765, 17.189877"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "25.013607, 58.595272"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "101.975766, 4.210484"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "-8.24389, 53.41291"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "-8.224454, 39.39987199999999"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "133.775136, -25.274398"
        },
        {
          from: "114.40419128403744, 30.5362960338081",
          to: "121.774017, 12.879721"
        }
      ];
      const dotData = eval(dot);
      const flydata = eval(flyline).map(item => {
        const latlng1 = item.from.split(',').map(e => { return e * 1; });
        const latlng2 = item.to.split(',').map(e => { return e * 1; });
        return { coord: [ latlng1, latlng2 ] };
      });
      const worldLine = new LineLayer()
        .source(world)
        .size(0.5)
        .style({
          opacity: 1.0
        });
      const dotPoint = new PointLayer()
        .source(dotData, {
          parser: {
            type: 'json',
            x: 'lng',
            y: 'lat'
          }
        })
        .shape('circle')
        .color('#ffed11')
        .animate(true)
        .size(40)
        .style({
          opacity: 1.0
        });
      const flyLine = new LineLayer()
        .source(flydata, {
          parser: {
            type: 'json',
            coordinates: 'coord'
          }
        })
        .color('#ff6b34')
        .shape('arc3d')
        .size(2)
        .active(true)
        .animate({
          interval: 2,
          trailLength: 2,
          duration: 1
        })
        .style({
          opacity: 1
        });
      scene.addLayer(worldLine);
      scene.addLayer(dotPoint);
      scene.addLayer(flyLine);
      scene.on('click', ev => {
        console.log('ev: ', ev);
      });
    });
  });
  return (
    <div className="App" id="map">
     
    </div>
  );
}

export default App;
