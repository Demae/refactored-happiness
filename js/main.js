var findElement = document.getElementById.bind(document);

var HTTP_STATUS_CODES = {
        'CODE_100' : 'Continue',
        'CODE_101' : 'Switching Protocols',
        'CODE_102' : 'Processing',
        'CODE_103' : 'Early Hints',
        'CODE_110' : 'Response is Stale',
        'CODE_111' : 'Revalidation Failed',
        'CODE_112' : 'Disconnected Operation',
        'CODE_113' : 'Heuristic Expiration',
        'CODE_199' : 'Miscellaneous Warning',
        'CODE_200' : 'OK',
        'CODE_201' : 'Created',
        'CODE_202' : 'Accepted',
        'CODE_203' : 'Non-Authoritative Information',
        'CODE_204' : 'No Content',
        'CODE_205' : 'Reset Content',
        'CODE_206' : 'Partial Content',
        'CODE_207' : 'Multi-Status',
        'CODE_208' : 'Already Reported',
        'CODE_214' : 'Transformation Applied',
        'CODE_226' : 'IM Used',
        'CODE_299' : 'Miscellaneous Persistent Warning',
        'CODE_300' : 'Multiple Choices',
        'CODE_301' : 'Moved Permanently',
        'CODE_302' : 'Found',
        'CODE_303' : 'See Other',
        'CODE_304' : 'Not Modified',
        'CODE_305' : 'Use Proxy',
        'CODE_306' : 'Switch Proxy',
        'CODE_307' : 'Temporary Redirect',
        'CODE_308' : 'Permanent Redirect',
        'CODE_400' : 'Bad Request',
        'CODE_401' : 'Unauthorized',
        'CODE_402' : 'Payment Required',
        'CODE_403' : 'Forbidden',
        'CODE_404' : 'Not Found',
        'CODE_405' : 'Method Not Allowed',
        'CODE_406' : 'Not Acceptable',
        'CODE_407' : 'Proxy Authentication Required',
        'CODE_408' : 'Request Timeout',
        'CODE_409' : 'Conflict',
        'CODE_410' : 'Gone',
        'CODE_411' : 'Length Required',
        'CODE_412' : 'Precondition Failed',
        'CODE_413' : 'Request Entity Too Large',
        'CODE_414' : 'Request-URI Too Long',
        'CODE_415' : 'Unsupported Media Type',
        'CODE_416' : 'Requested Range Not Satisfiable',
        'CODE_417' : 'Expectation Failed',
        'CODE_418' : "I'm a teapot",
        'CODE_419' : 'Page Expired',
        'CODE_420' : 'Method Failure',
        'CODE_420-2' : 'Enhance Your Calm',
        'CODE_421' : 'Misdirected Request',
        'CODE_422' : 'Unprocessable Entity',
        'CODE_423' : 'Locked',
        'CODE_424' : 'Failed Dependency',
        'CODE_425' : 'Too Early',
        'CODE_426' : 'Upgrade Required',
        'CODE_428' : 'Precondition Required',
        'CODE_429' : 'Too Many Requests',
        'CODE_430' : 'Request Header Fields Too Large',
        'CODE_431' : 'Request Header Fields Too Large',
        'CODE_440' : 'Login Time-out',
        'CODE_444' : 'No Response',
        'CODE_449' : 'Retry With',
        'CODE_450' : 'Blocked by Windows Parental Controls',
        'CODE_451' : 'Unavailable For Legal Reasons',
        'CODE_451-2' : 'Redirect',
        'CODE_460' : '',
        'CODE_463' : '',
        'CODE_494' : 'Request Header Too Large',
        'CODE_495' : 'SSL Certificate Error',
        'CODE_496' : 'SSL Certificate Required',
        'CODE_497' : 'HTTP Request Sent to HTTPS Port',
        'CODE_498' : 'Invalid Token',
        'CODE_499' : 'Token Required',
        'CODE_499-2' : 'Client Closed Request',
        'CODE_500' : 'Internal Server Error',
        'CODE_501' : 'Not Implemented',
        'CODE_502' : 'Bad Gateway',
        'CODE_503' : 'Service Unavailable',
        'CODE_504' : 'Gateway Timeout',
        'CODE_505' : 'HTTP Version Not Supported',
        'CODE_506' : 'Variant Also Negotiates',
        'CODE_507' : 'Insufficient Storage',
        'CODE_508' : 'Loop Detected',
        'CODE_509' : 'Bandwidth Limit Exceeded',
        'CODE_510' : 'Not Extended',
        'CODE_511' : 'Network Authentication Required',
        'CODE_520' : 'Web Server Returned an Unknown Error',
        'CODE_521' : 'Web Server is Down',
        'CODE_522' : 'Connection Timed Out',
        'CODE_523' : 'Origin is Unreachable',
        'CODE_524' : 'A Timeout Occurred',
        'CODE_525' : 'SSL Handshake Failed',
        'CODE_526' : 'Invalid SSL Certificate',
        'CODE_527' : 'Railgun Error',
        'CODE_529' : 'Site is overloaded',
        'CODE_530' : 'Site is frozen',
        'CODE_530-2' : '',
        'CODE_561' : 'Unauthorized',
        'CODE_598' : 'Network Read Timeout Error',
        'CODE_599' : 'Network Connect Timeout Error'
    };

function removeText() {
  findElement("main").innerHTML = ``;
}

function revealText() {
  findElement("main").innerHTML = `
    <h1 style="font-family:verdana" class="textmainsecondary">femboys.tv</h1>
    <p style="font-family:'Courier New'; margin-bottom:0;">made to fuck with your head</p>
    <p style="font-family:'Courier New'; margin:0; padding-top:5px; color: #555">a scrumptious web project from your neighbourhood haxor</p>
    <p style="font-family:verdana; margin:0; padding-top:8px;" class="textmain">[[test error codes]]</p>
  `;
}

function playVideo()
{
  document.getElementById("video").style.display = "";
  document.getElementById("video").play();

  removeText();

  setTimeout(function() {
    revealText();
  }, 2000);
}
