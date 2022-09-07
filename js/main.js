var findElement = document.getElementById.bind(document);

var HTTP_STATUS_CODES = {
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
        '420-2' : 'Enhance Your Calm',
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
        '451-2' : 'Redirect',
        '460' : '',
        '463' : '',
        '494' : 'Request Header Too Large',
        '495' : 'SSL Certificate Error',
        '496' : 'SSL Certificate Required',
        '497' : 'HTTP Request Sent to HTTPS Port',
        '498' : 'Invalid Token',
        '499' : 'Token Required',
        '499-2' : 'Client Closed Request',
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
        '530-2' : '',
        '561' : 'Unauthorized',
        '598' : 'Network Read Timeout Error',
        '599' : 'Network Connect Timeout Error'
    };

function customError() {
  var name = Object.keys(HTTP_STATUS_CODES)[Math.floor(Math.random()*Object.keys(HTTP_STATUS_CODES).length)];
  const error = new Error(HTTP_STATUS_CODES[name]);
  error.name = name;
  throw error;
}

function removeText() {
  findElement("main").innerHTML = ``;
}

function revealText() {
  findElement("main").innerHTML = `
    <h1 style="font-family:verdana" class="textmainsecondary" onClick="window.location.reload();">femboys.tv</h1>
    <p style="font-family:'Courier New'; margin-bottom:0;">made to f**k with your head</p>
    <p style="font-family:'Courier New'; margin:0; padding-top:5px; color: #555">a scrumptious web project from your neighbourhood haxor</p>
    <p style="font-family:verdana; margin:0; padding-top:8px; display:inline-block;" class="textmain" onclick="customError();">[[random error]]</p>
    <p style="font-family:verdana; margin:0; padding-top:8px; display:inline-block;" class="textmain"">[[about me]]</p>
  `;
}

function playVideo()
{
  findElement("video").style.display = "";
  findElement("video").play();

  removeText();

  setTimeout(function() {
    revealText();
  }, 2200);
}
