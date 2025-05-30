document.addEventListener("DOMContentLoaded", function () {
    mapExperienceData();
});


function mapExperienceData() {

    let exp = [
        {
            "org": "Arda / Abnous",
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
                "Coroutines Flow", 
                "MVVM",
                "CI/CD", 
                "Jira", 
                "Jetpack Compose", 
                "NDK",
                "State Management", 
                "Stream", 
                "BloC", 
                "Navigation Components"
            ],
            "details": [
                "Developed an android application to handle almost 11K users with around 10K cryptocurrency transactions daily.",
                "Used both of native and cross-platform development approaches to develop 6 applications in the field of fin-tech and e-commerce.",
                "Collaborated with a team of 12 colleagues to achieve goals and expectations."                
            ]
        },
        {
            "org": "Utabpars",
            "position": "Android Developer (Contract)",
            "duration": "Dec 2019 – Jun 2020",
            "logo": "utab.png",
            "technologies": [
                "Android SDK", 
                "Java", 
                "Kotlin", 
                "RxJava", 
                "RxAndroid", 
                "Data Binding", 
                "MVVM", 
                "Room", 
                "Gitlab CI", 
                "Dagger", 
                "UI/Unit Testing", 
                "Retrofit", 
                "SQLite"
            ],
            "details": [
                "Designed and Developed an educational app to serve more than 11K academies.",
                "Suggested and did migration from Java to Kotlin.",
                "Involved in UI and Unit testing and Code Reviews."                
            ]
        },
        {
            "org": "Khedmatazma",
            "position": "Android Developer (Full Time)",
            "duration": "Nov 2018 – Nov 2019",
            "logo": "khedmatazma.png",
            "technologies": [
                "Adroid SDK", 
                "Java", 
                "MVP", 
                "Scrum", 
                "Glide", 
                "Butterknife", 
                "Google/Adjust analytics", 
                "Trello", 
                "Event bus",
                "Firebase", 
                "Google Map API", 
                "ProGuard", 
                "Gradle", 
                "Git", 
                "GitKraken", 
                "Gitlab"
            ],
            "details": [
                "Acquired 250K new users by implementing a mobile application for customers and providers.",
                "Used ProGuard to minify, obfuscate, and optimize the code so that the size of the application was reduced by %60.",
                "Collaborated closely with almost 40 colleagues in the form of agile methodology, by implementing product requirements, e.g., about Firebase and Adjust analytics, data mining, customized FCM notifications for different campaigns, etc.",                
                "Developed the application of Khedmatazma which invited to the WBAF 2019 as one of 40 top start-ups of the world.",                
            ]
        },
        {
            "org": "Freelancer",
            "position": "Mobile Developer (Full Time)",
            "duration": "Sep 2015 – Oct 2018",
            "logo": "freelancer.png",
            "technologies": [
                "Android SDK", 
                "Java", 
                "SQLite", 
                "PHP", 
                "MySQL", 
                "Firebase", 
                "UI/UX design", 
                "JavaScript", 
                "HTML", 
                "CSS", 
                "RSA/AES Encryption"
            ],
            "details": [
                "Developed e-commerce android applications."                
            ]
        },
        {
            "org": "IAU & PNU Universities",
            "position": "University Teacher/Lecturer (Part Time)",
            "duration": "Sep 2008 – Jun 2018",
            "logo": "university.png",
            "technologies": [
                "OOP / C++", 
                "Data Structure", 
                "Database / SQL Server", 
                "Software Engineering Paradigms / UML"
            ],
            "details": [
                "Mentored or taught almost 3K software engineering students.",
                "Taught courses such as:"                
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