window.addEventListener("DOMContentLoaded", () => {
    const dataAbout = [
        {
            id: 0,
            title: "History",
            info: "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.",
        },
        {
            id: 1,
            title: "Vision",
            info: "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.",
        },
        {
            id: 2,
            title: "Goals",
            info: "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.",
        },
    ];

    let count = 0;

    const btnItem = document.querySelectorAll(".item"),
        tabsText = document.querySelector(".tabs-text");

    btnItem.forEach((element, index) => {
        element.addEventListener("click", () => {
            removeActive();
            element.classList.toggle("active");
            let result = dataAbout
                .filter((item) => item.id === index)
                .map((element) => {
                    return `
                    <h1 class="text-title">${element.title}</h1>
                    <p class="text-info">
                        ${element.info}
                    </p>
                `;
                });
            tabsText.innerHTML = result;
        });
    });

    const removeActive = () => {
        btnItem.forEach((element) => {
            if (element.classList.contains("active")) {
                element.classList.remove("active");
            }
        });
    };
});
