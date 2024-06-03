// * Код через querySelector
function toggleMedia() {
    const mediaContainer = document.querySelector('.video__img');
    const videoContainer = document.querySelector('.video__vid');
    const video = document.querySelector('.video__play');
    const unsupportedMessage = document.querySelector('.video__message');
    // Сообщение о неподдерживаемом видео скрыто по умолчанию
    unsupportedMessage.style.display = 'none';
    if (video.canPlayType) {
        // Проверяем поддержку форматов видео
        const canPlayMp4 = video.canPlayType('video/mp4');
        if (canPlayMp4 === '') {
            // Браузер не поддерживает формат MP4
            videoContainer.style.display = 'none';
            // Показываем сообщение о неподдерживаемом видео
            unsupportedMessage.style.display = 'block';
        } else {
            // Показываем видео на месте изображения
            mediaContainer.style.display = 'none';
            videoContainer.style.display = 'block';
            video.play();
            // Скрываем сообщение о неподдерживаемом видео (только если видео воспроизводится успешно)
            unsupportedMessage.style.display = 'none';
            // Добавляем обработчик события нажатия клавиши ESC
            document.addEventListener('keydown', closeVideoOnEscape);
        }
    } else {
        // Если браузер не поддерживает проверку поддержки форматов видео (это маловероятно, но можно предусмотреть)
        videoContainer.style.display = 'none';
        // Показываем сообщение о неподдерживаемом видео
        unsupportedMessage.style.display = 'block';
    }
}
function closeVideo() {
    const mediaContainer = document.querySelector('.video__img');
    const videoContainer = document.querySelector('.video__vid');
    const video = document.querySelector('.video__play');
    // Скрываем видео и показываем изображение
    video.pause();
    video.currentTime = 0;
    videoContainer.style.display = 'none';
    mediaContainer.style.display = 'block';
    // Удаляем обработчик события нажатия клавиши ESC
    document.removeEventListener('keydown', closeVideoOnEscape);
}
function closeVideoOnEscape(event) {
    const videoContainer = document.querySelector('.video__vid');
    if (event.key === 'Escape' && videoContainer.style.display === 'block') {
        closeVideo();
    }
}
// Автоматическое закрытие видео по завершении воспроизведения
const video = document.querySelector('.video__play');
video.onended = function() {
    closeVideo();
};



// * Код через getElementById
// function toggleMedia() {
//     const mediaContainer = document.getElementById('media-container');
//     const videoContainer = document.getElementById('video-container');
//     const video = document.getElementById('video');
//     const unsupportedMessage = document.getElementById('unsupported-message');

//     // Сообщение о неподдерживаемом видео скрыто по умолчанию
//     unsupportedMessage.style.display = 'none';

//     if (video.canPlayType) {
//         // Проверяем поддержку форматов видео
//         const canPlayMp4 = video.canPlayType('video/mp4');

//         if (canPlayMp4 === '') {
//             // Браузер не поддерживает формат MP4
//             videoContainer.style.display = 'none';
//             // Показываем сообщение о неподдерживаемом видео
//             unsupportedMessage.style.display = 'block';
//         } else {
//             // Показываем видео на месте изображения
//             mediaContainer.style.display = 'none';
//             videoContainer.style.display = 'block';
//             video.play();

//             // Скрываем сообщение о неподдерживаемом видео (только если видео воспроизводится успешно)
//             unsupportedMessage.style.display = 'none';

//             // Добавляем обработчик события нажатия клавиши ESC
//             document.addEventListener('keydown', closeVideoOnEscape);
//         }
//     } else {
//         // Если браузер не поддерживает проверку поддержки форматов видео (это маловероятно, но можно предусмотреть)
//         videoContainer.style.display = 'none';
//         // Показываем сообщение о неподдерживаемом видео
//         unsupportedMessage.style.display = 'block';
//     }
// }

// function closeVideo() {
//     const mediaContainer = document.getElementById('media-container');
//     const videoContainer = document.getElementById('video-container');
//     const video = document.getElementById('video');

//     // Скрываем видео и показываем изображение
//     video.pause();
//     video.currentTime = 0;
//     videoContainer.style.display = 'none';
//     mediaContainer.style.display = 'block';

//     // Удаляем обработчик события нажатия клавиши ESC
//     document.removeEventListener('keydown', closeVideoOnEscape);
// }

// function closeVideoOnEscape(event) {
//     const videoContainer = document.getElementById('video-container');
//     if (event.key === 'Escape' && videoContainer.style.display === 'block') {
//         closeVideo();
//     }
// }

// // Автоматическое закрытие видео по завершении воспроизведения
// const video = document.getElementById('video');
// video.onended = function() {
//     closeVideo();
// };