// This is a JavaScript file

window.addEventListener('load', function() {
        alert('load');
    },
    false
);
document.addEventListener('deviceready', function() {
        navigator.camera.getPicture(
            onSuccess,
            onFail,
            {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
            }
        );
    },
    false
);

function onSuccess (imageURI) {
    var largeImage = document.getElementById ('picture');
    largeImage.style.display = 'block';
    largeImage.src = imageURI;
}

function onFail (message) {
    alert('An error occured: ' + message);
}

// スワイプを検知したあとの処理
function swipeEvent(direction) {
    if (direction == 'left'){
      location.href = "./picList.html";
    }
}