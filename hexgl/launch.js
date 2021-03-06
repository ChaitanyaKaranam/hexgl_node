import { socket } from './socket.js';

// Generated by CoffeeScript 1.7.1
(function() {
  var $, a, defaultControls, getWebGL, hasWebGL, init, s, u, _fn, _i, _len, getCookie;

  $ = function(_) {
    return document.getElementById(_);
  };

  getCookie = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)===' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  init = function(controlType, quality, hud, godmode) {
    var hexGL, progressbar;
    hexGL = new bkcore.hexgl.HexGL({
      document: document,
      width: window.innerWidth,
      height: window.innerHeight,
      container: $('main'),
      overlay: $('overlay'),
      gameover: $('step-5'),
      quality: quality,
      difficulty: 0,
      hud: hud === 1,
      controlType: controlType,
      godmode: godmode,
      track: 'Cityscape'
    });
    window.hexGL = hexGL;
    progressbar = $('progressbar');
    return hexGL.load({
      onLoad: function() {
        console.log('LOADED.');

          $('step-3').style.display = 'none';
          $('step-3.5').style.display = 'block';

        // Send ready status
        let payload = {
          event: 'PLAYER_READY',
          userName: getCookie('userName'),
          lobby_name: getCookie('lobby_name')
        }
        console.log(payload);
        window.socket.send(JSON.stringify(payload));      

        window.socket.onmessage = (event) => {
          console.log(event);
          if(event.data === 'START_GAME'){
            hexGL.init();
            $('step-3.5').style.display = 'none';
            $('step-4').style.display = 'block';
            return hexGL.start();
          }
          if(event.data === 'FINISH'){
              console.log(event.data);
              return hexGL.forceFinish();
          }
        }
      },
      onError: function(s) {
        return console.error("Error loading " + s + ".");
      },
      onProgress: function(p, t, n) {
        console.log("LOADED " + t + " : " + n + " ( " + p.loaded + " / " + p.total + " ).");
        return progressbar.style.width = "" + (p.loaded / p.total * 100) + "%";
      }
    });
  };

  u = bkcore.Utils.getURLParameter;

  defaultControls = bkcore.Utils.isTouchDevice() ? 1 : 0;

  s = [['controlType', ['KEYBOARD', 'TOUCH', 'LEAP MOTION CONTROLLER', 'GAMEPAD'], defaultControls, defaultControls, 'Controls: '], ['quality', ['LOW', 'MID', 'HIGH', 'VERY HIGH'], 3, 3, 'Quality: '], ['hud', ['OFF', 'ON'], 1, 1, 'HUD: '], ['godmode', ['OFF', 'ON'], 0, 1, 'Godmode: ']];


  return init(s[0][3], s[1][3], s[2][3], s[3][3]);

  _fn = function(a) {
    var e, f, _ref;
    a[3] = (_ref = u(a[0])) != null ? _ref : a[2];
    e = $("s-" + a[0]);
    (f = function() {
      return e.innerHTML = a[4] + a[1][a[3]];
    })();
    return e.onclick = function() {
      return f(a[3] = (a[3] + 1) % a[1].length);
    };
  };
  for (_i = 0, _len = s.length; _i < _len; _i++) {
    a = s[_i];
    _fn(a);
  }

  $('step-2').onclick = function() {
    $('step-2').style.display = 'none';
    $('step-3').style.display = 'block';
    return init(s[0][3], s[1][3], s[2][3], s[3][3]);
  };

  $('step-5').onclick = function() {
    return window.location.reload();
  };

  $('s-credits').onclick = function() {
    $('step-1').style.display = 'none';
    return $('credits').style.display = 'block';
  };

  $('credits').onclick = function() {
    $('step-1').style.display = 'block';
    return $('credits').style.display = 'none';
  };

  hasWebGL = function() {
    var canvas, gl;
    gl = null;
    canvas = document.createElement('canvas');
    try {
      gl = canvas.getContext("webgl");
    } catch (_error) {}
    if (gl == null) {
      try {
        gl = canvas.getContext("experimental-webgl");
      } catch (_error) {}
    }
    return gl != null;
  };

  if (!hasWebGL()) {
    getWebGL = $('start');
    getWebGL.innerHTML = 'WebGL is not supported!';
    getWebGL.onclick = function() {
      return window.location.href = 'http://get.webgl.org/';
    };
  } else {
    $('start').onclick = function() {
      $('step-1').style.display = 'none';
      $('step-2').style.display = 'block';
      return $('step-2').style.backgroundImage = "url(css/help-" + s[0][3] + ".png)";
    };
  }

}).call(this);
