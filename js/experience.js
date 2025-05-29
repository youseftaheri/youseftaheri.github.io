document.addEventListener("DOMContentLoaded", function () {
    mapExperienceData();
});


function mapExperienceData() {

    let exp = [
        {
            "org": "Abnous",
            "position": "Mobile Developer (Full Time)",
            "duration": "Jun 2023 - Present",
            "logo": "arda.png",
            "technologies": [
                "Android SDK",
                "Kotlin",
                "Flutter SDK",
                "Dart",
                "MVVM",
                "Jetpack Compose",
                "SQL Server",
                "ClickHouse",
                "Next.js",
                "Nest.js",
                "Python",
                "ASP.NET Core",
                "C#",
                "JavaScript",
                "HTML",
                "CSS",
                "DDD"
            ],
            "details": [
                "Designed, developed and maintained multi language mobile applications for global audience, increased user engagement by 40% and reduced bounce rate by 25% through localizing content in 5 languages.",
                "Developed the applications to handle almost 1.4M international users."
                
            ]
        },
        {
            "org": "Golden Mind",
            "position": "Mobile Developer (Full Time)",
            "duration": "Jul 2020 – May 2023",
            "logo": "goldenmind.png",
            "technologies": [
                "Android SDK",
                "Kotlin",
                "Flutter SDK",
                "Dart",
                "MVVM",
                "Jetpack Compose",
                "SQL Server",
                "ClickHouse",
                "Next.js",
                "Nest.js",
                "Python",
                "ASP.NET Core",
                "C#",
                "JavaScript",
                "HTML",
                "CSS",
                "DDD"
            ],
            "details": [
                "Developed an android application to handle almost 11K users with around 10K cryptocurrency transactions daily.",
                "Used both of native and cross-platform development approaches to develop 6 applications in the field of fin-tech and e-commerce.",
                "Collaborated with a team of 12 colleagues to achieve goals and expectations."                
            ]
        }
    ];

    for (var i = 0; i < exp.length; i++) {
        var expCard = document.createElement("div");
        expCard.className = "exp-card";

        var expMetaDiv = document.createElement("div");
        expMetaDiv.className = "exp-meta";

        // Create logo image
        var logoImg = document.createElement("img");
        logoImg.className = "exp-logo";
        logoImg.src = "images/experiences/" + exp[i]["logo"];
        logoImg.alt = exp[i]["org"] + " logo";

        // Organization name
        var orgName = document.createElement("h2");
        orgName.className = "heading2 exp-org";
        orgName.innerHTML = exp[i]["org"];

        var position = document.createElement("span");
        position.className = "label exp-position";
        position.innerHTML = exp[i]["position"];

        var session = document.createElement("p");
        session.className = "body2 exp-session";
        session.innerHTML = exp[i]["duration"];

        var technologiesList = document.createElement("ul");
        technologiesList.className = "exp-tech-list";

        var logo = document.createElement("div");
        logo.className = "grad-circle";
        logo.innerHTML = exp[i]["org"];

        for (var k = 0; k < exp[i]["technologies"].length; k++) {
            var techName = document.createElement("li");
            techName.className = "body2 exp-tech-item";
            techName.innerHTML = exp[i]["technologies"][k];
            technologiesList.appendChild(techName);
        }
        
        expMetaDiv.appendChild(logoImg);
        expMetaDiv.appendChild(orgName);
        expMetaDiv.appendChild(position);
        expMetaDiv.appendChild(session);
        expMetaDiv.appendChild(technologiesHeading);
        expCard.appendChild(expMetaDiv);

        var detailsList = document.createElement("ul");
        detailsList.className = "exp-detail";

        for (var k = 0; k < exp[i]["details"].length; k++) {
            var detail = document.createElement("li");
            detail.className = "body2 exp-detail-item";
            detail.innerHTML = exp[i]["details"][k];
            detailsList.appendChild(detail);
        }


        var labels = document.createElement("div");
        labels.className = "exp-labels";

        for (var j = 0; j < exp[i]["technologies"].length; j++) {
            var title = exp[i]["technologies"][j];

            var label = document.createElement('a');
            label.className = "exp-label";

            var labelText = document.createElement("span");
            labelText.className = "label exp-label-text";
            labelText.innerHTML = title;

            label.target = "_blank";

            label.appendChild(labelText);
            labels.appendChild(label);
        }
        detailsList.appendChild(labels);

        expCard.appendChild(detailsList);

        var experiences = document.getElementById("exp");
        experiences.appendChild(expCard);
    }
}