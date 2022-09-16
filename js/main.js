var findElement = document.getElementById.bind(document);
var mainDoc = document.documentElement;
window.errorName = "N/A";
window.errorMsg = "N/A";

var HTTP_STATUS_CODES = {
  '069' : 'Nice',
  '100' : 'Continue',
  '101' : 'Switching Protocols',
  '102' : 'Processing',
  '103' : 'Early Hints',
  '110' : 'Response is Stale',
  '111' : 'Revalidation Failed',
  '112' : 'Disconnected Operation',
  '113' : 'Heuristic Expiration',
  '199' : 'Miscellaneous Warning',
  '200' : 'OK',
  '201' : 'Created',
  '202' : 'Accepted',
  '203' : 'Non-Authoritative Information',
  '204' : 'No Content',
  '205' : 'Reset Content',
  '206' : 'Partial Content',
  '207' : 'Multi-Status',
  '208' : 'Already Reported',
  '214' : 'Transformation Applied',
  '226' : 'IM Used',
  '299' : 'Miscellaneous Persistent Warning',
  '300' : 'Multiple Choices',
  '301' : 'Moved Permanently',
  '302' : 'Found',
  '303' : 'See Other',
  '304' : 'Not Modified',
  '305' : 'Use Proxy',
  '306' : 'Switch Proxy',
  '307' : 'Temporary Redirect',
  '308' : 'Permanent Redirect',
  '400' : 'Bad Request',
  '401' : 'Unauthorized',
  '402' : 'Payment Required',
  '403' : 'Forbidden',
  '404' : 'Not Found',
  '405' : 'Method Not Allowed',
  '406' : 'Not Acceptable',
  '407' : 'Proxy Authentication Required',
  '408' : 'Request Timeout',
  '409' : 'Conflict',
  '410' : 'Gone',
  '411' : 'Length Required',
  '412' : 'Precondition Failed',
  '413' : 'Request Entity Too Large',
  '414' : 'Request-URI Too Long',
  '415' : 'Unsupported Media Type',
  '416' : 'Requested Range Not Satisfiable',
  '417' : 'Expectation Failed',
  '418' : "I'm a teapot",
  '419' : 'Page Expired',
  '420' : 'Method Failure',
  '420' : 'Enhance Your Calm',
  '421' : 'Misdirected Request',
  '422' : 'Unprocessable Entity',
  '423' : 'Locked',
  '424' : 'Failed Dependency',
  '425' : 'Too Early',
  '426' : 'Upgrade Required',
  '428' : 'Precondition Required',
  '429' : 'Too Many Requests',
  '430' : 'Request Header Fields Too Large',
  '431' : 'Request Header Fields Too Large',
  '440' : 'Login Time-out',
  '444' : 'No Response',
  '449' : 'Retry With',
  '450' : 'Blocked by Windows Parental Controls',
  '451' : 'Unavailable For Legal Reasons',
  '451' : 'Redirect',
  '460' : 'N/A',
  '463' : 'N/A',
  '494' : 'Request Header Too Large',
  '495' : 'SSL Certificate Error',
  '496' : 'SSL Certificate Required',
  '497' : 'HTTP Request Sent to HTTPS Port',
  '498' : 'Invalid Token',
  '499' : 'Token Required',
  '499' : 'Client Closed Request',
  '500' : 'Internal Server Error',
  '501' : 'Not Implemented',
  '502' : 'Bad Gateway',
  '503' : 'Service Unavailable',
  '504' : 'Gateway Timeout',
  '505' : 'HTTP Version Not Supported',
  '506' : 'Variant Also Negotiates',
  '507' : 'Insufficient Storage',
  '508' : 'Loop Detected',
  '509' : 'Bandwidth Limit Exceeded',
  '510' : 'Not Extended',
  '511' : 'Network Authentication Required',
  '520' : 'Web Server Returned an Unknown Error',
  '521' : 'Web Server is Down',
  '522' : 'Connection Timed Out',
  '523' : 'Origin is Unreachable',
  '524' : 'A Timeout Occurred',
  '525' : 'SSL Handshake Failed',
  '526' : 'Invalid SSL Certificate',
  '527' : 'Railgun Error',
  '529' : 'Site is overloaded',
  '530' : 'Site is frozen',
  '530' : 'N/A',
  '561' : 'Unauthorized',
  '598' : 'Network Read Timeout Error',
  '599' : 'Network Connect Timeout Error'
};

function hrefError() {
  window.location.href = "error.html";
}

function customError(a) {
  if (!a) {
    var name = Object.keys(HTTP_STATUS_CODES)[Math.floor(Math.random()*Object.keys(HTTP_STATUS_CODES).length)];
    window.errorName = name;
    window.errorMsg = HTTP_STATUS_CODES[name];
  }
  else
  {
    window.errorName = a;
    window.errorMsg = HTTP_STATUS_CODES[a];
  }
}

function enterFullscreen() {
  if (mainDoc.requestFullscreen) {
    mainDoc.requestFullscreen();
  }
  else if (mainDoc.webkitRequestFullscreen) {
    mainDoc.webkitRequestFullscreen();
  }
  else if (elem.msRequestFullscreen) {
    mainDoc.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
  else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
  else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

window.isMobile = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function toggleVideo() {
  (findElement("video").style.display == "none") ? findElement("video").style.display = "" : findElement("video").style.display = "none";
  (findElement("video").paused) ? findElement("video").play() : findElement("video").pause();
}

function toggleAudio() {
  (findElement("audio").paused) ? findElement("audio").play() : findElement("audio").pause();
}

function toggleFullscreen() {
  (!window.screenTop && !window.screenY) ? exitFullscreen() : enterFullscreen();
}

function revealText() {
  findElement("main").innerHTML = `
    <div class="textmainsecondary"><span onClick="window.location.reload();">femboys.tv</span></div>
    <p style="font-family:'Courier New'; margin-bottom:0;" class="fadetext" id="first">made to f**k with your head</p>
    <p style="font-family:'Courier New'; margin:0; padding-top:5px; color: #555" class="fadetext" id="second">a scrumptious web project from your local haxor</p>
    <p class="buttonmain fadetext" onclick="toggleVideo();" id="third">[[toggle video]]&nbsp;</p>
    <p class="buttonmain fadetext" onclick="toggleAudio();" id="third">[[toggle audio]]</p>
  `;
}

function removeText() {
  findElement("main").innerHTML = ``;
}

function initMain()
{
  toggleVideo();
  toggleAudio();
  removeText();
  if (!window.isMobile()) {
    enterFullscreen();
  }

  setTimeout(function() {
    revealText();
  }, 2650);
}

function developerMode() {
  findElement("main").insertAdjacentHTML('beforeend', `
    <p class="buttonmain" onclick="toggleFullscreen();" id="third">&nbsp;[[toggle fullscreen]]&nbsp;</p>
    <p class="buttonmain" onclick="hrefError();" id="third">[[random error]]</p>
  `);

  document.body.contentEditable = true;

  return 'ok nerd';
}
