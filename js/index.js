var get = document.getElementById.bind(document);
var fullPage = 0;

function waitFor(conditionFunction) {

  const poll = resolve => {
    if(conditionFunction()) resolve();
    else setTimeout(_ => poll(resolve), 400);
  }

  return new Promise(poll);
}

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function chooseMedia() {
  const mediaPairs = [
    { video: 'assets/video/msc', audio: 'assets/audio/msc' },
    { video: 'assets/video/mscd', audio: 'assets/audio/mscd' },
    { video: 'assets/video/mscg', audio: 'assets/audio/mscl' }
  ];

  const pairIndex = getUrlParameter('pair');

  let selectedPair;
  if (pairIndex !== null && mediaPairs[pairIndex]) {
    selectedPair = mediaPairs[pairIndex];
  } else {
    selectedPair = mediaPairs[Math.floor(Math.random() * mediaPairs.length)];
  }

  get("webmvideo").src = selectedPair.video + ".webm";
  get("mp4video").src = selectedPair.video + ".mp4#t=0.5";
  get("oggaudio").src = selectedPair.audio + ".ogg";
  get("mp3audio").src = selectedPair.audio + ".mp3";

  get("bgVideo").load();
  get("bgAudio").load();
}

function initPageLoaded() {
  chooseMedia();
  waitFor(_ => get("bgVideo").readyState >= 2).then(_ => {
    get("cover").remove();
  });
}

function toggleFullscreen() {
  let d = document, de = d.documentElement;
  if (!d.fullscreenElement && !d.mozFullScreenElement && !d.webkitFullscreenElement && !d.msFullscreenElement)
  {
    let reqFS = de.requestFullscreen || de.mozRequestFullScreen || de.webkitRequestFullscreen || de.msRequestFullscreen;
    reqFS.call(de);
  }
  else
  {
    let exitFS = d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen;
    exitFS.call(d);
  }
}

function toggleElement(elementName) {
  let elementInst = get(elementName);
  if (elementInst.tagName == "VIDEO")
  {
    elementInst.style.display = (elementInst.style.display == "none") ? "" : "none";
  }
  elementInst.paused ? elementInst.play() : elementInst.pause();
}

function revealText() {
  get("main").innerHTML =
  `
    <div class="section-title-gradient"><span onClick="window.location.reload();">femboys.tv</span></div>
    <p style="font-family:'Courier New'; margin-bottom:0;" class="fadetext" id="first"><span>designed to twist your perceptions</span></p>
    <p style="font-family:'Courier New'; margin:0; padding-top:5px; color: #A0A0A0" class="fadetext" id="second">a dark digital delicacy; reality's boundaries are about to blur</p>
    <p class="section-button fadetext" onclick="toggleElement('bgVideo');" id="third">[toggle video]&nbsp;</p>
    <p class="section-button fadetext" onclick="toggleElement('bgAudio');" id="fourth">[toggle audio]</p>
  `;
}

function reduceAudioVolume(audioName)
{
  var audio = get(audioName);
  var fadeAudio = setInterval(function() {
    const fadeFactor = 0.98;
    audio.volume *= fadeFactor;

    if (audio.volume < 0.5 + Number.EPSILON) {
        clearInterval(fadeAudio);
    }
  }, 50);
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
    fullPage.setMouseWheelScrolling(true);
    fullPage.setAllowScrolling(true);
    reduceAudioVolume('bgAudio');
    get("arrow").style.display = "";
  }, 7650);
}

function developerMode() {
  get("fourth").innerText += "\u00A0";
  get("main").insertAdjacentHTML('beforeend',
  `
    <p class="section-button" onclick="toggleFullscreen();" id="fourth">[toggle fullscreen]&nbsp;</p>
    <p class="section-button" onclick="location.href = '404.html';" id="fourth">[random error]</p>
  `);
  document.body.contentEditable = true;
  return 'ok nerd';
}