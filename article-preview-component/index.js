(function () {
  let isShareTooltipActive = false;
  const shareIcon = document.querySelector('.share-icon');

  const twitterIcon = document.createElement('img');
  twitterIcon.src = './images/icon-twitter.svg';

  const facebookIcon = document.createElement('img');
  facebookIcon.src = './images/icon-facebook.svg';

  const pinterestIcon = document.createElement('img');
  pinterestIcon.src = './images/icon-pinterest.svg';

  const tooltipDiv = document.createElement('div');
  tooltipDiv.innerText = 'SHARE';
  tooltipDiv.appendChild(facebookIcon);
  tooltipDiv.appendChild(twitterIcon);
  tooltipDiv.appendChild(pinterestIcon);
  tooltipDiv.classList.add(['share-tooltip']);

  function toggleShareTooltip(toggleStatus) {
    console.log({ isShareTooltipActive, toggleStatus });
    if (toggleStatus) {
      isShareTooltipActive = true;
      shareIcon.appendChild(tooltipDiv);
    } else {
      shareIcon.removeChild(tooltipDiv);
    }
  }

  shareIcon.addEventListener('click', function toggle(e) {
    e.stopPropagation();
    toggleShareTooltip(true);
  });

  document.addEventListener('click', function toggle() {
    if (isShareTooltipActive) {
      isShareTooltipActive = false;
      toggleShareTooltip(false);
    }
  });
})();
