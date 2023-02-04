let eventTitle = null;
const avgHourlyRate = 100;
const minutesOverhead = 30;

const checkForEventModal = () => {
  const eventModal = document.querySelector(".Mz3isd");
  if (eventModal && !eventModal.hidden) {
    if (!eventTitle) {
      eventTitle = document.querySelector("#rAECCd");
      const guestDisplay = document.querySelector("#xDetDlgAtt .UfeRlc");
      const eventTimes = document.querySelector(".AzuXid.O2VjS.CyPPBf > span:nth-child(2)");
      const guestCount = parseInt(guestDisplay.innerText);
      const eventCost = (duration(eventTimes.innerText) + minutesOverhead * 2) * guestCount * (avgHourlyRate / 60.0);
      eventTitle.innerText = `${eventTitle.innerText} ($${eventCost})`;
    }
  } else {
    eventTitle = null;
  }
};

const duration = (durationString) => {
  times = durationString.split(" – ");
  return (timestringToDate(times[1]) - timestringToDate(times[0])) / 1000 / 60;
};

const timestringToDate = (timeString) => {
  return new Date(`1970-01-01 ${timeString}`);
};

const modalInterval = setInterval(checkForEventModal, 1000);
