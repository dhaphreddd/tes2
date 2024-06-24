document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const backButton = document.createElement('button');
    backButton.textContent = 'Kembali';
    backButton.addEventListener('click', () => {
        history.back();
    });
    document.body.insertBefore(backButton, document.body.firstChild);

    // List direktori dan gambar
    const directories = [
        {
            name: 'Direktori 1',
            path: 'images/jpgs/',
            images: [
                '1.jpg',
                '2.jpg',
                '3.jpg'
                // tambahkan lebih banyak gambar sesuai kebutuhan
            ]
        },
        {
            name: 'Direktori 2',
            path: 'images/jpgs2/',
            images: [
                '4.jpg',
                // tambahkan lebih banyak gambar sesuai kebutuhan
            ]
        },
        // tambahkan lebih banyak direktori sesuai kebutuhan
    ];

    // Fungsi untuk menampilkan galeri gambar dari suatu direktori
    function showDirectory(directory) {
        gallery.innerHTML = ''; // Bersihkan galeri sebelum menambahkan gambar baru

        directory.images.forEach(image => {
            const img = document.createElement('img');
            img.src = directory.path + image;
            img.alt = image;
            img.addEventListener('click', () => {
                // Tambahkan fungsi untuk memperbesar gambar jika diperlukan
              // window.open(directory.path + image, '_blank');
            });
            gallery.appendChild(img);
        });
    }

    // Tambahkan direktori sebagai elemen yang bisa diklik
    directories.forEach(directory => {
        const dirElement = document.createElement('div');
        dirElement.textContent = directory.name;
        dirElement.classList.add('directory');
        dirElement.addEventListener('click', () => {
            showDirectory(directory);
        });
        gallery.appendChild(dirElement);
    });
});

// Fungsi untuk kembali ke halaman utama
function goToHomePage() {
    window.location.href = 'index.html';
}
