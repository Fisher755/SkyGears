//  Tailwind script already loaded via CDN
        
        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        }
        
        function toggleMobileMenu() {
            alert("В полной версии здесь будет мобильное меню");
        }
        
        function downloadPack() {
            alert("Скачивание сборки начато! (В реальном проекте — прямая ссылка на CurseForge / Modrinth)");
            // Здесь можно добавить реальную логику
        }
        
        function showLightbox(el) {
            const img = el.querySelector('img');
            document.getElementById('lightbox-image').src = img.src;
            document.getElementById('lightbox').classList.remove('hidden');
            document.getElementById('lightbox').classList.add('flex');
        }
        
        function hideLightbox() {
            const lb = document.getElementById('lightbox');
            lb.classList.add('hidden');
            lb.classList.remove('flex');
        }
        
        // Fake live online counter
        function liveCounter() {
            let count = 142;
            setInterval(() => {
                count = count + Math.floor(Math.random() * 3) - 1;
                document.getElementById('online-count').textContent = count;
                document.getElementById('stat-online').textContent = count;
            }, 4500);
        }
        
        // Parallax effect on hero (simple)
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            // Could enhance hero background if needed
        });
        
        // Keyboard ESC for lightbox
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape") {
                hideLightbox();
            }
        });
        
        // Initialize
        window.onload = function() {
            liveCounter();
            console.log('%cCreate Aeronautics сайт успешно загружен! 🚀', 'color:#f1c232; font-family:monospace');
        };