
let eventTitle = null;

const checkForEventModal = () => {
  const eventModal = document.querySelector(".Mz3isd");
  if (eventModal && !eventModal.hidden) {
    if (!eventTitle) {
      eventTitle = document.querySelector("#rAECCd");
      const guestDisplay = document.querySelector("#xDetDlgAtt .UfeRlc");
      const eventTimes = document.querySelector(".AzuXid.O2VjS.CyPPBf > span:nth-child(2)");
      const guestCount = parseInt(guestDisplay.innerText);
      eventTitle.innerText = eventTitle.innerText + " ($" + guestCount * 175 + ")";
      console.log(guestDisplay.innerText);
      console.log(eventTitle.innerText);
      console.log(eventTimes.innerText);
      console.log(guestCount);
    }

  } else {
    eventTitle = null;
  }
};

const modalInterval = setInterval(checkForEventModal, 1000);

