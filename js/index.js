var get = document.getElementById.bind(document);
var scrollable = 0;
history.scrollRestoration = "manual";

window.addEventListener("load", () => {
  get("introtext").innerText = "Enter the simulation?";
  get("introtext").className = "textmain";
  var script = document.createElement("script");
  script.innerHTML =
  `
    var scrollDisable = false;
    var windowIndex = 0;
    $.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=bd3ccae482854c72b406f81b5129b18a", function(data)
    {
      get("secondmain").innerText += ", " + data.country + " inhabitant.";
      get("secondsec").innerText += " " + data.connection.isp_name;
      isHosting(data.connection) ? get("secondsec").innerText += ". How original." : get("secondsec").innerText += ". I see you.";
    })
    $('body').on('wheel DOMMouseScroll', function (e)
    {
      if (scrollable && !scrollDisable)
      {
        scrollDisable = true;
        if (!windowIndex && e.originalEvent.wheelDelta < 0)
        {
          $('html, body').animate({
            scrollTop: $("#seconddiv").offset().top
          }, 1000);
          windowIndex += 1;
        }
        else if (windowIndex && e.originalEvent.wheelDelta >= 1)
        {
          $('html, body').animate({
            scrollTop: $("#firstdiv").offset().top
          }, 1000);
          windowIndex -= 1;
        }
        setTimeout(function(){
          scrollDisable = false;
        }, 1500);
      }
      return false;
    });
  `
  document.body.append(script);
});

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

function toggleFullscreen(forceEnter) {
  var element;
  var method;
  if (forceEnter == true || (window.screenTop && window.screenY))
  {
    element = document.body;
    method = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
  }
  else
  {
    element = document;
    method = element.cancelFullScreen || element.webkitCancelFullScreen || element.mozCancelFullScreen || element.exitFullscreen || elements.webkitExitFullscreen;
  }
  if (method)
  {
      method.call(element);
  }
  else if (typeof window.ActiveXObject !== "undefined")
  {
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null)
      {
          wscript.SendKeys("{F11}");
      }
  }
}

window.isMobile = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function toggleVideo() {
  (get("video").style.display == "none") ? get("video").style.display = "" : get("video").style.display = "none";
  (get("video").paused) ? get("video").play() : get("video").pause();
}

function toggleAudio() {
  (get("audio").paused) ? get("audio").play() : get("audio").pause();
}

function revealText() {
  get("main").innerHTML =
  `
    <div class="textmainsecondary"><span onClick="window.location.reload();">femboys.tv</span></div>
    <p style="font-family:'Courier New'; margin-bottom:0;" class="fadetext" id="first">made to f**k with your head</p>
    <p style="font-family:'Courier New'; margin:0; padding-top:5px; color: #555" class="fadetext" id="second">a scrumptious web project from your local haxor</p>
    <p class="buttonmain fadetext" onclick="toggleVideo();" id="third">[[toggle video]]&nbsp;</p>
    <p class="buttonmain fadetext" onclick="toggleAudio();" id="fourth">[[toggle audio]]</p>
  `;
}

