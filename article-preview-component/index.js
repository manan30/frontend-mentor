(function () {
  let isShareTooltipActive = false;
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

  function toggleShareTooltip(toggleStatus) {
    const currIcon = shareIconEle.firstChild;

    if (toggleStatus) {
      tooltipDiv.classList.remove('slide-out');
      tooltipDiv.classList.add('slide-in');

      shareIconEle.appendChild(tooltipDiv);
      shareIconEle.style.backgroundColor = '#718095';

      shareIconEle.removeChild(shareIconEle.children[0]);
      shareIconEle.firstChild.replaceWith(closeIcon);
    } else {
      tooltipDiv.classList.remove('slide-in');
      tooltipDiv.classList.add('slide-out');
      tooltipDiv.addEventListener(
        'animationend',
        () => shareIconEle.removeChild(tooltipDiv),
        { once: true }
      );

      shareIconEle.style.backgroundColor = '#eef1f9';

      shareIconEle.firstChild.replaceWith(shareIcon);
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
})();
