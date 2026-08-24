// ===============================
// UNEMPLOYED
// Website interactions
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SERVICE CARD ANIMATION
    ========================= */

    const cards =
        document.querySelectorAll(".service-card");


    if (cards.length > 0) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity = "1";

                            entry.target.style.transform =
                                "translateY(0)";

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        cards.forEach((card) => {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(25px)";

            card.style.transition =
                "opacity .6s ease, transform .6s ease";

            observer.observe(card);

        });

    }


    /* =========================
       FLOATING OBJECTS
    ========================= */

    const objects =
        document.querySelectorAll(".floating-object");


    if (objects.length > 0) {

        document.addEventListener("mousemove", (event) => {

            const x =
                (event.clientX /
                    window.innerWidth - 0.5) * 10;

            const y =
                (event.clientY /
                    window.innerHeight - 0.5) * 10;


            objects.forEach((object, index) => {

                const strength =
                    (index + 1) * 0.25;


                object.style.marginLeft =
                    `${x * strength}px`;

                object.style.marginTop =
                    `${y * strength}px`;

            });

        });

    }

});