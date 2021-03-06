const mouseButtons = {
  Left: 0,
  Middle: 1,
  Right: 2
};

export function props() {
  return {
    eps: 1e-4,
    skin: {
      default: 'short-white-book-view',
    },
    scale: {
      default: 0.9,
      min: 0.9,
      max: 2.5,
      levels: 7
    },
    lighting: {
      default: 0.7,
      min: 0,
      max: 1,
      levels: 7
    },
    pan: {
      speed: 50
    },
    actions: {
      cmdZoomIn: {
        enabled: true,
      },
      cmdZoomOut: {
        enabled: true
      },
      cmdDefaultZoom: {
        enabled: true,
        type: 'dblclick',
        code: 0
      },
      cmdToc: {
        enabled: true
      },
      cmdFastBackward: {
        enabled: false
      },
      cmdBackward: {
        enabled: true
      },
      cmdForward: {
        enabled: true
      },
      cmdFastForward: {
        enabled: false
      },
      cmdSave: {
        enabled: true
      },
      cmdPrint: {
        enabled: true
      },
      cmdFullScreen: {
        enabled: true
      },
      widSettings: {
        enabled: true
      },
      cmdSmartPan: {
        enabled: true,
        active: true,
      },
      cmdSinglePage: {
        enabled: true,
        active: false,
        activeForMobile: false
      },
      cmdSounds: {
        enabled: true,
        active: true
      },
      cmdStats: {
        enabled: true,
        active: false
      },
      cmdLightingUp: {
        enabled: true
      },
      cmdLightingDown: {
        enabled: true
      },
      cmdPanLeft: {
        enabled: false
      },
      cmdPanRight: {
        enabled: false
      },
      cmdPanUp: {
        enabled: false
      },
      cmdPanDown: {
        enabled: false
      },
      mouseCmdRotate: {
        enabled: true,
        type: 'mousedrag',
        code: mouseButtons.Right
      },
      mouseCmdDragZoom: {
        enabled: true,
        type: 'mousedrag',
        code: mouseButtons.Middle
      },
      mouseCmdPan: {
        enabled: true,
        type: 'mousedrag',
        code: mouseButtons.Left
      },
      mouseCmdWheelZoom: {
        enabled: true,
        type: 'mousewheel',
        code: 0
      },
      touchCmdRotate: {
        enabled: true,
        type: 'touchdrag',
        code: 3
      },
      touchCmdZoom: {
        enabled: true,
        type: 'touchdrag',
        code: 2
      },
      touchCmdPan: {
        enabled: true,
        type: 'touchdrag',
        code: 1
      },
      touchCmdSwipe: {
        enabled: true,
        type: 'touchdrag',
        code: 1
      }
    }
  };
};
