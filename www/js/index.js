// This is a JavaScript file

// スワイプを検知したあとの処理
function swipeEvent(direction) {
    if (direction == 'right'){
      location.href = "./page/picSelect.html";
    } else if (direction == 'left'){  
      location.href = "./page/camera.html";
    }
}