document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function () {
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            document.getElementById(button.dataset.section).classList.add('active');
            button.classList.add('active');
        });
    });
});

// وظيفة حساب الزكاة
function calculateZakat() {
    const totalMoney = parseFloat(document.getElementById('totalMoney').value);
    const currencyName = document.getElementById('currency').options[document.getElementById('currency').selectedIndex].text;

    if (isNaN(totalMoney) || totalMoney <= 0) {
        alert("يرجى إدخال مبلغ صحيح!");
        return;
    }

    const zakat = totalMoney * 0.025;
    document.getElementById('result').innerHTML = `الزكاة الواجبة هي: ${zakat.toFixed(2)} ${currencyName}`;
}

// وظيفة المسبحة
let score = 0;
let tasbe7at = ["سبحـان الله", "الحمد لله", "لا إله إلا الله", "الله أكبر"];
let clicks = 10;
let index = 0;

function count() {
    score++;
    document.getElementById("score").innerText = "score: " + score;
    clicks--;

    if (clicks === 0) {
        clicks = 10;
        index = (index + 1) % tasbe7at.length;
        document.getElementById("tasbe7").innerText = tasbe7at[index];
    }

    document.getElementById("text").innerText = clicks;
}
