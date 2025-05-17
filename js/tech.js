document.addEventListener("DOMContentLoaded", function () {
    mapTechData();
});

function mapTechData() {
    let tech = [
        {
            "name": "Android",
            "icon": "images/tech/android.svg",
            "type": "mobile-tech"
        },
        {
            "name": "Kotlin",
            "icon": "images/tech/kotlin.svg",
            "type": "mobile-tech"
        },
        {
            "name": "Java",
            "icon": "images/tech/java.svg",
            "type": "mobile-tech"
        },
        {
            "name": "Flutter",
            "icon": "images/tech/flutter.svg",
            "type": "mobile-tech"
        },
        {
            "name": "Dart",
            "icon": "images/tech/dart.svg",
            "type": "mobile-tech"
        },
        {
            "name": "Next.js",
            "icon": "images/tech/nextjs.svg",
            "type": "front-tech"
        },
        {
            "name": "HTML 5",
            "icon": "images/tech/html.svg",
            "type": "front-tech"
        },
        {
            "name": "CSS 3",
            "icon": "images/tech/css.svg",
            "type": "front-tech"
        },
        {
            "name": "Bootstrap",
            "icon": "images/tech/bootstrap.svg",
            "type": "front-tech"
        },
        {
            "name": "Javascript",
            "icon": "images/tech/js.svg",
            "type": "front-tech"
        },
        {
            "name": "Nest.js",
            "icon": "images/tech/nestjs.svg",
            "type": "back-tech"
        },
        {
            "name": "Node.js",
            "icon": "images/tech/node.svg",
            "type": "back-tech"
        },
        {
            "name": "Python",
            "icon": "images/tech/python.svg",
            "type": "back-tech"
        },
        {
            "name": "REST Apis",
            "icon": "images/tech/api.svg",
            "type": "back-tech"
        },
        {
            "name": "Firebase",
            "icon": "images/tech/firebase.svg",
            "type": "database-tech"
        },
        {
            "name": "MongoDB",
            "icon": "images/tech/mongo.svg",
            "type": "database-tech"
        },
        {
            "name": "SQL",
            "icon": "images/tech/sql.svg",
            "type": "database-tech"
        },
        {
            "name": "Git & GitHub",
            "icon": "images/tech/github.svg",
            "type": "vc-tech"
        },
        {
            "name": "Gitlab",
            "icon": "images/tech/gitlab.svg",
            "type": "vc-tech"
        },
        {
            "name": "Jira",
            "icon": "images/tech/jira.svg",
            "type": "vc-tech"
        },
        {
            "name": "Trello",
            "icon": "images/tech/trello.svg",
            "type": "vc-tech"
        },
        {
            "name": "Azure DevOps",
            "icon": "images/tech/azure-devops.svg",
            "type": "vc-tech"
        }
    ];

    for (var i = 0; i < tech.length; i++) {
        // div
        var techDiv = document.createElement("div");
        techDiv.className = "tech";

        // icon
        var techIconImg = document.createElement("img");
        techIconImg.className = "tech-icon";
        if (tech[i]["name"] == "Node.js") {
            techIconImg.style.height = "20px";
        }

        // tech name
        var techName = document.createElement("span");
        techName.className = "tech-label";

        techIconImg.src = tech[i]["icon"];
        techIconImg.alt = tech[i]["name"];

        techName.innerHTML = tech[i]["name"];

        var relatedDiv = document.getElementById(tech[i]["type"]);

        techDiv.appendChild(techIconImg);
        techDiv.appendChild(techName);
        relatedDiv.appendChild(techDiv);
    }
}