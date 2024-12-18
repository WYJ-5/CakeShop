/* 商品資訊 */
function showDetails(id) {
    document.getElementById(id).style.display = "flex";
}

function hideDetails(id) {
    document.getElementById(id).style.display = "none";
}

// 點擊彈出框外部的區域關閉
window.onclick = function(event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
};
