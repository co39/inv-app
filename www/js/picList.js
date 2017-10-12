// This is a JavaScript file

// スワイプを検知したあとの処理
function swipeEvent(direction) {
    if (direction == 'right'){
      location.href = "./picSelect.html";
    } else if (direction == 'left'){  
      location.href = "./camera.html";
    }
}