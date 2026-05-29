const titles = document.querySelectorAll('.sae-title');

titles.forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;

        document.querySelectorAll('.sae-content').forEach(c => {
            if (c !== content) {
                c.style.display = 'none';
            }
        });

        content.style.display =
            content.style.display === 'block' ? 'none' : 'block';
    });
});