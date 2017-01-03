               //var lat = $.url().param('lat') || 42.288788;
               //var lng = $.url().param('lng') || -71.551678;
function formatTime(time) {
                    time = time.split(':'); // convert to array
               
               // fetch
               var hours = Number(time[0]);
               var minutes = Number(time[1]);
               
               // calculate
               var timeValue = "" + ((hours >12) ? hours - 12 : hours);  // get hours
               timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
               timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM
               return timeValue;
                }

function parseDates(data){                                        
                   if (data.code === 200) {
                       var fajr = data.data.timings.Fajr;
                       var duhr = data.data.timings.Dhuhr;
                       var asr = data.data.timings.Asr;
                       var maghrib = data.data.timings.Maghrib;
                       var isha = data.data.timings.Isha;
                       var date = data.data.date.readable;
                       $("#fajr").html(formatTime(fajr));
                       $("#duhr").html(formatTime(duhr));
                       $("#asr").html(formatTime(asr));
                       $("#maghrib").html(formatTime(maghrib));
                       $("#isha").html(formatTime(isha));
                       $("#date").html(date);
                   }
               }