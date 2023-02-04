function save_options() {
  var avgHourlyRate = document.getElementById("avgHourlyRate").value;
  var overheadMinutes = document.getElementById("overheadMinutes").value;
  chrome.storage.sync.set(
    {
      avgHourlyRate: avgHourlyRate,
      overheadMinutes: overheadMinutes,
    },
    function () {
      // Update status to let user know options were saved.
      var status = document.getElementById("status");
      status.textContent = "Options saved.";
      setTimeout(function () {
        status.textContent = "";
      }, 750);
    }
  );
}

function restore_options() {
  chrome.storage.sync.get(
    {
      avgHourlyRate: "100",
      overheadMinutes: "20",
    },
    function (items) {
      document.getElementById("avgHourlyRate").value = items.avgHourlyRate;
      document.getElementById("overheadMinutes").value = items.overheadMinutes;
    }
  );
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
