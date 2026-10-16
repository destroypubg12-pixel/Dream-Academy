
    function openTab(evt, tabId) {
        // Barcha bo'limlarni yashirish
        const contents = document.querySelectorAll('.tab-content');
        contents.forEach(content => content.classList.remove('active'));

        const buttons = document.querySelectorAll('.nav-btn');
        buttons.forEach(btn => btn.classList.remove('active'));

        // Tanlangan bo'limni ko'rsatish va tugmani faollashtirish
        document.getElementById(tabId).classList.add('active');
        evt.currentTarget.classList.add('active');
    }