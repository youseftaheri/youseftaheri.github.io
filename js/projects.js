document.addEventListener("DOMContentLoaded", function () {
    mapProjectsData();
});

function mapProjectsData() {
    let projects = [
        {
            "title": "Khedmatazma (Customers)",
            "image": "images/projects/khedmatazma1.png",
            "type": "Product",
            "labels": [
                {
                    "title": "Play",
                    "link": "https://play.google.com/store/apps/details?id=com.khedmatazma.customer&hl=en"
                },
                {
                    "title": "Web",
                    "link": "https://khedmatazma.com/"
                }
            ]
        },
        {
            "title": "Khedmatazma (Providers)",
            "image": "images/projects/khedmatazma2.png",
            "type": "Product",
            "labels": [
                {
                    "title": "Play",
                    "link": "https://play.google.com/store/apps/details?id=com.khedmatazma.provider&hl=en"
                },
                {
                    "title": "Web",
                    "link": "https://khedmatazma.com/"
                }
            ]
        },
        {
            "title": "Mellichange",
            "image": "images/projects/mellichange.png",
            "type": "Product",
            "labels": [
                {
                    "title": "Play",
                    "link": "https://mellichange.com/application/"
                },
                {
                    "title": "Web",
                    "link": "https://mellichange.com/"
                }
            ]
        },
        {
            "title": "Salimiexchange (Legacy Mellichange)",
            "image": "images/projects/salimiexchange.png",
            "type": "Legacy",
            "labels": [
                {
                    "title": "Play",
                    "link": "https://mellichange.com/application/"
                },
                {
                    "title": "Web",
                    "link": "https://mellichange.com/"
                }
            ]
        },
        {
            "title": "Mafia",
            "image": "images/projects/mafia.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "GitHub",
                    "link": "https://github.com/youseftaheri/mafia"
                }
            ]
        },
        {
            "title": "Nobataneh",
            "image": "images/projects/nobataneh.png",
            "type": "Retired",
            "labels": [
                {
                    "title": "Play"
                },
                {
                    "title": "Web"
                }
            ]
        },
        {
            "title": "Amoozkadeh",
            "image": "images/projects/amoozkadeh.png",
            "type": "Retired",
            "labels": [
                {
                    "title": "Play"
                },
                {
                    "title": "Web"
                }
            ]
        }
    ];

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var title = project.title;
        var type = project.type;
        var image = project.image;

        var card = document.createElement('div');
        card.className = "project-card";

        var imageDiv = document.createElement('div');
        imageDiv.className = "p-image";
        var projectLabel = document.createElement("div");
        projectLabel.className = "label p-type";
        projectLabel.innerHTML = type;

        var projectImg = document.createElement("img");
        projectImg.className = "p-image-bg";
        projectImg.src = image;
        projectImg.alt = title;

        imageDiv.appendChild(projectLabel);
        imageDiv.appendChild(projectImg);

        var projectName = document.createElement("p");
        projectName.className = "body1 p-title";
        projectName.innerHTML = title;

        var labels = document.createElement("div");
        labels.className = "p-labels";

        for (var j = 0; j < project.labels.length; j++) {
            var title = project.labels[j]["title"];
            var link = project.labels[j]["link"];

            var label = document.createElement('a');
            label.className = "p-label";
            var labelIcon = document.createElement("i");

            if (title == "App") {
                labelIcon.className = "p-label-icon fa fa-apple";
            } else if (title == "Play") {
                labelIcon.className = "p-label-icon fa fa-google";
            } else if (title == "Web") {
                labelIcon.className = "p-label-icon fa fa-globe";
            } else if (title == "GitHub") {
                labelIcon.className = "p-label-icon fa fa-github";
            } else if (title == "Package") {
                labelIcon.className = "p-label-icon material-icons";
                labelIcon.innerHTML = "widgets";
                labelIcon.style.fontSize = "16px";
            }

            var labelText = document.createElement("span");
            labelText.className = "label p-label-text";
            labelText.innerHTML = title;

            label.href = link;
            label.target = "_blank";

            label.appendChild(labelIcon);
            label.appendChild(labelText);

            labels.appendChild(label);
        }


        card.appendChild(projectLabel);
        card.appendChild(projectImg);
        card.appendChild(projectName);
        card.appendChild(labels);

        var projectsDiv = document.getElementById("projects");
        projectsDiv.appendChild(card);
    }
}