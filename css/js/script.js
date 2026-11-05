/* =====================================================
   MAHESH GREEN FIELDS
   COMPLETE GLOBAL JAVASCRIPT
===================================================== */


document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuBtn =
        document.getElementById("menuBtn");

    const navbar =
        document.querySelector(".navbar");


    if (menuBtn && navbar) {

        menuBtn.addEventListener(
            "click",
            function () {

                navbar.classList.toggle("show");

            }
        );

    }


    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";


    const navLinks =
        document.querySelectorAll(
            ".navbar a"
        );


    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");


        if (
            linkPage === currentPage &&
            !link.classList.contains(
                "nav-register"
            )
        ) {

            link.classList.add("active");

        }

    });


    /* =================================================
       CLOSE MOBILE MENU
    ================================================= */

    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (navbar) {

                    navbar.classList.remove(
                        "show"
                    );

                }

            }
        );

    });


    /* =================================================
       CARD SCROLL ANIMATION
    ================================================= */

    const cards =
        document.querySelectorAll(
            ".service-card, .crop-card, .info-card"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateY(0)";

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        cards.forEach(function (card) {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(25px)";

            card.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            observer.observe(card);

        });

    }


    /* =================================================
       BUTTON EFFECT
    ================================================= */

    const buttons =
        document.querySelectorAll(
            ".btn"
        );


    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                button.style.transform =
                    "scale(0.97)";


                setTimeout(
                    function () {

                        button.style.transform =
                            "";

                    },
                    150
                );

            }
        );

    });


    /* =================================================
       WEATHER SYSTEM
    ================================================= */

    const weatherForm =
        document.getElementById(
            "weatherForm"
        );


    if (weatherForm) {

        weatherForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const cityInput =
                    document.getElementById(
                        "cityInput"
                    );


                const cityName =
                    document.getElementById(
                        "cityName"
                    );


                const weatherSection =
                    document.querySelector(
                        ".weather-page-section"
                    );


                const temperature =
                    document.getElementById(
                        "temperature"
                    );


                const temperatureSmall =
                    document.getElementById(
                        "temperatureSmall"
                    );


                const humidity =
                    document.getElementById(
                        "humidity"
                    );


                const windSpeed =
                    document.getElementById(
                        "windSpeed"
                    );


                const rainChance =
                    document.getElementById(
                        "rainChance"
                    );


                const mainWeatherIcon =
                    document.getElementById(
                        "mainWeatherIcon"
                    );


                const weatherStatus =
                    document.getElementById(
                        "weatherStatus"
                    );


                const weatherMessage =
                    document.getElementById(
                        "weatherMessage"
                    );


                if (
                    !cityInput ||
                    cityInput.value.trim() === ""
                ) {

                    return;

                }


                const city =
                    cityInput.value.trim();


                /* LOCATION */

                if (cityName) {

                    cityName.textContent =
                        city;

                }


                /* =================================================
                   DEMO WEATHER DATA
                ================================================= */

                const weatherTypes = [

                    {
                        name: "Sunny",

                        icon: "☀️",

                        className: "sunny",

                        temp: "32°C",

                        humidity: "48%",

                        wind: "10 km/h",

                        rain: "5%",

                        message:
                            "☀️ Sunny weather. Irrigate crops according to soil moisture and crop requirements."
                    },


                    {
                        name: "Rainy",

                        icon: "🌧️",

                        className: "rainy",

                        temp: "25°C",

                        humidity: "86%",

                        wind: "15 km/h",

                        rain: "75%",

                        message:
                            "🌧️ Rainy weather. Avoid unnecessary irrigation and check field drainage."
                    },


                    {
                        name: "Cloudy",

                        icon: "☁️",

                        className: "cloudy",

                        temp: "27°C",

                        humidity: "70%",

                        wind: "12 km/h",

                        rain: "30%",

                        message:
                            "☁️ Cloudy weather. Monitor crop conditions and soil moisture."
                    }

                ];


                /* RANDOM WEATHER */

                const weather =
                    weatherTypes[
                        Math.floor(
                            Math.random() *
                            weatherTypes.length
                        )
                    ];


                /* REMOVE OLD WEATHER */

                if (weatherSection) {

                    weatherSection.classList.remove(
                        "sunny",
                        "rainy",
                        "cloudy"
                    );


                    /* ADD NEW WEATHER */

                    weatherSection.classList.add(
                        weather.className
                    );

                }


                /* TEMPERATURE */

                if (temperature) {

                    temperature.textContent =
                        weather.temp;

                }


                if (temperatureSmall) {

                    temperatureSmall.textContent =
                        weather.temp;

                }


                /* HUMIDITY */

                if (humidity) {

                    humidity.textContent =
                        weather.humidity;

                }


                /* WIND */

                if (windSpeed) {

                    windSpeed.textContent =
                        weather.wind;

                }


                /* RAIN */

                if (rainChance) {

                    rainChance.textContent =
                        weather.rain;

                }


                /* ICON */

                if (mainWeatherIcon) {

                    mainWeatherIcon.textContent =
                        weather.icon;

                }


                /* STATUS */

                if (weatherStatus) {

                    weatherStatus.textContent =
                        weather.name;

                }


                /* MESSAGE */

                if (weatherMessage) {

                    weatherMessage.textContent =
                        weather.message;

                }

            }
        );

    }


    /* =================================================
       CONTACT FORM
    ================================================= */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const message =
                    document.getElementById(
                        "contactMessage"
                    );


                if (message) {

                    message.textContent =
                        "Thank you! Your message has been submitted successfully.";

                    message.className =
                        "message success";

                }


                contactForm.reset();

            }
        );

    }


    /* =================================================
       REGISTRATION FORM
    ================================================= */

    const registrationForm =
        document.getElementById(
            "registrationForm"
        );


    if (registrationForm) {

        registrationForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const message =
                    document.getElementById(
                        "registrationMessage"
                    );


                if (message) {

                    message.textContent =
                        "🌾 Farmer registration submitted successfully!";

                    message.className =
                        "message success";

                }


                registrationForm.reset();

            }
        );

    }


    /* =================================================
       CURRENT YEAR
    ================================================= */

    const yearElements =
        document.querySelectorAll(
            ".current-year"
        );


    yearElements.forEach(
        function (element) {

            element.textContent =
                new Date().getFullYear();

        }
    );


    /* =================================================
       MARKET CROP SEARCH
    ================================================= */

    const cropSearch =
        document.getElementById(
            "cropSearch"
        );


    const marketTableBody =
        document.getElementById(
            "marketTableBody"
        );


    const noCropResult =
        document.getElementById(
            "noCropResult"
        );


    if (
        cropSearch &&
        marketTableBody
    ) {

        cropSearch.addEventListener(
            "input",
            function () {

                const searchValue =
                    cropSearch.value
                        .toLowerCase()
                        .trim();


                const rows =
                    marketTableBody
                        .querySelectorAll(
                            "tr"
                        );


                let found = false;


                rows.forEach(
                    function (row) {

                        const cropElement =
                            row.querySelector(
                                ".crop-name"
                            );


                        if (!cropElement) {

                            return;

                        }


                        const crop =
                            cropElement
                                .textContent
                                .toLowerCase();


                        if (
                            crop.includes(
                                searchValue
                            )
                        ) {

                            row.style.display =
                                "";

                            found = true;

                        }

                        else {

                            row.style.display =
                                "none";

                        }

                    }
                );


                if (noCropResult) {

                    if (
                        searchValue !== "" &&
                        !found
                    ) {

                        noCropResult.style.display =
                            "block";

                    }

                    else {

                        noCropResult.style.display =
                            "none";

                    }

                }

            }
        );

    }


    /* =================================================
       PEST SEARCH
    ================================================= */

    const pestSearch =
        document.getElementById(
            "pestSearch"
        );


    const pestGrid =
        document.getElementById(
            "pestGrid"
        );


    const noPestResult =
        document.getElementById(
            "noPestResult"
        );


    if (
        pestSearch &&
        pestGrid
    ) {

        pestSearch.addEventListener(
            "input",
            function () {

                const searchValue =
                    pestSearch.value
                        .toLowerCase()
                        .trim();


                const cards =
                    pestGrid.querySelectorAll(
                        ".pest-card"
                    );


                let found = false;


                cards.forEach(
                    function (card) {

                        const cardText =
                            card.textContent
                                .toLowerCase();


                        if (
                            cardText.includes(
                                searchValue
                            )
                        ) {

                            card.style.display =
                                "";

                            found = true;

                        }

                        else {

                            card.style.display =
                                "none";

                        }

                    }
                );


                if (noPestResult) {

                    if (
                        searchValue !== "" &&
                        !found
                    ) {

                        noPestResult.style.display =
                            "block";

                    }

                    else {

                        noPestResult.style.display =
                            "none";

                    }

                }

            }
        );

    }


    /* =================================================
       WEBSITE LOADED
    ================================================= */

    console.log(
        "🌾 Mahesh Green Fields website loaded successfully."
    );


});
