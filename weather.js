document.addEventListener("DOMContentLoaded", function() {
    const apikey = "0d36c6e4d5143385e1246c089d8f2323";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchbox = document.querySelector(".search input");
    const searchbtn = document.querySelector(".search button");
    const weathericon = document.querySelector(".image img");

    async function check(location) {
        if (!location) {
            alert("Please enter a location.");
            return;
        }

        const response = await fetch(apiurl + location + `&appid=${apikey}`);

        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".image").style.display = "none";
        } else {
            var Response = await response.json();
            document.querySelector(".humidity").innerHTML = Response.main.humidity + "%";
            document.querySelector(".temp").innerHTML = Math.round(Response.main.temp) + " °c";
            document.querySelector(".wind").innerHTML = Response.wind.speed + "km/h";
            console.log(Response.weather[0].main)
            if (Response.weather[0].main == "Clear") {
                weathericon.src = "weatherimgs/sunny.jpg"; // Update to relative path
                document.querySelector(".feels").innerHTML = Response.weather[0].main;
                console.log("clear")
            } else if (Response.weather[0].main == "Clouds") {
                weathericon.src = "weatherimgs2/cloudy.png"; // Update to relative path
                document.querySelector(".feels").innerHTML = Response.weather[0].main;
                console.log("cloudy")
            } else if (Response.weather[0].main == "Rain") {
                weathericon.src = "weatherimgs/rainy.jpg"; // Update to relative path
                document.querySelector(".feels").innerHTML = Response.weather[0].main;
                console.log("rain")
            }
            else if (Response.weather[0].main == "Mist") {
                weathericon.src = "weatherimgs/mist.jpg"; // Update to relative path
                document.querySelector(".feels").innerHTML = Response.weather[0].main;
                console.log(Response.weather[0].main)
            }
            else if (Response.weather[0].main == "Snow") {
                weathericon.src = "weatherimgs/mist.jpg"; // Update to relative path
                document.querySelector(".feels").innerHTML = Response.weather[0].main;
                console.log(Response.weather[0].main)
            }else if (Response.weather[0].main == "Fog") {
                weathericon.src = "weatherimgs/mist.jpg"; // Update to relative path
                document.querySelector(".feels").innerHTML = Response.weather[0].main;
                console.log(Response.weather[0].main)
            }
            else if (Response.weather[0].main == "Dust") {
                weathericon.src = "weatherimg/rainy.png"; // Update to relative path
                document.querySelector(".feels").innerHTML = Response.weather[0].main;
                console.log(Response.weather[0].main)
            }
            else if (Response.weather[0].main == "Drizzle") {
                weathericon.src = "weatherimgs/mist.jpg"; // Update to relative path
                document.querySelector(".feels").innerHTML = Response.weather[0].main;
                console.log(Response.weather[0].main)
            }
            else if (Response.weather[0].main == "Haze") {
                weathericon.src = "weatherimgs/haze.png"; // Update to relative path
                document.querySelector(".feels").innerHTML = Response.weather[0].main;
                console.log(Response.weather[0].main)
            }
            document.querySelector(".image").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    }

    searchbtn.addEventListener("click", () => {
        const location = searchbox.value.trim();
        check(location);
    });

    // Optionally, trigger search by pressing "Enter"
    searchbox.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const location = searchbox.value.trim();
            check(location);
        }
    });
});
