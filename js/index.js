var get = document.getElementById.bind(document);
var fp = 0;
const bgVideo = document.getElementById("bgVideo");

function waitFor(conditionFunction) {

  const poll = resolve => {
    if(conditionFunction()) resolve();
    else setTimeout(_ => poll(resolve), 400);
  }

  return new Promise(poll);
}

function initPageLoaded()
{
  get("cover").style.display = "none";
  $(function() {
    var script = document.createElement("script");
    script.innerHTML =
    `
      apimon.myip().then(ip =>
      {
        apimon.ip(ip).then(result =>
        {
          get("section2-welcome").innerText += ", " + result.country.native_name + " inhabitant.";
          get("section2-identify").innerText += " " + result.as.org.replace(/ .*/,'');
          get("section2-identify").innerText += isHosting(result.as) ? ". How original." : ". I see you.";
        }).catch(()=>{});
      }).catch(()=>{});
    `
    document.body.append(script);
  });
}

bgVideo.addEventListener("loadeddata", () => {
  console.log(bgVideo.readyState);
  waitFor(_ => bgVideo.readyState >= 2).then(_ => initPageLoaded());
  console.log(bgVideo.readyState);
});

function isHosting(data) // https://github.com/calamity-inc/Soup
{
  switch (data.number)
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
  if (/cdn|colocation|cloud|datacenter|data( |\-)center|ddos|dedi|layer|scale|server|vps|hetzner|ovh|contabo|digitalocean|amazon|google\s*llc|akamai|microsoft|alibaba|fastly|linode|aruba|godaddy|oracle/i.test(data.org))
    return true;

  if (data.org)
  {
    if (data.org.includes("host") && !data.org.includes("afrihost"))
    {
      return true;
    }
  }

  return false;
}

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

function toggleElement(elementName) {
  if (elementName == "bgVideo")
  {
    get(elementName).style.display = (get(elementName).style.display == "none") ? "" : "none";
  }
  get(elementName).paused ? get(elementName).play() : get(elementName).pause();
}

function revealText() {
  get("main").innerHTML =
  `
    <div class="section-title-gradient"><span onClick="window.location.reload();">femboys.tv</span></div>
    <p style="font-family:'Courier New'; margin-bottom:0;" class="fadetext" id="first">designed to twist your perception</p>
    <p style="font-family:'Courier New'; margin:0; padding-top:5px; color: #A0A0A0" class="fadetext" id="second">a dark digital delicacy; reality's boundaries are about to blur</p>
    <p class="section-button fadetext" onclick="toggleElement('bgVideo');" id="third">[[toggle video]]&nbsp;</p>
    <p class="section-button fadetext" onclick="toggleElement('bgAudio');" id="fourth">[[toggle audio]]</p>
  `;
}

function getAndFadeAudio(audioName)
{
  var audio = get(audioName);
  var fadeAudio = setInterval(function()
  {
    if (audio.volume >= 0.5 - Number.EPSILON)
    {
      audio.volume -= 0.1;
    }
    if (audio.volume < 0.5 + Number.EPSILON)
    {
      clearInterval(fadeAudio);
    }
  }, 200);
}

function initMain()
{
  toggleElement('bgVideo');
  toggleElement('bgAudio');
  get("main").innerHTML = ``;

  setTimeout(function() {
    revealText();
  }, 2507);

  setTimeout(function() {
    fp.setMouseWheelScrolling(true);
    fp.setAllowScrolling(true);
    getAndFadeAudio("bgAudio");
  }, 7650);
}

function developerMode() {
  get("fourth").innerText += "\u00A0";
  get("main").insertAdjacentHTML('beforeend',
  `
    <p class="section-button" onclick="toggleFullscreen();" id="fourth">[[toggle fullscreen]]&nbsp;</p>
    <p class="section-button" onclick="location.href = '404.html';" id="fourth">[[random error]]</p>
  `);
  document.body.contentEditable = true;
  return 'ok nerd';
}