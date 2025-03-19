TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "R0012142",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1_t.jpg"
   }
  ]
 },
 {
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonZoomIn": {
   "paddingTop": 0,
   "toolTipFontWeight": "normal",
   "horizontalAlign": "center",
   "mode": "push",
   "toolTipTextShadowOpacity": 0,
   "width": 30,
   "toolTipShadowVerticalLength": 0,
   "height": 30,
   "toolTipOpacity": 1,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "borderSize": 0,
   "toolTipFontFamily": "Arial",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowColor": "#333333",
   "class": "IconButton",
   "minWidth": 0,
   "paddingLeft": 0,
   "toolTipPaddingLeft": 6,
   "borderRadius": 0,
   "toolTipShadowSpread": 0,
   "cursor": "hand",
   "toolTipShadowHorizontalLength": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "data": {
    "name": "Button1208"
   },
   "toolTipBorderRadius": 3,
   "minHeight": 0,
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "toolTipPaddingRight": 6,
   "toolTipDisplayTime": 600,
   "toolTipBorderSize": 1,
   "backgroundOpacity": 0,
   "toolTipFontStyle": "normal",
   "toolTip": "Zoom In",
   "toolTipPaddingTop": 4,
   "toolTipBorderColor": "#767676",
   "transparencyActive": false,
   "toolTipPaddingBottom": 4,
   "toolTipShadowOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "verticalAlign": "middle",
   "toolTipFontSize": 12,
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "paddingRight": 0,
   "toolTipShadowBlurRadius": 3
  },
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "buttonZoomOut": {
   "paddingTop": 0,
   "toolTipFontWeight": "normal",
   "horizontalAlign": "center",
   "mode": "push",
   "toolTipTextShadowOpacity": 0,
   "width": 30,
   "toolTipShadowVerticalLength": 0,
   "height": 30,
   "toolTipOpacity": 1,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "borderSize": 0,
   "toolTipFontFamily": "Arial",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowColor": "#333333",
   "class": "IconButton",
   "minWidth": 0,
   "paddingLeft": 0,
   "toolTipPaddingLeft": 6,
   "borderRadius": 0,
   "toolTipShadowSpread": 0,
   "cursor": "hand",
   "toolTipShadowHorizontalLength": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "data": {
    "name": "Button1207"
   },
   "toolTipBorderRadius": 3,
   "minHeight": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "toolTipPaddingRight": 6,
   "toolTipDisplayTime": 600,
   "toolTipBorderSize": 1,
   "backgroundOpacity": 0,
   "toolTipFontStyle": "normal",
   "toolTip": "Zoom Out",
   "toolTipPaddingTop": 4,
   "toolTipBorderColor": "#767676",
   "transparencyActive": false,
   "toolTipPaddingBottom": 4,
   "toolTipShadowOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "verticalAlign": "middle",
   "toolTipFontSize": 12,
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "paddingRight": 0,
   "toolTipShadowBlurRadius": 3
  },
  "buttonRestart": {
   "paddingTop": 0,
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "height": 38,
   "borderSize": 0,
   "minWidth": 0,
   "class": "IconButton",
   "paddingLeft": 0,
   "borderRadius": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "data": {
    "name": "Button1195"
   },
   "minHeight": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "backgroundOpacity": 0,
   "verticalAlign": "middle",
   "transparencyActive": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "paddingRight": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonPlayLeft": {
   "paddingTop": 0,
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "height": 38,
   "borderSize": 0,
   "minWidth": 0,
   "class": "IconButton",
   "paddingLeft": 0,
   "borderRadius": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "data": {
    "name": "Button1196"
   },
   "minHeight": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "backgroundOpacity": 0,
   "verticalAlign": "middle",
   "transparencyActive": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "paddingRight": 0
  },
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true,
  "buttonPlayRight": {
   "paddingTop": 0,
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "height": 38,
   "borderSize": 0,
   "minWidth": 0,
   "class": "IconButton",
   "paddingLeft": 0,
   "borderRadius": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "data": {
    "name": "Button1198"
   },
   "minHeight": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "backgroundOpacity": 0,
   "verticalAlign": "middle",
   "transparencyActive": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "paddingRight": 0
  },
  "buttonPause": {
   "paddingTop": 0,
   "horizontalAlign": "center",
   "mode": "toggle",
   "width": 40,
   "height": 40,
   "borderSize": 0,
   "minWidth": 0,
   "class": "IconButton",
   "paddingLeft": 0,
   "borderRadius": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
   "data": {
    "name": "Button1167"
   },
   "minHeight": 0,
   "iconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D.png",
   "transparencyActive": false,
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "pressedIconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D_pressed.png",
   "paddingRight": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 44.54,
   "pitch": -15.11
  }
 },
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "R0012146",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "R0012150",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "R0012155",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_B92D9117_AA0D_74F4_41E3_27D12029F811",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "R0012159",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_B92D9117_AA0D_74F4_41E3_27D12029F811_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B92D9117_AA0D_74F4_41E3_27D12029F811_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B92D9117_AA0D_74F4_41E3_27D12029F811.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B92D9117_AA0D_74F4_41E3_27D12029F811_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_B92D9117_AA0D_74F4_41E3_27D12029F811_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "R0012171",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "R0012173",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "R0012176",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_BF777C42_AA0D_AD4C_41C5_39574D599428",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "R0012183",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_BF777C42_AA0D_AD4C_41C5_39574D599428_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_BF777C42_AA0D_AD4C_41C5_39574D599428_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_BF777C42_AA0D_AD4C_41C5_39574D599428.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BF777C42_AA0D_AD4C_41C5_39574D599428_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_BF777C42_AA0D_AD4C_41C5_39574D599428_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "id": "panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C",
  "pitch": 0,
  "frameTransitionTime": 2000,
  "hfov": 360,
  "class": "LivePanorama",
  "label": "R0012197",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_1_t.jpg",
  "frameDisplayTime": 2000,
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_0.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_0_t.jpg"
   },
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_1.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_1_t.jpg"
   },
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_2_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_2.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_2_t.jpg"
   }
  ],
  "partial": false
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Video",
  "label": "ING 561F The Spruce",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_BE9368BE_AA06_9534_41E2_A790404DA6F6.mp4",
   "width": 1920
  },
  "thumbnailUrl": "media/video_BE9368BE_AA06_9534_41E2_A790404DA6F6_t.jpg",
  "width": 1920,
  "id": "video_BE9368BE_AA06_9534_41E2_A790404DA6F6",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "class": "VideoPlayer",
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "viewerArea": "this.MainViewer",
  "buttonPause": "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D"
 },
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "R0012195",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "R0012202",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "R0012205",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "R0012212",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "label": "R0012214",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_B92D9117_AA0D_74F4_41E3_27D12029F811",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B92D9117_AA0D_74F4_41E3_27D12029F811_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_BF777C42_AA0D_AD4C_41C5_39574D599428",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BF777C42_AA0D_AD4C_41C5_39574D599428_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_camera"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_BE9368BE_AA06_9534_41E2_A790404DA6F6",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 10, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 10, this.video_BE9368BE_AA06_9534_41E2_A790404DA6F6)"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "media": "this.panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "media": "this.panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
    "media": "this.panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "media": "this.panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "media": "this.panorama_B92D9117_AA0D_74F4_41E3_27D12029F811",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B92D9117_AA0D_74F4_41E3_27D12029F811_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "media": "this.panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
    "media": "this.panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
    "media": "this.panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)",
    "media": "this.panorama_BF777C42_AA0D_AD4C_41C5_39574D599428",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BF777C42_AA0D_AD4C_41C5_39574D599428_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)",
    "media": "this.panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 11)",
    "media": "this.panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 11, 12)",
    "media": "this.panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 12, 13)",
    "media": "this.panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 13, 14)",
    "media": "this.panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 14, 0)",
    "media": "this.panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB_camera"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_BE9368BE_AA06_9534_41E2_A790404DA6F6",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 0, this.video_BE9368BE_AA06_9534_41E2_A790404DA6F6)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 0, 1)",
    "media": "this.panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BAFFE9AC_AA03_77D4_41DA_86280D8C96D1_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 1, 2)",
    "media": "this.panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B845DB64_AA06_AB54_41CA_E139D7B9072F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 2, 3)",
    "media": "this.panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B9DD6378_AA07_FB3C_41D8_0028A109D757_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 3, 4)",
    "media": "this.panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BEDD7FC9_AA02_AB5C_41AA_33D6DD71DFC6_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 4, 5)",
    "media": "this.panorama_B92D9117_AA0D_74F4_41E3_27D12029F811",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B92D9117_AA0D_74F4_41E3_27D12029F811_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 5, 6)",
    "media": "this.panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BF0B67E7_AA0D_7B54_41DE_B02E01B9686F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 6, 7)",
    "media": "this.panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BF3E1ECA_AA0D_6D5C_41B2_CFE61E23285C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 7, 8)",
    "media": "this.panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BE471579_AA0D_9F3C_41C2_317D983DD24C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 8, 9)",
    "media": "this.panorama_BF777C42_AA0D_AD4C_41C5_39574D599428",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BF777C42_AA0D_AD4C_41C5_39574D599428_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 9, 10)",
    "media": "this.panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B97D96E8_AA0F_9D5C_41DD_2839FBBED21C_camera"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_BE9368BE_AA06_9534_41E2_A790404DA6F6",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 10, 11)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 10, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 10, this.video_BE9368BE_AA06_9534_41E2_A790404DA6F6)"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 11, 12)",
    "media": "this.panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BDCB6627_AA02_BCD4_41DC_210DB4223AEB_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 12, 13)",
    "media": "this.panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BDFDC12F_AA05_F4D5_41D5_DD86FB0AB43A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 13, 14)",
    "media": "this.panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BEB3DD45_AA05_EF54_41A1_F54D15FB2955_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 14, 15)",
    "media": "this.panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BEC7810B_AA05_B4DD_41CC_D85F393D6F99_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 15, 0)",
    "media": "this.panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BC3267CA_AA05_BB5F_41DB_5937D0748CAB_camera"
   }
  ]
 }
], "children": [
 {
  "playbackBarHeadShadow": true,
  "toolTipPaddingBottom": 4,
  "progressBarBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "progressRight": 10,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontColor": "#606060",
  "borderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 2,
  "playbackBarHeadShadowOpacity": 0.7,
  "class": "ViewerArea",
  "playbackBarHeadBorderSize": 0,
  "paddingLeft": 0,
  "toolTipPaddingLeft": 6,
  "toolTipShadowColor": "#333333",
  "toolTipShadowSpread": 0,
  "progressLeft": 10,
  "minHeight": 50,
  "shadow": false,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipFontStyle": "normal",
  "toolTipTextShadowColor": "#000000",
  "paddingBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "progressBarBorderRadius": 4,
  "progressBarBorderColor": "#000000",
  "playbackBarBorderRadius": 4,
  "paddingTop": 0,
  "playbackBarProgressBorderSize": 0,
  "progressBorderColor": "#AAAAAA",
  "toolTipFontWeight": "normal",
  "toolTipShadowBlurRadius": 3,
  "toolTipOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "transitionDuration": 500,
  "playbackBarBottom": 10,
  "transitionMode": "blending",
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipFontFamily": "Arial",
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadHeight": 30,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderSize": 1,
  "toolTipShadowHorizontalLength": 0,
  "minWidth": 100,
  "playbackBarHeadOpacity": 1,
  "top": 77,
  "borderRadius": 0,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarRight": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "id": "MainViewer",
  "playbackBarHeadWidth": 6,
  "toolTipBorderRadius": 3,
  "bottom": 92,
  "toolTipShadowOpacity": 1,
  "toolTipDisplayTime": 600,
  "progressBorderSize": 2,
  "toolTipBorderColor": "#767676",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBarOpacity": 1,
  "playbackBarHeight": 20,
  "left": 0,
  "playbackBarOpacity": 1,
  "toolTipPaddingRight": 6,
  "progressHeight": 20,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 1,
  "right": 0,
  "paddingRight": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical"
 },
 {
  "gap": 0,
  "rollOverItemLabelFontColor": "#FF0000",
  "backgroundColor": [
   "#000000"
  ],
  "horizontalAlign": "left",
  "itemThumbnailShadow": true,
  "itemBorderRadius": 0,
  "itemThumbnailOpacity": 1,
  "scrollBarColor": "#FFFFFF",
  "itemOpacity": 1,
  "itemVerticalAlign": "middle",
  "itemPaddingLeft": 3,
  "layout": "vertical",
  "itemLabelFontColor": "#FFFFFF",
  "borderSize": 0,
  "scrollBarWidth": 10,
  "class": "ThumbnailList",
  "itemBackgroundColor": [],
  "shadow": false,
  "paddingLeft": 20,
  "itemThumbnailShadowBlurRadius": 4,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemThumbnailShadowVerticalLength": 3,
  "minHeight": 0,
  "selectedItemLabelFontWeight": "bold",
  "itemBackgroundColorRatios": [],
  "backgroundOpacity": 0.2,
  "scrollBarMargin": 2,
  "itemThumbnailShadowSpread": 1,
  "itemLabelFontStyle": "normal",
  "paddingBottom": 10,
  "maxHeight": 800,
  "rollOverItemLabelFontWeight": "bold",
  "itemThumbnailBorderRadius": 5,
  "itemThumbnailShadowOpacity": 0.8,
  "paddingTop": 10,
  "itemHorizontalAlign": "center",
  "width": 158.5,
  "playList": "this.thumbnaillist5245_playlist",
  "itemThumbnailHeight": 70,
  "itemLabelFontSize": 14,
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontWeight": "normal",
  "itemLabelTextDecoration": "none",
  "backgroundColorDirection": "vertical",
  "selectedItemLabelFontColor": "#FFFF00",
  "itemPaddingBottom": 3,
  "scrollBarVisible": "rollOver",
  "itemLabelGap": 8,
  "minWidth": 0,
  "itemLabelFontFamily": "Arial",
  "top": "8.02%",
  "maxWidth": 800,
  "borderRadius": 5,
  "itemPaddingRight": 3,
  "id": "thumbnaillist5245",
  "itemThumbnailShadowColor": "#000000",
  "itemLabelPosition": "bottom",
  "bottom": "10.1%",
  "data": {
   "name": "ThumbnailList28173"
  },
  "itemThumbnailScaleMode": "fit_outside",
  "itemPaddingTop": 3,
  "itemMode": "normal",
  "backgroundColorRatios": [
   0
  ],
  "itemThumbnailWidth": 100,
  "scrollBarOpacity": 0.5,
  "verticalAlign": "top",
  "right": "0%",
  "paddingRight": 20,
  "itemBackgroundColorDirection": "vertical"
 },
 {
  "gap": 6,
  "children": [
   {
    "paddingTop": 0,
    "fontSize": 40,
    "width": 374,
    "textDecoration": "none",
    "height": "100%",
    "horizontalAlign": "center",
    "text": "Dream Silver 481F",
    "fontFamily": "Arial",
    "borderSize": 0,
    "fontStyle": "normal",
    "minWidth": 30,
    "class": "Label",
    "fontWeight": "bold",
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "id": "label4056",
    "data": {
     "name": "Label28174"
    },
    "minHeight": 16,
    "backgroundOpacity": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "paddingRight": 0,
    "fontColor": "#666666"
   },
   {
    "gap": 10,
    "children": [
     {
      "paddingTop": 0,
      "toolTipFontWeight": "normal",
      "horizontalAlign": "center",
      "mode": "toggle",
      "toolTipTextShadowOpacity": 0,
      "width": 40,
      "toolTipShadowVerticalLength": 0,
      "height": 40,
      "toolTipOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontColor": "#606060",
      "borderSize": 0,
      "toolTipFontFamily": "Arial",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowColor": "#333333",
      "class": "IconButton",
      "minWidth": 0,
      "paddingLeft": 0,
      "toolTipPaddingLeft": 6,
      "borderRadius": 0,
      "toolTipShadowSpread": 0,
      "cursor": "hand",
      "toolTipShadowHorizontalLength": 0,
      "shadow": false,
      "id": "IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
      "data": {
       "name": "Button49930"
      },
      "toolTipBorderRadius": 3,
      "minHeight": 0,
      "iconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75.png",
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "toolTipBorderSize": 1,
      "toolTipFontStyle": "normal",
      "toolTip": "Mute",
      "toolTipPaddingTop": 4,
      "toolTipBorderColor": "#767676",
      "transparencyActive": true,
      "toolTipPaddingBottom": 4,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "verticalAlign": "middle",
      "toolTipFontSize": 12,
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "pressedIconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75_pressed.png",
      "paddingRight": 0,
      "toolTipShadowBlurRadius": 3
     },
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     {
      "gap": 5,
      "children": [
       {
        "gap": 10,
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247"
        ],
        "paddingTop": 0,
        "backgroundColor": [
         "#FFFFFF"
        ],
        "creationPolicy": "inAdvance",
        "horizontalAlign": "center",
        "width": 47,
        "height": "100%",
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "overflow": "hidden",
        "backgroundColorDirection": "vertical",
        "layout": "vertical",
        "borderSize": 0,
        "class": "Container",
        "scrollBarWidth": 10,
        "minWidth": 20,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderRadius": 0,
        "shadow": false,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "data": {
         "name": "Container1202"
        },
        "minHeight": 20,
        "scrollBarMargin": 2,
        "backgroundOpacity": 1,
        "backgroundColorRatios": [
         0
        ],
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0
       },
       "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40"
      ],
      "paddingTop": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "creationPolicy": "inAdvance",
      "horizontalAlign": "center",
      "width": 133,
      "height": "100%",
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "overflow": "hidden",
      "backgroundColorDirection": "vertical",
      "layout": "horizontal",
      "borderSize": 0,
      "class": "Container",
      "scrollBarWidth": 10,
      "minWidth": 20,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderRadius": 0,
      "shadow": false,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "data": {
       "name": "Container1200"
      },
      "minHeight": 20,
      "scrollBarMargin": 2,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0
     },
     {
      "gap": 10,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "paddingTop": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "creationPolicy": "inAdvance",
      "horizontalAlign": "center",
      "width": 85,
      "height": "100%",
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "overflow": "hidden",
      "backgroundColorDirection": "vertical",
      "layout": "horizontal",
      "borderSize": 0,
      "class": "Container",
      "scrollBarWidth": 10,
      "minWidth": 20,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderRadius": 0,
      "shadow": false,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "data": {
       "name": "Container1206"
      },
      "minHeight": 20,
      "scrollBarMargin": 2,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0
     }
    ],
    "paddingTop": 0,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "creationPolicy": "inAdvance",
    "horizontalAlign": "center",
    "width": 805.5,
    "height": "93.478%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "overflow": "hidden",
    "backgroundColorDirection": "vertical",
    "layout": "horizontal",
    "borderSize": 0,
    "class": "Container",
    "scrollBarWidth": 10,
    "minWidth": 468,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "data": {
     "name": "Container1194"
    },
    "minHeight": 20,
    "scrollBarMargin": 2,
    "backgroundOpacity": 1,
    "backgroundColorRatios": [
     0
    ],
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5,
    "paddingRight": 0
   },
   {
    "paddingBottom": 10,
    "gap": 13,
    "itemHorizontalAlign": "center",
    "horizontalAlign": "left",
    "itemThumbnailShadow": true,
    "itemLabelFontWeight": "normal",
    "width": "28.046%",
    "playList": "this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
    "itemBorderRadius": 0,
    "height": 92,
    "selectedItemLabelFontColor": "#FFCC00",
    "itemThumbnailOpacity": 1,
    "itemLabelFontSize": 14,
    "scrollBarColor": "#FFFFFF",
    "itemThumbnailHeight": 36,
    "itemLabelHorizontalAlign": "center",
    "layout": "horizontal",
    "itemOpacity": 1,
    "itemLabelTextDecoration": "none",
    "itemVerticalAlign": "middle",
    "itemBackgroundOpacity": 0,
    "itemPaddingLeft": 3,
    "itemLabelFontColor": "#000000",
    "borderSize": 0,
    "scrollBarWidth": 10,
    "itemThumbnailShadowBlurRadius": 8,
    "class": "ThumbnailList",
    "scrollBarVisible": "always",
    "itemLabelGap": 1,
    "rollOverItemLabelFontColor": "#003399",
    "itemBackgroundColor": [],
    "paddingLeft": 20,
    "minWidth": 20,
    "borderRadius": 5,
    "itemLabelFontFamily": "Arial",
    "itemThumbnailShadowHorizontalLength": 3,
    "itemThumbnailShadowVerticalLength": 3,
    "itemLabelPosition": "top",
    "minHeight": 20,
    "shadow": false,
    "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965",
    "itemBackgroundColorRatios": [],
    "itemPaddingBottom": 3,
    "itemThumbnailShadowColor": "#000000",
    "backgroundOpacity": 0,
    "itemThumbnailWidth": 94,
    "selectedItemLabelFontWeight": "bold",
    "data": {
     "name": "ThumbnailList35762"
    },
    "scrollBarMargin": 2,
    "itemPaddingTop": 3,
    "itemThumbnailShadowOpacity": 0.54,
    "itemThumbnailShadowSpread": 1,
    "rollOverItemBackgroundOpacity": 0,
    "itemLabelFontStyle": "normal",
    "itemThumbnailScaleMode": "fit_outside",
    "verticalAlign": "top",
    "itemMode": "normal",
    "itemPaddingRight": 3,
    "rollOverItemLabelFontWeight": "bold",
    "itemThumbnailBorderRadius": 2,
    "itemBackgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "paddingRight": 20,
    "paddingTop": 10
   },
   {
    "gap": 13,
    "itemHorizontalAlign": "center",
    "horizontalAlign": "left",
    "itemThumbnailShadow": true,
    "itemLabelFontWeight": "normal",
    "width": "26.327%",
    "playList": "this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
    "itemBorderRadius": 0,
    "itemBackgroundOpacity": 0,
    "height": 82.5,
    "selectedItemLabelFontColor": "#FFCC00",
    "itemThumbnailOpacity": 1,
    "itemLabelFontSize": 14,
    "scrollBarColor": "#FFFFFF",
    "itemThumbnailHeight": 75,
    "itemLabelHorizontalAlign": "center",
    "layout": "horizontal",
    "itemOpacity": 1,
    "itemLabelTextDecoration": "none",
    "itemVerticalAlign": "middle",
    "itemPaddingLeft": 3,
    "itemLabelFontColor": "#FFFFFF",
    "borderSize": 0,
    "scrollBarWidth": 10,
    "itemThumbnailShadowBlurRadius": 8,
    "class": "ThumbnailList",
    "scrollBarVisible": "rollOver",
    "itemLabelGap": 8,
    "minWidth": 1,
    "itemBackgroundColor": [],
    "paddingLeft": 20,
    "itemThumbnailShadowVerticalLength": 3,
    "borderRadius": 5,
    "visible": false,
    "itemLabelFontFamily": "Arial",
    "itemThumbnailShadowHorizontalLength": 3,
    "itemLabelPosition": "bottom",
    "minHeight": 1,
    "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B",
    "itemBackgroundColorRatios": [],
    "itemPaddingBottom": 3,
    "data": {
     "name": "ThumbnailList35762"
    },
    "backgroundOpacity": 0,
    "itemThumbnailWidth": 100,
    "selectedItemLabelFontWeight": "bold",
    "shadow": false,
    "itemThumbnailShadowColor": "#000000",
    "scrollBarMargin": 2,
    "itemPaddingTop": 3,
    "itemThumbnailShadowOpacity": 0.57,
    "itemThumbnailShadowSpread": 1,
    "itemLabelFontStyle": "normal",
    "itemThumbnailScaleMode": "fit_outside",
    "verticalAlign": "top",
    "itemMode": "normal",
    "paddingBottom": 10,
    "itemPaddingRight": 3,
    "rollOverItemLabelFontWeight": "bold",
    "itemThumbnailBorderRadius": 5,
    "itemBackgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "paddingRight": 20,
    "paddingTop": 10
   }
  ],
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "creationPolicy": "inAdvance",
  "horizontalAlign": "center",
  "width": "100%",
  "height": 92,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "overflow": "scroll",
  "backgroundColorDirection": "vertical",
  "layout": "horizontal",
  "borderSize": 0,
  "class": "Container",
  "scrollBarWidth": 10,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "data": {
   "name": "Container29432"
  },
  "minHeight": 1,
  "bottom": "0%",
  "scrollBarMargin": 2,
  "backgroundOpacity": 0.3,
  "left": "0%",
  "backgroundColorRatios": [
   0,
   1
  ],
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "paddingRight": 0
 },
 {
  "right": "0%",
  "horizontalAlign": "center",
  "width": "9.198%",
  "height": "7.604%",
  "url": "skin/Image_306F4727_273A_95B3_41B2_3DF89EEDBF85.png",
  "borderSize": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "class": "Image",
  "minWidth": 1,
  "top": "0.05%",
  "paddingLeft": 0,
  "maxWidth": 1467,
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Image_306F4727_273A_95B3_41B2_3DF89EEDBF85",
  "data": {
   "name": "Wave Logo"
  },
  "backgroundOpacity": 0,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "maxHeight": 817,
  "paddingRight": 0,
  "paddingTop": 0
 },
 {
  "right": "8.53%",
  "horizontalAlign": "center",
  "width": "38.151%",
  "height": "6.979%",
  "url": "skin/Image_3E29962B_272E_B7B3_4191_F996EF0F95BB.png",
  "borderSize": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "class": "Image",
  "minWidth": 1,
  "top": "0.31%",
  "paddingLeft": 0,
  "maxWidth": 1700,
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Image_3E29962B_272E_B7B3_4191_F996EF0F95BB",
  "data": {
   "name": "MTViewhomes"
  },
  "backgroundOpacity": 0,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "maxHeight": 186,
  "paddingRight": 0,
  "paddingTop": 0
 },
 {
  "gap": 10,
  "children": [
   {
    "playbackBarHeadShadow": true,
    "toolTipFontSize": 12,
    "progressBarBackgroundColorDirection": "vertical",
    "progressOpacity": 1,
    "progressRight": 10,
    "playbackBarHeadBackgroundColor": [
     "#111111",
     "#666666"
    ],
    "playbackBarHeadShadowColor": "#000000",
    "toolTipTextShadowBlurRadius": 3,
    "playbackBarBorderColor": "#AAAAAA",
    "playbackBarHeadShadowHorizontalLength": 0,
    "toolTipFontColor": "#606060",
    "borderSize": 0,
    "playbackBarBackgroundOpacity": 1,
    "playbackBarBorderSize": 2,
    "playbackBarHeadShadowOpacity": 0.7,
    "class": "ViewerArea",
    "playbackBarHeadBorderSize": 0,
    "paddingLeft": 0,
    "toolTipPaddingLeft": 6,
    "toolTipShadowColor": "#333333",
    "toolTipShadowSpread": 0,
    "progressLeft": 10,
    "minHeight": 1,
    "shadow": false,
    "playbackBarHeadBorderColor": "#000000",
    "playbackBarHeadBorderRadius": 0,
    "playbackBarProgressOpacity": 1,
    "toolTipBorderSize": 1,
    "progressBarBackgroundColorRatios": [
     0,
     1
    ],
    "toolTipFontStyle": "normal",
    "toolTipTextShadowColor": "#000000",
    "paddingBottom": 0,
    "playbackBarProgressBorderColor": "#000000",
    "toolTipPaddingTop": 4,
    "progressBarBorderRadius": 4,
    "progressBarBorderColor": "#000000",
    "playbackBarBorderRadius": 4,
    "paddingTop": 0,
    "playbackBarProgressBorderSize": 0,
    "progressBorderColor": "#AAAAAA",
    "toolTipFontWeight": "normal",
    "toolTipShadowBlurRadius": 3,
    "toolTipTextShadowOpacity": 0,
    "progressBackgroundColorDirection": "vertical",
    "transitionDuration": 500,
    "playbackBarBottom": 0,
    "transitionMode": "blending",
    "height": "100%",
    "toolTipOpacity": 1,
    "width": "100%",
    "playbackBarProgressBorderRadius": 0,
    "playbackBarHeadShadowVerticalLength": 0,
    "toolTipShadowVerticalLength": 0,
    "progressBackgroundColorRatios": [
     0,
     1
    ],
    "playbackBarLeft": 0,
    "playbackBarHeadBackgroundColorRatios": [
     0,
     1
    ],
    "progressBackgroundColor": [
     "#EEEEEE",
     "#CCCCCC"
    ],
    "playbackBarHeadHeight": 30,
    "playbackBarHeadShadowBlurRadius": 3,
    "toolTipFontFamily": "Arial",
    "toolTipBackgroundColor": "#F6F6F6",
    "progressBarBackgroundColor": [
     "#222222",
     "#444444"
    ],
    "playbackBarProgressBackgroundColorRatios": [
     0,
     1
    ],
    "progressBarBorderSize": 1,
    "toolTipShadowHorizontalLength": 0,
    "minWidth": 1,
    "playbackBarHeadOpacity": 1,
    "top": "0%",
    "borderRadius": 0,
    "playbackBarProgressBackgroundColor": [
     "#222222",
     "#444444"
    ],
    "playbackBarRight": 0,
    "progressBorderRadius": 4,
    "playbackBarBackgroundColorDirection": "vertical",
    "id": "MapViewer",
    "playbackBarHeadWidth": 6,
    "toolTipBorderRadius": 3,
    "toolTipShadowOpacity": 1,
    "toolTipDisplayTime": 600,
    "progressBorderSize": 2,
    "toolTipBorderColor": "#767676",
    "playbackBarBackgroundColor": [
     "#EEEEEE",
     "#CCCCCC"
    ],
    "progressHeight": 20,
    "playbackBarHeight": 20,
    "left": "0%",
    "playbackBarOpacity": 1,
    "toolTipPaddingRight": 6,
    "progressBarOpacity": 1,
    "progressBackgroundOpacity": 1,
    "playbackBarHeadBackgroundColorDirection": "vertical",
    "progressBottom": 2,
    "playbackBarProgressBackgroundColorDirection": "vertical",
    "paddingRight": 0,
    "toolTipPaddingBottom": 4
   }
  ],
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "creationPolicy": "inAdvance",
  "horizontalAlign": "left",
  "width": "28.739%",
  "height": "33.75%",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "overflow": "scroll",
  "backgroundColorDirection": "vertical",
  "layout": "absolute",
  "borderSize": 0,
  "class": "Container",
  "scrollBarWidth": 10,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "top": "1.82%",
  "paddingLeft": 0,
  "shadow": false,
  "borderRadius": 0,
  "id": "Container_581FBEE1_4338_67EB_41B1_0EF3FEBC0B73",
  "data": {
   "name": "Container24488"
  },
  "minHeight": 1,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0.3,
  "left": "0.63%",
  "backgroundColorRatios": [
   0,
   1
  ],
  "verticalAlign": "top",
  "paddingBottom": 0,
  "paddingRight": 0
 }
], 
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "paddingTop": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "width": "100%",
 "height": "100%",
 "scripts": {
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getKey": function(key){  return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "overflow": "visible",
 "layout": "absolute",
 "borderSize": 0,
 "class": "Player",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.88,
 "paddingLeft": 0,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
 "minHeight": 20,
 "id": "rootPlayer",
 "data": {
  "name": "Player28156"
 },
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "start": "this.syncPlaylists([this.thumbnaillist5245_playlist,this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist,this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "paddingBottom": 0,
 "shadow": false,
 "paddingRight": 0
})