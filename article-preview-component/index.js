(function () {
  const isMobile = window.innerWidth < 815;
  let closeIconEle;

  let isShareTooltipActive = false;
  const contactContainer = document.querySelector('.contact-container');
  const shareIconEle = document.querySelector('.share-icon');

  const twitterIcon = document.createElement('img');
  twitterIcon.src = './images/icon-twitter.svg';
  twitterIcon.alt = 'twitter-icon';

  const facebookIcon = document.createElement('img');
  facebookIcon.src = './images/icon-facebook.svg';
  facebookIcon.alt = 'facebook-icon';

  const pinterestIcon = document.createElement('img');
  pinterestIcon.src = './images/icon-pinterest.svg';
  pinterestIcon.alt = 'pinterest-icon';

  const shareIcon = document.createElement('img');
  shareIcon.src = './images/icon-share.svg';
  shareIcon.alt = 'share-icon';

  const closeIcon = document.createElement('img');
  closeIcon.src = './images/icon-close.svg';
  closeIcon.alt = 'close-icon';

  const tooltipDiv = document.createElement('div');
  tooltipDiv.innerText = 'SHARE';
  tooltipDiv.appendChild(facebookIcon);
  tooltipDiv.appendChild(twitterIcon);
  tooltipDiv.appendChild(pinterestIcon);
  tooltipDiv.classList.add('share-tooltip');

  if (isMobile) {
    closeIconEle = document.createElement('div');
    closeIconEle.classList.add('close-icon');
    closeIconEle.appendChild(closeIcon);
    tooltipDiv.appendChild(closeIconEle);
  }

  function toggleShareTooltip(toggleStatus) {
    const currIcon = shareIconEle.firstChild;

    if (toggleStatus) {
      tooltipDiv.classList.remove('slide-out');
      tooltipDiv.classList.add('slide-in');

      if (!isMobile) {
        shareIconEle.appendChild(tooltipDiv);
        shareIconEle.style.backgroundColor = '#718095';

        shareIconEle.removeChild(shareIconEle.children[0]);
        shareIconEle.firstChild.replaceWith(closeIcon);
      } else {
        contactContainer.appendChild(tooltipDiv);
      }
    } else {
      tooltipDiv.classList.remove('slide-in');
      tooltipDiv.classList.add('slide-out');
      tooltipDiv.addEventListener(
        'animationend',
        () => {
          if (!isMobile) shareIconEle.removeChild(tooltipDiv);
          else contactContainer.removeChild(tooltipDiv);
        },
        { once: true }
      );

      if (!isMobile) {
        shareIconEle.style.backgroundColor = '#eef1f9';

        shareIconEle.firstChild.replaceWith(shareIcon);
      } else {
        contactContainer.removeChild(tooltipDiv);
      }
    }
  }

  shareIconEle.addEventListener('click', function toggle(e) {
    e.stopPropagation();
    if (!isShareTooltipActive) {
      isShareTooltipActive = true;
      toggleShareTooltip(true);
    } else {
      isShareTooltipActive = false;
      toggleShareTooltip(false);
    }
  });

  if (isMobile) {
    closeIconEle.addEventListener('click', function toggle(e) {
      console.log(e);
      e.stopPropagation();
      isShareTooltipActive = false;
      toggleShareTooltip(false);
    });
  }
})();