function isHosting(data) // https://github.com/calamity-inc/Soup
{
  switch (data.autonomous_system_number)
  {
  case 3214: // xTom GmbH
  case 4785: // xTom Limited
  case 6233: // xTom
  case 8100: // QuadraNet Enterprises LLC
  case 9009: // M247 Ltd
  case 9304: // HGC Global Communications Limited
  case 9312: // xTom Hong Kong Limited
  case 9335: // CAT Telecom Public Company Limited
  case 11831: // eSecureData
  case 11878: // tzulo, inc.
  case 12876: // ONLINE S.A.S.
  case 13046: // ISKON INTERNET d.d. za informatiku i telekomunikacije
  case 13213: // UK-2 Limited
  case 16247: // M247 Ltd
  case 20278: // Nexeon Technologies, Inc.
  case 20473: // The Constant Company, LLC
  case 25369: // Hydra Communications Ltd
  case 29485: // A1 Hrvatska d.o.o.
  case 30083: // GoDaddy.com, LLC
  case 26496: // GoDaddy.com, LLC
  case 30736: // ASERGO Scandinavia ApS
  case 34594: // OT - OPTIMA TELEKOM d.d.
  case 35758: // Rachamim Aviel Twito trading as A.B INTERNET SOLUTIONS
  case 37518: // Fiber Grid INC
  case 38731: // Vietel - CHT Compamy Ltd
  case 39351: // 31173 Services AB
  case 40676: // Psychz Networks
  case 41564: // Orion Network Limited
  case 43289: // Trabia SRL
  case 43513: // Sia Nano IT
  case 45102: // Alibaba US Technology Co. Ltd.
  case 45899: // VNPT Corp
  case 46562: // Performive LLC
  case 46805: // Inter Connects Inc
  case 46844: // Sharktech
  case 47810: // Proservice LLC
  case 49981: // WorldStream B.V.
  case 50304: // Blix Solutions AS
  case 51747: // Internet Vikings International AB
  case 52423: // Data Miners S.A. ( Racknation.cr )
  case 53013: // W I X NET DO BRASIL LTDA - ME
  case 58182: // Wix.com Ltd.
  case 53667: // FranTech Solutions
  case 55664: // PT Inovasi Global Mumpuni
  case 58065: // Packet Exchange Limited
  case 58073: // YISP B.V.
  case 60068: // Datacamp Limited
  case 62240: // Clouvider Limited
  case 131199: // Nexeon Technologies, Inc.
  case 132203: // Tencent Building Kejizhongyi Avenue
  case 133480: // Intergrid Group Pty Ltd
  case 133752: // Leaseweb Asia Pacific pte. ltd.
  case 136787: // TEFINCOM S.A.
  case 136897: // EnjoyVC Cloud Group Limited
  case 137263: // NETEASE (HONG KONG) LIMITED
  case 137409: // GSL Networks Pty LTD
  case 141039: // TEFINCOM S.A.
  case 141167: // AgotoZ HK Limited
  case 146834: // XUNYOU SiChuan XunYou Network Technologe Limit Co
  case 147049: // PacketHub S.A.
  case 197706: // Keminet SHPK
  case 198371: // NINET Company Nis d.o.o.
  case 198605: // AVAST Software s.r.o.
  case 198621: // AVAST Software s.r.o.
  case 199524: // G-Core Labs S.A.
  case 205053: // Asimia Damaskou
  case 205119: // TELEKS DOOEL Skopje
  case 206804: // EstNOC OY
  case 212238: // Datacamp Limited
  case 213277: // ALMOUROLTEC SERVICOS DE INFORMATICA E INTERNET LDA
  case 263702: // GRUPO ZGH SPA
  case 268581: // QNAX LTDA
  case 22612: // Namecheap, Inc.
  case 8560: // IONOS SE
  case 47846: // SEDO GmbH
  case 46606: // Unified Layer
  case 35916: // MULTACOM CORPORATION
  case 3900: // SWITCH, LTD
  case 53831: // Squarespace, Inc.
  case 6724: // Strato AG
  case 18779: // EGIHosting
  case 32751: // Nuclearfallout Enterprises, Inc (NFO)
  case 206092: // IPXO Limited (Bandito Networks Inc), related to Express VPN
  case 36352: // ColoCrossing
  case 60087: // Netsons s.r.l. (Uania Cloud Service)
  case 8075: // Microsoft / Azure
  case 47674: // related to BLAZINGFAST
  case 206444: // KUBBUR
    // Leaseweb USA, Inc.
  case 7203:
  case 19148:
  case 27411:
  case 30633:
  case 393886:
  case 394380:
  case 395954:
  case 396190:
  case 396362:
    // Cogent Communications
  case 174:
  case 2149:
  case 4550:
  case 6259:
  case 6299:
  case 6494:
  case 6496:
  case 7061:
  case 7458:
  case 10768:
  case 11024:
  case 11220:
  case 11526:
  case 12207:
  case 16631:
  case 19164:
  case 22099:
    return true;
  }
  if (/cdn|colocation|cloud|datacenter|data( |\-)center|ddos|dedi|layer|scale|server|vps|hetzner|ovh|contabo|digitalocean|amazon|google\s*llc|akamai|microsoft|alibaba|fastly|linode|aruba|godaddy|oracle/i.test(data.organization_name))
    return true;

  else if (data.isp_name.includes("host") && !data.isp_name.includes("afrihost"))
    return true;

  return false;
}

function initMain()
{
  toggleVideo();
  toggleAudio();
  get("main").innerHTML = ``;
  if (!window.isMobile()) {
    //toggleFullscreen(true);
  }

  setTimeout(function() {
    revealText();
  }, 2650);

  setTimeout(function() {
    scrollable = true;
  }, 7650);
}

function developerMode() {
  get("fourth").innerText += "\u00A0";
  get("main").insertAdjacentHTML('beforeend',
  `
    <p class="buttonmain" onclick="toggleFullscreen();" id="fourth">[[toggle fullscreen]]&nbsp;</p>
    <p class="buttonmain" onclick="location.href = '404.html';" id="fourth">[[random error]]</p>
  `);

  document.body.contentEditable = true;
  return 'ok nerd';
}
