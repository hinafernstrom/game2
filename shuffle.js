//Most of the code here to coded by hcat gpt
document.addEventListener('DOMContentLoaded', function () {
    function positionRandomly(element) {
      const elementWidth = element.offsetWidth;
      const elementHeight = element.offsetHeight;
      let randomX = Math.floor(Math.random() * (window.innerWidth - elementWidth));
      let randomY = Math.floor(Math.random() * (window.innerHeight - elementHeight));
      randomX = Math.max(randomX, 0);
      randomY = Math.max(randomY, 0);
      element.style.position = "absolute";
      element.style.left = `${randomX}px`;
      element.style.top = `${randomY}px`;
    }

    const snackImages = document.querySelectorAll('.snacks');
    const platediv = document.querySelector('.platediv');
    let clickedCount = 0;

    snackImages.forEach(function (image) {
      positionRandomly(image);

      image.addEventListener('click', function () {
        image.remove();
        platediv.appendChild(image);
        positionRandomly(image);

        setTimeout(function () {
          image.style.left = '50vw';
          image.style.top = '50vh';
          image.style.transform = 'translate(-50%, -50%)';
        }, 500);

        // Increment the clicked count
        clickedCount++;

        if (clickedCount === 7) {
          const gifPaths = [
            'snacks/winred.gif',
            // 'snacks/yay.gif',
            // 'snacks/wee.gif',
            // 'snacks/congrats.gif'
          ];
          showGif(gifPaths);
        }
      });
    });

    // Add the timer and game over handling
    let timerSeconds = 30;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = timerSeconds;

    const timerInterval = setInterval(function () {
      timerSeconds--;

      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        const gameOverGifPath = 'snacks/over.gif';
        showGif([gameOverGifPath]);
      }

      timerElement.textContent = timerSeconds;
    }, 1000);

    function showGif(gifPaths) {
      gifPaths.forEach((gifPath, index) => {
        setTimeout(() => {
          const gifElement = document.createElement('img');
          gifElement.src = gifPath;
          gifElement.style.width = '40vw';
          gifElement.style.height = '40vh';
          gifElement.style.position = 'fixed';
          gifElement.style.top = '50%';
          gifElement.style.left = '50%';
          gifElement.style.transform = 'translate(-50%, -50%)';
          gifElement.style.zIndex = '1000';

          document.body.appendChild(gifElement);
        }, index * 2000);
      });
    }
  });