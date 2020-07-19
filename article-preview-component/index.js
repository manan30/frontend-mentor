(function () {
  let isShareTooltipActive = false;
  const shareIconEle = document.querySelector('.share-icon');

  const twitterIcon = document.createElement('img');
  twitterIcon.src = './images/icon-twitter.svg';

  const facebookIcon = document.createElement('img');
  facebookIcon.src = './images/icon-facebook.svg';

  const pinterestIcon = document.createElement('img');
  pinterestIcon.src = './images/icon-pinterest.svg';

  const shareIcon = document.createElement('img');
  shareIcon.src = './images/icon-share.svg';

  const closeIcon = document.createElement('img');
  closeIcon.src = './images/icon-close.svg';

  const tooltipDiv = document.createElement('div');
  tooltipDiv.innerText = 'SHARE';
  tooltipDiv.appendChild(facebookIcon);
  tooltipDiv.appendChild(twitterIcon);
  tooltipDiv.appendChild(pinterestIcon);
  tooltipDiv.classList.add('share-tooltip');

  function toggleShareTooltip(toggleStatus) {
    const currIcon = shareIconEle.firstChild;

    if (toggleStatus) {
      isShareTooltipActive = true;

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
      toggleShareTooltip(true);
    }
  });

  document.addEventListener('click', function toggle() {
    if (isShareTooltipActive) {
      isShareTooltipActive = false;
      toggleShareTooltip(false);
    }
  });
})();
