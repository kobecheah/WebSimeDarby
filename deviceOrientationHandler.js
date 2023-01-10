function appendRotateDeviceCanvas() {
    var str = '<link rel="stylesheet" href="./style.css" /><div id="treasure-hunt-landscape-overlay" style="display: flex"><p>Please rotate your phone to Potrait Mode</p><img src="./images/RotatePhone.png" /></div>';
    document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", str);
}

function updateRotateDeviceCanvas(display) {
    document.getElementById('treasure-hunt-landscape-overlay').style.display = display ? 'flex' : 'none';
    document.getElementById('treasure-hunt-content').style.display = display ? 'none' : 'block';
}

appendRotateDeviceCanvas();

var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let landscape = window.matchMedia("(orientation: landscape)");

if (isIOS) {
    updateRotateDeviceCanvas(isIosLandscape(landscape));
    landscape.addEventListener("change", function (e) {
        updateRotateDeviceCanvas(isIosLandscape(e));
    });
}
else {
    updateRotateDeviceCanvas(isAndroidLandscape());
    // landscape.addEventListener("change", function (e) {
    //     updateRotateDeviceCanvas(isAndroidLandscape());
    // });
    window.addEventListener("resize", (event) => {
        updateRotateDeviceCanvas(isAndroidLandscape());
    });
}

function isAndroidLandscape() {
    return screen.availWidth > screen.availHeight;
}

function isIosLandscape(match) {
    return match.matches;
}