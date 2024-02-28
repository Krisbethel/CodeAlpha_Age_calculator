
      function calculateAge() {
        var dobDay = parseInt(document.getElementById("dobDay").value);
        var dobMonth = parseInt(document.getElementById("dobMonth").value);
        var dobYear = parseInt(document.getElementById("dobYear").value);

        var today = new Date();
        var currentYear = today.getFullYear();
        var currentMonth = today.getMonth() + 1;
        var currentDay = today.getDate();

        if (
          dobYear > currentYear ||
          (dobYear === currentYear && dobMonth > currentMonth) ||
          (dobYear === currentYear &&
            dobMonth === currentMonth &&
            dobDay > currentDay)
        ) {
          alert("Please select a valid date of birth.");
          return;
        }

        var ageYears = currentYear - dobYear;
        var ageMonths = currentMonth - dobMonth;
        var ageDays = currentDay - dobDay;

        if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
          ageYears--;
          ageMonths += 12;
          if (ageDays < 0) {
            ageDays += new Date(currentYear, currentMonth, 0).getDate();
          }
        }

        var ageString = "";

        if (ageYears > 0) {
          ageString += ageYears + (ageYears === 1 ? " year, " : " years, ");
        }
        if (ageMonths > 0) {
          ageString +=
            ageMonths + (ageMonths === 1 ? " month and " : " months and ");
        }
        if (ageDays > 0) {
          ageString += ageDays + (ageDays === 1 ? " day" : " days");
        }

        document.getElementById("result").innerHTML =
          "<strong>Your age is:</strong> " + ageString;
      }

      function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
      }
    