TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "id": "panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1_t.jpg",
  "mapLocations": [
   {
    "x": 1389.68,
    "map": {
     "fieldOfViewOverlayInsideOpacity": 0.23,
     "id": "map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
     "fieldOfViewOverlayInsideColor": "#0099FF",
     "initialZoomFactor": 1,
     "height": 1636,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "minimumZoomFactor": 0.5,
     "width": 2594,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 1009,
        "width": 1600,
        "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 504,
        "grayscale": true,
        "width": 800,
        "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_lq.png",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "thumbnailUrl": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_t.png",
     "class": "Map",
     "label": "Jenkins Floor Plan3",
     "maximumZoomFactor": 1.2,
     "overlays": [
      {
       "id": "overlay_B305B518_A9FF_7CFC_41E4_90319EE3DB3F",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1344.83,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 209.23
       },
       "data": {
        "label": "Entry"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 1344.68,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "y": 209.1,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_BC111DD1_A9FE_AF4C_41B3_B43957B90DCC",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1338.21,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_1_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 530.53
       },
       "data": {
        "label": "Hallway"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 1338.11,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "y": 530.44,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_1.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_B3EF9E33_A9FD_ACCC_41BE_D5EC6753495B",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1734.26,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_2_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 655.53
       },
       "data": {
        "label": "Living Room"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 1734.15,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "y": 655.44,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_2.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_B4B1EA4E_AE05_7554_41A4_255798BA0932",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 2173.84,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_3_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 476.61
       },
       "data": {
        "label": "Den"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 2173.74,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "y": 476.57,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_3.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_B4AB7C34_AE05_6D34_41A2_9B8C2DDDF534",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1778.89,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_4_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 329.3
       },
       "data": {
        "label": "Kitchen"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 1778.82,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "y": 329.22,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_4.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_B551288B_AE07_95DC_41B9_03FA1746FDA2",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1805.55,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_5_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 925.29
       },
       "data": {
        "label": "Living Room"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 1805.48,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "y": 925.17,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_5.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_B558A716_AE05_9CF4_41D4_16923EF1D207",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1294.08,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_6_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 629.96
       },
       "data": {
        "label": "Hallway"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 1294,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "y": 629.92,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_6.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_B6490899_AE05_95FD_41D4_F0443868A4BB",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1203.63,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_7_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 1100.94
       },
       "data": {
        "label": "Den"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 7)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 1203.53,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "y": 1100.85,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_7.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_B6D4154B_AE02_FF5C_41CB_E717559D3748",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1184.08,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_8_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 377.38
       },
       "data": {
        "label": "Bath 2"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 8)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 1184.01,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "y": 377.27,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_8.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_B6B7EFAE_AE03_EBD7_41E3_BFB0CC07A802",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 926.27,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_9_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 653.65
       },
       "data": {
        "label": "Hallway/Utility"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 9)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 926.11,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "y": 653.57,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_9.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_B670BF27_AE02_ACD4_41AF_E94A3A54B632",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 675.48,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_10_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 1130.07
       },
       "data": {
        "label": "Bedroom 2"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 10)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 675.34,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "y": 1129.95,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_10.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_B6CA319E_AE0D_97F4_4194_474BBD2DF41A",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 699.47,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_11_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 643.48
       },
       "data": {
        "label": "Master Bed"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 11)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 699.37,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "y": 643.43,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_11.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_B7B6E127_AE0E_94D4_41E0_EDAB50061298",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 689.5,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_12_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 305.6
       },
       "data": {
        "label": "Master Bed/Closet"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 12)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 689.42,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "y": 305.57,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_12.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_B7928F4F_AE0F_AB55_41DA_9AE1F33D4A4A",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 232.23,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_13_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 691.18
       },
       "data": {
        "label": "Master Bed/Bath"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 13)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 232.18,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "y": 691.11,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_13.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_B05EB7FC_AE0E_9B34_41E5_58808C4404BA",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 241.42,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_14_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 1006.15
       },
       "data": {
        "label": "Master Bath"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 14)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 241.38,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "y": 1006.07,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E_HS_14.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      }
     ],
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "fieldOfViewOverlayRadiusScale": 0.2
    },
    "y": 254.1,
    "angle": 136.99,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfov": 360,
  "label": "Entry",
  "vfov": 180,
  "class": "Panorama",
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "displayPlaybackBar": true,
  "buttonZoomOut": {
   "toolTipShadowVerticalLength": 0,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "toolTipFontFamily": "Arial",
   "toolTipPaddingLeft": 6,
   "paddingRight": 0,
   "toolTipOpacity": 1,
   "toolTipDisplayTime": 600,
   "mode": "push",
   "width": 30,
   "toolTipPaddingTop": 4,
   "horizontalAlign": "center",
   "height": 30,
   "toolTip": "Zoom Out",
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipShadowHorizontalLength": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "toolTipTextShadowOpacity": 0,
   "borderRadius": 0,
   "class": "IconButton",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowSpread": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "toolTipShadowOpacity": 1,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipPaddingBottom": 4,
   "minHeight": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1207"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "toolTipBorderColor": "#767676",
   "toolTipFontColor": "#606060",
   "toolTipFontStyle": "normal",
   "paddingLeft": 0,
   "toolTipFontWeight": "normal",
   "toolTipFontSize": 12,
   "toolTipBorderRadius": 3,
   "paddingTop": 0,
   "toolTipPaddingRight": 6
  },
  "class": "PanoramaPlayer",
  "buttonPause": {
   "borderSize": 0,
   "paddingRight": 0,
   "mode": "toggle",
   "width": 40,
   "horizontalAlign": "center",
   "height": 40,
   "borderRadius": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D_pressed.png",
   "iconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "minHeight": 0,
   "shadow": false,
   "id": "IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1167"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "paddingLeft": 0,
   "paddingTop": 0
  },
  "buttonPlayLeft": [
   {
    "borderSize": 0,
    "paddingRight": 0,
    "mode": "push",
    "width": 38,
    "horizontalAlign": "center",
    "height": 38,
    "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
    "borderRadius": 0,
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
    "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
    "minWidth": 0,
    "cursor": "hand",
    "paddingBottom": 0,
    "minHeight": 0,
    "shadow": false,
    "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
    "backgroundOpacity": 0,
    "data": {
     "name": "Button1196"
    },
    "verticalAlign": "middle",
    "transparencyActive": false,
    "paddingLeft": 0,
    "paddingTop": 0
   },
   "this.IconButton_BF08CD32_B1E0_B9EA_41DE_32F63A167D6B"
  ],
  "viewerArea": "this.MainViewer",
  "buttonPlayRight": {
   "borderSize": 0,
   "paddingRight": 0,
   "mode": "push",
   "width": 38,
   "horizontalAlign": "center",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "borderRadius": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "minHeight": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1198"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "paddingLeft": 0,
   "paddingTop": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonRestart": {
   "borderSize": 0,
   "paddingRight": 0,
   "mode": "push",
   "width": 38,
   "horizontalAlign": "center",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "borderRadius": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "minHeight": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1195"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "paddingLeft": 0,
   "paddingTop": 0
  },
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "buttonZoomIn": {
   "toolTipShadowVerticalLength": 0,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "toolTipFontFamily": "Arial",
   "toolTipPaddingLeft": 6,
   "paddingRight": 0,
   "toolTipOpacity": 1,
   "toolTipDisplayTime": 600,
   "mode": "push",
   "width": 30,
   "toolTipPaddingTop": 4,
   "horizontalAlign": "center",
   "height": 30,
   "toolTip": "Zoom In",
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipShadowHorizontalLength": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "toolTipTextShadowOpacity": 0,
   "borderRadius": 0,
   "class": "IconButton",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowSpread": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "toolTipShadowOpacity": 1,
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipPaddingBottom": 4,
   "minHeight": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1208"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "toolTipBorderColor": "#767676",
   "toolTipFontColor": "#606060",
   "toolTipFontStyle": "normal",
   "paddingLeft": 0,
   "toolTipFontWeight": "normal",
   "toolTipFontSize": 12,
   "toolTipBorderRadius": 3,
   "paddingTop": 0,
   "toolTipPaddingRight": 6
  },
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "buttonZoomOut": "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
  "movementMode": "constrained",
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "buttonZoomIn": "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
  "viewerArea": {
   "borderSize": 0,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "toolTipOpacity": 1,
   "toolTipPaddingLeft": 6,
   "toolTipPaddingRight": 6,
   "toolTipFontFamily": "Arial",
   "toolTipDisplayTime": 600,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipPaddingTop": 4,
   "playbackBarBorderRadius": 4,
   "toolTipTextShadowOpacity": 0,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipTextShadowBlurRadius": 3,
   "borderRadius": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBarBorderSize": 1,
   "toolTipShadowSpread": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "paddingBottom": 0,
   "transitionMode": "blending",
   "progressBarOpacity": 1,
   "toolTipShadowOpacity": 1,
   "playbackBarOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "progressBackgroundOpacity": 1,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarRight": 0,
   "shadow": false,
   "progressBarBorderRadius": 4,
   "playbackBarBackgroundColorDirection": "vertical",
   "minHeight": 1,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadShadow": true,
   "playbackBarHeight": 20,
   "toolTipFontColor": "#606060",
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "transitionDuration": 500,
   "paddingTop": 0,
   "toolTipFontSize": 12,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipShadowVerticalLength": 0,
   "progressHeight": 20,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "progressBottom": 2,
   "paddingRight": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarBorderColor": "#AAAAAA",
   "height": "100%",
   "progressOpacity": 1,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "playbackBarBottom": 0,
   "playbackBarHeadBorderSize": 0,
   "progressBorderColor": "#AAAAAA",
   "class": "ViewerArea",
   "playbackBarHeadHeight": 30,
   "progressRight": 10,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "progressBarBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "width": "100%",
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarBorderSize": 2,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarProgressOpacity": 1,
   "minWidth": 1,
   "toolTipPaddingBottom": 4,
   "top": "0%",
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "id": "MapViewer",
   "progressBorderRadius": 4,
   "progressLeft": 10,
   "toolTipBorderColor": "#767676",
   "paddingLeft": 0,
   "playbackBarHeadShadowOpacity": 0.7,
   "toolTipFontWeight": "normal",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "left": "0%",
   "playbackBarHeadBorderRadius": 0,
   "progressBorderSize": 2,
   "toolTipBorderSize": 1,
   "playbackBarProgressBorderColor": "#000000"
  }
 },
 {
  "id": "panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -146.65,
   "class": "PanoramaCameraPosition",
   "pitch": -9.21
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 27.51,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": -6.85,
     "pitchSpeed": 17.05
    },
    {
     "targetYaw": 50.62,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 50.45,
     "easing": "cubic_in_out",
     "targetPitch": -7.98,
     "pitchSpeed": 25.61
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "id": "panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F_t.jpg",
  "mapLocations": [
   {
    "x": 1383.11,
    "map": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "y": 575.44,
    "angle": 141.87,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfov": 360,
  "label": "Hallway",
  "vfov": 180,
  "class": "Panorama",
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "id": "panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 112.3,
   "class": "PanoramaCameraPosition",
   "pitch": -4.4
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -28.26,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.96,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "id": "panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757_t.jpg",
  "mapLocations": [
   {
    "x": 1779.15,
    "map": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "y": 700.44,
    "angle": 123.38,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfov": 360,
  "label": "Living Room",
  "vfov": 180,
  "class": "Panorama",
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "id": "panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 96.97,
   "class": "PanoramaCameraPosition",
   "pitch": 1.38
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -138.17,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.58,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "id": "panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6_t.jpg",
  "mapLocations": [
   {
    "x": 2218.74,
    "map": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "y": 521.57,
    "angle": 136.54,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfov": 360,
  "label": "Den",
  "vfov": 180,
  "class": "Panorama",
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "id": "panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -45.47,
   "class": "PanoramaCameraPosition",
   "pitch": -5.28
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 131.01,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.96,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "id": "panorama_B92D9117_AA0D_74F4_41E3_27D12029F811",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B92D9117_AA0D_74F4_41E3_27D12029F811_t.jpg",
  "mapLocations": [
   {
    "x": 1823.82,
    "map": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "y": 374.22,
    "angle": 134.85,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfov": 360,
  "label": "Kitchen",
  "vfov": 180,
  "class": "Panorama",
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B92D9117_AA0D_74F4_41E3_27D12029F811_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_B92D9117_AA0D_74F4_41E3_27D12029F811_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B92D9117_AA0D_74F4_41E3_27D12029F811.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "id": "panorama_B92D9117_AA0D_74F4_41E3_27D12029F811_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -130.51,
   "class": "PanoramaCameraPosition",
   "pitch": -4.9
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 44.47,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.2,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "id": "panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F_t.jpg",
  "mapLocations": [
   {
    "x": 1850.48,
    "map": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "y": 970.17,
    "angle": 134.19,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfov": 360,
  "label": "Living Room",
  "vfov": 180,
  "class": "Panorama",
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "id": "panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -27.63,
   "class": "PanoramaCameraPosition",
   "pitch": -1.13
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 133.4,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 1.57,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "id": "panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C_t.jpg",
  "mapLocations": [
   {
    "x": 1339,
    "map": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "y": 674.92,
    "angle": 122.86,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfov": 360,
  "label": "Hallway",
  "vfov": 180,
  "class": "Panorama",
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "id": "panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -31.65,
   "class": "PanoramaCameraPosition",
   "pitch": -2.01
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 98.86,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.07,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "id": "panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C_t.jpg",
  "mapLocations": [
   {
    "x": 1248.53,
    "map": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "y": 1145.85,
    "angle": 133.82,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfov": 360,
  "label": "Den",
  "vfov": 180,
  "class": "Panorama",
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "id": "panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 79.64,
   "class": "PanoramaCameraPosition",
   "pitch": 5.78
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -127.62,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.2,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "id": "panorama_BF777C42_AA0D_AD4C_41C5_39574D599428",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_BF777C42_AA0D_AD4C_41C5_39574D599428_t.jpg",
  "mapLocations": [
   {
    "x": 1229.01,
    "map": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "y": 422.27,
    "angle": 138.7,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfov": 360,
  "label": "Bath 2",
  "vfov": 180,
  "class": "Panorama",
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BF777C42_AA0D_AD4C_41C5_39574D599428_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_BF777C42_AA0D_AD4C_41C5_39574D599428_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_BF777C42_AA0D_AD4C_41C5_39574D599428.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "id": "panorama_BF777C42_AA0D_AD4C_41C5_39574D599428_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -137.79,
   "class": "PanoramaCameraPosition",
   "pitch": 10.68
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 63.94,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 6.85,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "frameDisplayTime": 2000,
  "hfovMin": 60,
  "id": "panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_1_t.jpg",
  "mapLocations": [
   {
    "x": 971.11,
    "map": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "y": 698.57,
    "angle": 96.57,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfov": 360,
  "label": "Hallway/Utility",
  "vfov": 180,
  "class": "LivePanorama",
  "frameTransitionTime": 2000,
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_0.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   },
   {
    "thumbnailUrl": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_1.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   },
   {
    "thumbnailUrl": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_2_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_2_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_2.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "id": "panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -32.03,
   "class": "PanoramaCameraPosition",
   "pitch": 1.76
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 107.52,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.31,
     "pitchSpeed": 17.05
    },
    {
     "targetYaw": -165.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.44,
     "pitchSpeed": 17.05
    },
    {
     "targetYaw": -61.67,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.31,
     "pitchSpeed": 17.05
    },
    {
     "targetYaw": -173.59,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.19,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "id": "panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB_t.jpg",
  "mapLocations": [
   {
    "x": 720.34,
    "map": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "y": 1174.95,
    "angle": 133.86,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfov": 360,
  "label": "Bedroom 2",
  "vfov": 180,
  "class": "Panorama",
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "id": "panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 86.67,
   "class": "PanoramaCameraPosition",
   "pitch": 4.52
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -94.33,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.33,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "id": "panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A_t.jpg",
  "mapLocations": [
   {
    "x": 744.37,
    "map": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "y": 688.43,
    "angle": 134.3,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfov": 360,
  "label": "Master Bedroom",
  "vfov": 180,
  "class": "Panorama",
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "id": "panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -42.33,
   "class": "PanoramaCameraPosition",
   "pitch": 1.26
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 154.25,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 3.45,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "id": "panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955_t.jpg",
  "mapLocations": [
   {
    "x": 734.42,
    "map": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "y": 350.57,
    "angle": 142.22,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfov": 360,
  "label": "Master Bed/Closet",
  "vfov": 180,
  "class": "Panorama",
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "id": "panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -52,
   "class": "PanoramaCameraPosition",
   "pitch": 9.42
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 94.21,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.94,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "id": "panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99_t.jpg",
  "mapLocations": [
   {
    "x": 277.18,
    "map": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "y": 736.11,
    "angle": 139.97,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfov": 360,
  "label": "Master Bed/Bath",
  "vfov": 180,
  "class": "Panorama",
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "id": "panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -101.74,
   "class": "PanoramaCameraPosition",
   "pitch": -3.64
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 52,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.44,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMin": 60,
  "id": "panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB_t.jpg",
  "mapLocations": [
   {
    "x": 286.38,
    "map": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "y": 1051.07,
    "angle": 126.49,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfov": 360,
  "label": "Master Bath",
  "vfov": 180,
  "class": "Panorama",
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "id": "panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -124.23,
   "class": "PanoramaCameraPosition",
   "pitch": 3.39
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 64.69,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 1.07,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "thumbnailUrl": "media/video_AD1FC44F_B602_9D54_41C5_7631FD2BE57A_t.jpg",
  "class": "Video",
  "label": "Drone Video",
  "video": {
   "height": 1080,
   "mp4Url": "media/video_AD1FC44F_B602_9D54_41C5_7631FD2BE57A.mp4",
   "width": 1920,
   "class": "VideoResource"
  },
  "width": 1920,
  "id": "video_AD1FC44F_B602_9D54_41C5_7631FD2BE57A",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "class": "VideoPlayer",
  "buttonPause": "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
  "viewerArea": "this.MainViewer"
 },
 {
  "thumbnailUrl": "media/video_BD6A2B94_AA02_ABF4_41D0_0478343EFDEF_t.jpg",
  "class": "Video",
  "label": "Interior Video Tour",
  "video": {
   "height": 1080,
   "mp4Url": "media/video_BD6A2B94_AA02_ABF4_41D0_0478343EFDEF.mp4",
   "width": 1920,
   "class": "VideoResource"
  },
  "width": 1920,
  "id": "video_BD6A2B94_AA02_ABF4_41D0_0478343EFDEF",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_BF1C441D_B1E0_8FDF_41D1_6C66E15F1E44, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_BF1C441D_B1E0_8FDF_41D1_6C66E15F1E44",
    "media": "this.panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_BF1BD41D_B1E0_8FDF_41D0_2A9BE2FF0DF9, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_BF1BD41D_B1E0_8FDF_41D0_2A9BE2FF0DF9",
    "media": "this.panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_BF1B041D_B1E0_8FDF_41BD_5CD94005D388, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_BF1B041D_B1E0_8FDF_41BD_5CD94005D388",
    "media": "this.panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_BF1AB41D_B1E0_8FDF_41E0_8D00FD3278B2, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_BF1AB41D_B1E0_8FDF_41E0_8D00FD3278B2",
    "media": "this.panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_BF1AE41D_B1E0_8FDF_41C9_D64E200118AE, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_BF1AE41D_B1E0_8FDF_41C9_D64E200118AE",
    "media": "this.panorama_B92D9117_AA0D_74F4_41E3_27D12029F811",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B92D9117_AA0D_74F4_41E3_27D12029F811_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_BF1A141D_B1E0_8FDF_41E1_232C96112365, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_BF1A141D_B1E0_8FDF_41E1_232C96112365",
    "media": "this.panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_BF1A441E_B1E0_8FDD_41E1_5F447DC229E9, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_BF1A441E_B1E0_8FDD_41E1_5F447DC229E9",
    "media": "this.panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_BF19F41E_B1E0_8FDD_41E6_06090F8B8FAC, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_BF19F41E_B1E0_8FDD_41E6_06090F8B8FAC",
    "media": "this.panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_BF19241E_B1E0_8FDD_41C5_ACD297084F55, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_BF19241E_B1E0_8FDD_41C5_ACD297084F55",
    "media": "this.panorama_BF777C42_AA0D_AD4C_41C5_39574D599428",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BF777C42_AA0D_AD4C_41C5_39574D599428_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_BF19541E_B1E0_8FDD_41DB_B8551EDAD9A1, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "id": "PanoramaPlayListItem_BF19541E_B1E0_8FDD_41DB_B8551EDAD9A1",
    "media": "this.panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_BF18F41E_B1E0_8FDD_41B8_352A76EE9B5A, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_BF18F41E_B1E0_8FDD_41B8_352A76EE9B5A",
    "media": "this.panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_BF18241F_B1E0_8FDB_41E3_5F5F7179D72E, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_BF18241F_B1E0_8FDB_41E3_5F5F7179D72E",
    "media": "this.panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_BF18541F_B1E0_8FDB_41CE_22EF35F5D12D, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_BF18541F_B1E0_8FDB_41CE_22EF35F5D12D",
    "media": "this.panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_BF67841F_B1E0_8FDB_41D2_FDAD4BE777B0, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_BF67841F_B1E0_8FDB_41D2_FDAD4BE777B0",
    "media": "this.panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_BF67341F_B1E0_8FDB_41DA_C0728BEAB09D, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_BF67341F_B1E0_8FDB_41DA_C0728BEAB09D",
    "media": "this.panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_AD1FC44F_B602_9D54_41C5_7631FD2BE57A",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 15, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 15, this.video_AD1FC44F_B602_9D54_41C5_7631FD2BE57A)"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 0)",
    "media": "this.video_BD6A2B94_AA02_ABF4_41D0_0478343EFDEF",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "end": "this.trigger('tourEnded')",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 16, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 16, this.video_BD6A2B94_AA02_ABF4_41D0_0478343EFDEF)"
   }
  ]
 },
 {
  "id": "thumbnaillist5245_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "media": "this.panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "media": "this.panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
    "media": "this.panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "media": "this.panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "media": "this.panorama_B92D9117_AA0D_74F4_41E3_27D12029F811",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B92D9117_AA0D_74F4_41E3_27D12029F811_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "media": "this.panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
    "media": "this.panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
    "media": "this.panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)",
    "media": "this.panorama_BF777C42_AA0D_AD4C_41C5_39574D599428",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BF777C42_AA0D_AD4C_41C5_39574D599428_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)",
    "media": "this.panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 11)",
    "media": "this.panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 11, 12)",
    "media": "this.panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 12, 13)",
    "media": "this.panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 13, 14)",
    "media": "this.panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 14, 0)",
    "media": "this.panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_AD1FC44F_B602_9D54_41C5_7631FD2BE57A",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 0, 1)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 0, this.video_AD1FC44F_B602_9D54_41C5_7631FD2BE57A)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_BD6A2B94_AA02_ABF4_41D0_0478343EFDEF",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 1, 0)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 1, this.video_BD6A2B94_AA02_ABF4_41D0_0478343EFDEF)"
   }
  ]
 },
 {
  "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 0, 1)",
    "media": "this.panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 1, 2)",
    "media": "this.panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 2, 3)",
    "media": "this.panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 3, 4)",
    "media": "this.panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 4, 5)",
    "media": "this.panorama_B92D9117_AA0D_74F4_41E3_27D12029F811",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B92D9117_AA0D_74F4_41E3_27D12029F811_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 5, 6)",
    "media": "this.panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 6, 7)",
    "media": "this.panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 7, 8)",
    "media": "this.panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 8, 9)",
    "media": "this.panorama_BF777C42_AA0D_AD4C_41C5_39574D599428",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BF777C42_AA0D_AD4C_41C5_39574D599428_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 9, 10)",
    "media": "this.panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 10, 11)",
    "media": "this.panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 11, 12)",
    "media": "this.panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 12, 13)",
    "media": "this.panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 13, 14)",
    "media": "this.panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 14, 15)",
    "media": "this.panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_AD1FC44F_B602_9D54_41C5_7631FD2BE57A",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 15, 16)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 15, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 15, this.video_AD1FC44F_B602_9D54_41C5_7631FD2BE57A)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_BD6A2B94_AA02_ABF4_41D0_0478343EFDEF",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 16, 0)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 16, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 16, this.video_BD6A2B94_AA02_ABF4_41D0_0478343EFDEF)"
   }
  ]
 },
 "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
 {
  "id": "playList_BF1CF41C_B1E0_8FDD_41E4_90509F8AEE3E",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "id": "playList_BF1CD41C_B1E0_8FDD_41D0_676C3C3CB33E",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B3C1CD12_A9FD_ACCC_41C6_DA8B81313D1E",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "data": {
   "label": "Woke up to the sunrise, golden on the ba (1)"
  },
  "id": "audio_BC582054_AA07_B54B_41E4_8B55163DA0BB",
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "mp3Url": "media/audio_BC582054_AA07_B54B_41E4_8B55163DA0BB.mp3",
   "oggUrl": "media/audio_BC582054_AA07_B54B_41E4_8B55163DA0BB.ogg",
   "class": "AudioResource"
  }
 },
 {
  "data": {
   "label": "Woke up to the sunrise, golden on the ba"
  },
  "id": "audio_BC336061_AA07_B54C_41E3_B83C04629FA0",
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "mp3Url": "media/audio_BC336061_AA07_B54C_41E3_B83C04629FA0.mp3",
   "oggUrl": "media/audio_BC336061_AA07_B54C_41E3_B83C04629FA0.ogg",
   "class": "AudioResource"
  }
 }
], "children": [
 {
  "borderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipOpacity": 1,
  "toolTipPaddingLeft": 6,
  "toolTipPaddingRight": 6,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipPaddingTop": 4,
  "playbackBarBorderRadius": 4,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "borderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBarBorderSize": 1,
  "toolTipShadowSpread": 0,
  "transitionMode": "blending",
  "progressBarOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "paddingBottom": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarRight": 0,
  "shadow": false,
  "progressBarBorderRadius": 4,
  "playbackBarProgressBorderSize": 0,
  "minHeight": 50,
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "playbackBarHeight": 20,
  "toolTipFontColor": "#606060",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipFontSize": 12,
  "paddingTop": 0,
  "transitionDuration": 500,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowVerticalLength": 0,
  "progressHeight": 20,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBottom": 1,
  "paddingRight": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderColor": "#AAAAAA",
  "progressOpacity": 1,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "playbackBarBottom": 10,
  "playbackBarHeadBorderSize": 0,
  "progressBorderColor": "#AAAAAA",
  "class": "ViewerArea",
  "playbackBarHeadHeight": 30,
  "progressRight": 10,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBorderSize": 2,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressOpacity": 1,
  "minWidth": 100,
  "toolTipPaddingBottom": 4,
  "top": 77,
  "playbackBarHeadOpacity": 1,
  "bottom": 92,
  "id": "MainViewer",
  "progressBorderRadius": 4,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressLeft": 10,
  "toolTipBorderColor": "#767676",
  "toolTipFontStyle": "normal",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipFontWeight": "normal",
  "paddingLeft": 0,
  "left": 0,
  "toolTipBorderRadius": 3,
  "right": 0,
  "toolTipBorderSize": 1,
  "playbackBarProgressBorderColor": "#000000",
  "progressBorderSize": 2
 },
 {
  "borderSize": 0,
  "backgroundColor": [
   "#000000"
  ],
  "horizontalAlign": "left",
  "itemThumbnailShadowBlurRadius": 4,
  "selectedItemLabelFontWeight": "bold",
  "borderRadius": 5,
  "selectedItemLabelFontColor": "#FFFF00",
  "backgroundColorDirection": "vertical",
  "layout": "vertical",
  "backgroundColorRatios": [
   0
  ],
  "itemThumbnailShadowOpacity": 0.8,
  "paddingBottom": 10,
  "itemVerticalAlign": "middle",
  "shadow": false,
  "rollOverItemLabelFontWeight": "bold",
  "minHeight": 0,
  "playList": "this.thumbnaillist5245_playlist",
  "backgroundOpacity": 0.2,
  "itemLabelTextDecoration": "none",
  "itemLabelFontWeight": "normal",
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontSize": 14,
  "itemThumbnailHeight": 70,
  "itemThumbnailScaleMode": "fit_outside",
  "maxHeight": 800,
  "itemPaddingBottom": 3,
  "paddingTop": 10,
  "paddingRight": 20,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 8,
  "width": 158.5,
  "itemPaddingTop": 3,
  "itemLabelFontFamily": "Arial",
  "itemPaddingRight": 3,
  "itemLabelFontColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "class": "ThumbnailList",
  "scrollBarWidth": 10,
  "itemThumbnailShadowColor": "#000000",
  "itemThumbnailBorderRadius": 5,
  "itemMode": "normal",
  "scrollBarMargin": 2,
  "minWidth": 0,
  "itemHorizontalAlign": "center",
  "top": "8.02%",
  "maxWidth": 800,
  "rollOverItemLabelFontColor": "#FF0000",
  "bottom": "10.1%",
  "itemThumbnailShadow": true,
  "id": "thumbnaillist5245",
  "itemBorderRadius": 0,
  "verticalAlign": "top",
  "itemOpacity": 1,
  "itemThumbnailOpacity": 1,
  "itemLabelFontStyle": "normal",
  "itemBackgroundColor": [],
  "data": {
   "name": "ThumbnailList28173"
  },
  "itemThumbnailShadowSpread": 1,
  "paddingLeft": 20,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemThumbnailWidth": 100,
  "itemThumbnailShadowVerticalLength": 3,
  "scrollBarOpacity": 0.5,
  "gap": 0,
  "itemPaddingLeft": 3,
  "right": "0%",
  "itemBackgroundColorRatios": [],
  "scrollBarVisible": "rollOver",
  "itemLabelPosition": "bottom"
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "textShadowBlurRadius": 4,
    "paddingRight": 0,
    "width": 554,
    "horizontalAlign": "center",
    "fontSize": 40,
    "height": "82.065%",
    "textDecoration": "none",
    "borderRadius": 0,
    "class": "Label",
    "text": "The Spruce ING 561F",
    "textShadowVerticalLength": 19,
    "textShadowOpacity": 0.49,
    "fontFamily": "Bookman Old Style",
    "fontStyle": "normal",
    "fontWeight": "bold",
    "minWidth": 30,
    "click": "this.openLink(\"https://3d-viewer.chiefarchitect.com/go?share=515465427436241\", \"_blank\")",
    "paddingBottom": 0,
    "textShadowHorizontalLength": -7,
    "minHeight": 16,
    "shadow": false,
    "id": "label4056",
    "backgroundOpacity": 0,
    "data": {
     "name": "Label28174"
    },
    "verticalAlign": "middle",
    "textShadowColor": "#663300",
    "paddingLeft": 0,
    "fontColor": "#000000",
    "paddingTop": 0
   },
   {
    "borderSize": 0,
    "children": [
     {
      "toolTipShadowVerticalLength": 0,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingLeft": 6,
      "paddingRight": 0,
      "toolTipOpacity": 1,
      "toolTipDisplayTime": 600,
      "mode": "toggle",
      "width": 40,
      "toolTipPaddingTop": 4,
      "horizontalAlign": "center",
      "height": 40,
      "toolTip": "Mute",
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowHorizontalLength": 0,
      "toolTipTextShadowOpacity": 0,
      "borderRadius": 0,
      "class": "IconButton",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowSpread": 0,
      "pressedIconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75_pressed.png",
      "toolTipShadowOpacity": 1,
      "iconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75.png",
      "minWidth": 0,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipPaddingBottom": 4,
      "minHeight": 0,
      "shadow": false,
      "id": "IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button49930"
      },
      "verticalAlign": "middle",
      "transparencyActive": true,
      "toolTipBorderColor": "#767676",
      "toolTipFontColor": "#606060",
      "toolTipFontStyle": "normal",
      "paddingLeft": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontSize": 12,
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "toolTipPaddingRight": 6
     },
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     {
      "borderSize": 0,
      "children": [
       {
        "borderSize": 0,
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247"
        ],
        "backgroundColor": [
         "#FFFFFF"
        ],
        "scrollBarVisible": "rollOver",
        "paddingRight": 0,
        "width": 47,
        "horizontalAlign": "center",
        "height": "100%",
        "scrollBarColor": "#000000",
        "borderRadius": 0,
        "class": "Container",
        "scrollBarWidth": 10,
        "backgroundColorRatios": [
         0
        ],
        "creationPolicy": "inAdvance",
        "backgroundColorDirection": "vertical",
        "layout": "vertical",
        "scrollBarMargin": 2,
        "minWidth": 20,
        "paddingBottom": 0,
        "minHeight": 20,
        "shadow": false,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "backgroundOpacity": 1,
        "data": {
         "name": "Container1202"
        },
        "verticalAlign": "middle",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingTop": 0,
        "gap": 10,
        "contentOpaque": false,
        "overflow": "hidden"
       },
       "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40"
      ],
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarVisible": "rollOver",
      "paddingRight": 0,
      "width": 133,
      "horizontalAlign": "center",
      "height": "100%",
      "scrollBarColor": "#000000",
      "borderRadius": 0,
      "class": "Container",
      "scrollBarWidth": 10,
      "backgroundColorRatios": [
       0
      ],
      "creationPolicy": "inAdvance",
      "backgroundColorDirection": "vertical",
      "layout": "horizontal",
      "scrollBarMargin": 2,
      "minWidth": 20,
      "paddingBottom": 0,
      "minHeight": 20,
      "shadow": false,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "backgroundOpacity": 1,
      "data": {
       "name": "Container1200"
      },
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "gap": 5,
      "contentOpaque": false,
      "overflow": "hidden"
     },
     {
      "borderSize": 0,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarVisible": "rollOver",
      "paddingRight": 0,
      "width": 85,
      "horizontalAlign": "center",
      "height": "100%",
      "scrollBarColor": "#000000",
      "borderRadius": 0,
      "class": "Container",
      "scrollBarWidth": 10,
      "backgroundColorRatios": [
       0
      ],
      "creationPolicy": "inAdvance",
      "backgroundColorDirection": "vertical",
      "layout": "horizontal",
      "scrollBarMargin": 2,
      "minWidth": 20,
      "paddingBottom": 0,
      "minHeight": 20,
      "shadow": false,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "backgroundOpacity": 1,
      "data": {
       "name": "Container1206"
      },
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "gap": 10,
      "contentOpaque": false,
      "overflow": "hidden"
     }
    ],
    "backgroundColor": [
     "#FFFFFF"
    ],
    "scrollBarVisible": "rollOver",
    "paddingRight": 0,
    "width": 625,
    "horizontalAlign": "center",
    "height": "93.478%",
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "class": "Container",
    "scrollBarWidth": 10,
    "backgroundColorRatios": [
     0
    ],
    "creationPolicy": "inAdvance",
    "backgroundColorDirection": "vertical",
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "minWidth": 468,
    "paddingBottom": 0,
    "minHeight": 20,
    "shadow": false,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "backgroundOpacity": 1,
    "data": {
     "name": "Container1194"
    },
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "gap": 10,
    "contentOpaque": false,
    "overflow": "hidden"
   },
   {
    "paddingTop": 10,
    "borderSize": 0,
    "horizontalAlign": "left",
    "itemBackgroundColorRatios": [],
    "paddingRight": 20,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 1,
    "width": "28.046%",
    "itemPaddingTop": 3,
    "itemThumbnailShadowBlurRadius": 8,
    "height": 92,
    "selectedItemLabelFontWeight": "bold",
    "itemPaddingRight": 3,
    "itemLabelFontColor": "#000000",
    "itemLabelFontFamily": "Arial",
    "borderRadius": 5,
    "class": "ThumbnailList",
    "scrollBarWidth": 10,
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowOpacity": 0.54,
    "layout": "horizontal",
    "itemThumbnailShadowColor": "#000000",
    "itemMode": "normal",
    "itemVerticalAlign": "middle",
    "selectedItemLabelFontColor": "#FFCC00",
    "minWidth": 20,
    "itemThumbnailBorderRadius": 2,
    "itemHorizontalAlign": "center",
    "rollOverItemLabelFontColor": "#003399",
    "rollOverItemBackgroundOpacity": 0,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "rollOverItemLabelFontWeight": "bold",
    "itemOpacity": 1,
    "minHeight": 20,
    "shadow": false,
    "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965",
    "playList": "this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
    "backgroundOpacity": 0,
    "itemBorderRadius": 0,
    "verticalAlign": "top",
    "itemThumbnailShadow": true,
    "itemLabelFontStyle": "normal",
    "itemThumbnailShadowHorizontalLength": 3,
    "itemLabelFontWeight": "normal",
    "paddingLeft": 20,
    "itemThumbnailOpacity": 1,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "itemLabelTextDecoration": "none",
    "itemThumbnailShadowVerticalLength": 3,
    "data": {
     "name": "ThumbnailList35762"
    },
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 36,
    "scrollBarOpacity": 0.5,
    "itemThumbnailScaleMode": "fit_outside",
    "gap": 13,
    "itemThumbnailShadowSpread": 1,
    "itemPaddingLeft": 3,
    "itemPaddingBottom": 3,
    "itemThumbnailWidth": 94,
    "itemBackgroundColor": [],
    "scrollBarVisible": "always",
    "itemLabelPosition": "top"
   },
   {
    "borderSize": 0,
    "horizontalAlign": "left",
    "itemBackgroundColorRatios": [],
    "paddingRight": 20,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 8,
    "width": "26.327%",
    "itemPaddingTop": 3,
    "itemThumbnailShadowBlurRadius": 8,
    "height": 82.5,
    "selectedItemLabelFontWeight": "bold",
    "itemPaddingRight": 3,
    "itemLabelFontColor": "#FFFFFF",
    "itemLabelFontFamily": "Arial",
    "borderRadius": 5,
    "class": "ThumbnailList",
    "scrollBarWidth": 10,
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowOpacity": 0.57,
    "layout": "horizontal",
    "itemThumbnailShadowColor": "#000000",
    "itemMode": "normal",
    "itemVerticalAlign": "middle",
    "selectedItemLabelFontColor": "#FFCC00",
    "minWidth": 1,
    "itemThumbnailBorderRadius": 5,
    "itemHorizontalAlign": "center",
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "visible": false,
    "itemOpacity": 1,
    "minHeight": 1,
    "shadow": false,
    "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B",
    "playList": "this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
    "backgroundOpacity": 0,
    "itemBorderRadius": 0,
    "verticalAlign": "top",
    "itemThumbnailShadow": true,
    "rollOverItemLabelFontWeight": "bold",
    "itemThumbnailShadowHorizontalLength": 3,
    "itemLabelFontWeight": "normal",
    "paddingLeft": 20,
    "itemThumbnailOpacity": 1,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "itemLabelTextDecoration": "none",
    "itemThumbnailShadowVerticalLength": 3,
    "data": {
     "name": "ThumbnailList35762"
    },
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 75,
    "scrollBarOpacity": 0.5,
    "itemLabelFontStyle": "normal",
    "itemThumbnailScaleMode": "fit_outside",
    "gap": 13,
    "itemThumbnailShadowSpread": 1,
    "itemPaddingLeft": 3,
    "itemPaddingBottom": 3,
    "paddingTop": 10,
    "itemThumbnailWidth": 100,
    "itemBackgroundColor": [],
    "scrollBarVisible": "rollOver",
    "itemLabelPosition": "bottom"
   }
  ],
  "overflow": "scroll",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "paddingRight": 0,
  "horizontalAlign": "center",
  "height": 92,
  "width": "100%",
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "class": "Container",
  "scrollBarWidth": 10,
  "backgroundColorRatios": [
   0,
   1
  ],
  "creationPolicy": "inAdvance",
  "backgroundColorDirection": "vertical",
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingBottom": 0,
  "gap": 6,
  "minHeight": 1,
  "shadow": false,
  "backgroundOpacity": 0.3,
  "data": {
   "name": "Container29432"
  },
  "verticalAlign": "middle",
  "bottom": "0%",
  "paddingLeft": 0,
  "left": "0%",
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "horizontalAlign": "center",
  "height": "7.604%",
  "width": "9.198%",
  "borderRadius": 0,
  "class": "Image",
  "url": "skin/Image_306F4727_273A_95B3_41B2_3DF89EEDBF85.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.05%",
  "maxWidth": 1467,
  "minHeight": 1,
  "id": "Image_306F4727_273A_95B3_41B2_3DF89EEDBF85",
  "backgroundOpacity": 0,
  "data": {
   "name": "Wave Logo"
  },
  "verticalAlign": "middle",
  "shadow": false,
  "paddingLeft": 0,
  "paddingTop": 0,
  "maxHeight": 817,
  "right": "0%"
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "horizontalAlign": "center",
  "height": "6.979%",
  "width": "38.151%",
  "borderRadius": 0,
  "class": "Image",
  "url": "skin/Image_3E29962B_272E_B7B3_4191_F996EF0F95BB.png",
  "click": "this.openLink(\"https://www.mtviewhomes.com\", \"_blank\")",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.31%",
  "cursor": "hand",
  "maxWidth": 1700,
  "minHeight": 1,
  "id": "Image_3E29962B_272E_B7B3_4191_F996EF0F95BB",
  "backgroundOpacity": 0,
  "data": {
   "name": "MTViewhomes"
  },
  "verticalAlign": "middle",
  "shadow": false,
  "paddingLeft": 0,
  "paddingTop": 0,
  "maxHeight": 186,
  "right": "8.53%"
 },
 {
  "borderSize": 0,
  "children": [
   "this.MapViewer"
  ],
  "overflow": "scroll",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "paddingRight": 0,
  "horizontalAlign": "left",
  "gap": 10,
  "width": "28.739%",
  "scrollBarColor": "#000000",
  "height": "33.75%",
  "borderRadius": 0,
  "class": "Container",
  "scrollBarWidth": 10,
  "backgroundColorRatios": [
   0,
   1
  ],
  "creationPolicy": "inAdvance",
  "backgroundColorDirection": "vertical",
  "layout": "absolute",
  "paddingBottom": 0,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "top": "1.82%",
  "minHeight": 1,
  "id": "Container_581FBEE1_4338_67EB_41B1_0EF3FEBC0B73",
  "backgroundOpacity": 0.3,
  "data": {
   "name": "Container24488"
  },
  "verticalAlign": "top",
  "shadow": false,
  "paddingLeft": 0,
  "left": "0.63%",
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false
 },
 {
  "borderSize": 0,
  "backgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "scrollEnabled": false,
  "width": "28.92%",
  "height": "43.958%",
  "borderRadius": 0,
  "class": "WebFrame",
  "url": "https://sketchfab.com/models/5944d57b148942fcb2f2effe81ea5fcc/embed?autostart=1&camera=0&transparent=1",
  "backgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "insetBorder": false,
  "minWidth": 1,
  "paddingBottom": 0,
  "visible": false,
  "minHeight": 1,
  "shadow": false,
  "id": "WebFrame_BFDA3529_B1A7_89E7_41CA_FD7880BBAF03",
  "backgroundOpacity": 1,
  "data": {
   "name": "WebFrame3838"
  },
  "bottom": "16.88%",
  "paddingLeft": 0,
  "left": "1.3%",
  "paddingTop": 0
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "mode": "push",
  "width": 157,
  "horizontalAlign": "center",
  "height": 198,
  "rollOverIconURL": "skin/IconButton_BF08CD32_B1E0_B9EA_41DE_32F63A167D6B_rollover.png",
  "borderRadius": 0,
  "class": "IconButton",
  "click": "this.setComponentVisibility(this.IconButton_BF08CD32_B1E0_B9EA_41DE_32F63A167D6B, true, 0, null, null, false)",
  "pressedIconURL": "skin/IconButton_BF08CD32_B1E0_B9EA_41DE_32F63A167D6B_pressed.png",
  "iconURL": "skin/IconButton_BF08CD32_B1E0_B9EA_41DE_32F63A167D6B.png",
  "minWidth": 0,
  "cursor": "hand",
  "paddingBottom": 0,
  "minHeight": 0,
  "shadow": false,
  "id": "IconButton_BF08CD32_B1E0_B9EA_41DE_32F63A167D6B",
  "backgroundOpacity": 0,
  "data": {
   "name": "Button49922"
  },
  "verticalAlign": "middle",
  "bottom": "32.71%",
  "paddingLeft": 0,
  "transparencyActive": true,
  "left": "16.16%",
  "paddingTop": 0
 }
], 
 "start": "this.playAudioList([this.audio_BC582054_AA07_B54B_41E4_8B55163DA0BB, this.audio_BC336061_AA07_B54C_41E3_B83C04629FA0]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist,this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_BF1CD41C_B1E0_8FDD_41D0_676C3C3CB33E.set('selectedIndex', 0)",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "vrPolyfillScale": 0.88,
 "horizontalAlign": "left",
 "gap": 10,
 "width": "100%",
 "scrollBarColor": "#000000",
 "height": "100%",
 "borderRadius": 0,
 "class": "Player",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "creationPolicy": "inAdvance",
 "layout": "absolute",
 "buttonToggleMute": "this.IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getKey": function(key){  return window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } }
 },
 "paddingBottom": 0,
 "minHeight": 20,
 "shadow": false,
 "id": "rootPlayer",
 "data": {
  "name": "Player28156"
 },
 "verticalAlign": "top",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "overflow": "visible"
})