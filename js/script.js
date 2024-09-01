// รอโหลดหน้าเว็บเสร็จ
window.onload = function() {
    // ซ่อน Splash Screen หลังจาก 2 วินาที
    setTimeout(function() {
        document.getElementById('splashScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    }, 2000); // 2000 มิลลิวินาที (2 วินาที)
};
