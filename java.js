// Tạo hiệu ứng tuyết rơi
function createSnow() {
    const snow = document.querySelector('.snow');
    for(let i = 0; i < 200; i++) {
        const snowflake = document.createElement('div');
        snowflake.style.position = 'absolute';
        snowflake.style.width = '5px';
        snowflake.style.height = '5px';
        snowflake.style.background = 'white';
        snowflake.style.borderRadius = '50%';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.animation = `fall ${Math.random() * 10 + 5}s linear infinite`;
        snow.appendChild(snowflake);
    }
}

// Tạo style cho animation tuyết rơi
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(-100vh);
        }
        100% {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(styleSheet);

// Tạo tuyết ngay lập tức
createSnow();

// Thêm event listener cho hộp quà
document.addEventListener('DOMContentLoaded', function() {
    const present = document.querySelector('.present');
    const presentWrapper = document.querySelector('.present-wrapper');
    const christmasContainer = document.querySelector('.christmas-container');
    
    present.addEventListener('click', function() {
        presentWrapper.style.opacity = '0';
        setTimeout(() => {
            presentWrapper.style.display = 'none';
            christmasContainer.classList.remove('hidden');
        }, 500);
    });
});

// Thêm hàm tạo sparkles
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    document.querySelector('.christmas-container').appendChild(sparkle);
    
    // Lấy vị trí của Santa
    const santa = document.querySelector('.santa');
    const santaRect = santa.getBoundingClientRect();
    
    // Điều chỉnh vị trí sparkle để xuất hiện bên trái dòng chữ
    sparkle.style.left = (santaRect.left - 400 + Math.random() * 30) + 'px'; // Điều chỉnh số 350 để thay đổi khoảng cách
    sparkle.style.top = (santaRect.top + Math.random() * 50 + 50) + 'px';
    
    // Xóa sparkle sau khi animation kết thúc
    setTimeout(() => sparkle.remove(), 1000);
}

// Tạo sparkles liên tục
setInterval(createSparkle, 10);
