document.addEventListener("DOMContentLoaded", function () {
    mapPublicationsData();
});

function mapPublicationsData() {
    let publications = [
        {
            "title": "Visemes Recognition in Continuous Persian Words Using Lip Reading",
            "image": "images/publications/visemes.jpg",
            "type": "Paper",
            "labels": [
                {
                    "title": "ISAST Transactions on Computers and Intelligent Systems, Finland · Jan 1, 2011",
                    "link": "https://drive.google.com/file/d/1WQpt1Ww4TXZIjQBAJR3RPJRvfgry8eQh/view?usp=sharing"
                }
            ]
        },
        {
            "title": "Continuous Persian Phones Recognition Using Lip Reading",
            "image": "images/publications/phones.jpg",
            "type": "Paper",
            "labels": [
                {
                    "title": "Canadian Journal on Image Processing and Computer Vision, Canada (accepted) · Jan 1, 2010",
                    "link": "https://drive.google.com/file/d/1Ls0MZhIxbQLAaHxtJs8gCXOkfYUVKU3L/view?usp=sharing"
                }
            ]
        },
        {
            "title": "Speech Recognition Using Lip Reading For the Undercover Police",
            "image": "images/publications/police.jpg",
            "type": "Paper",
            "labels": [
                {
                    "title": "Knowledge, Collocation and Security Journal, Iran · Jan 1, 2011",
                    "link": "#publications-div"
                }
            ]
        },
        {
            "title": "Using Mobile Agent in AD-HOC Wireless Network",
            "image": "images/publications/adhoc.jpg",
            "type": "Paper",
            "labels": [
                {
                    "title": "IranDoc E-Journal · Jan 1, 2009",
                    "link": "#publications-div"
                }
            ]
        }
    ];

    for (var i = 0; i < publications.length; i++) {
        var publication = publications[i];
        var title = publication.title;
        var type = publication.type;
        var image = publication.image;

        var card = document.createElement('div');
        card.className = "publication-card";

        var imageDiv = document.createElement('div');
        imageDiv.className = "pub-image";
        var publicationLabel = document.createElement("div");
        publicationLabel.className = "label pub-type";
        publicationLabel.innerHTML = type;

        var publicationImg = document.createElement("img");
        publicationImg.className = "pub-image-bg";
        publicationImg.src = image;
        publicationImg.alt = title;

        imageDiv.appendChild(publicationLabel);
        imageDiv.appendChild(publicationImg);

        var publicationName = document.createElement("p");
        publicationName.className = "body1 pub-title";
        publicationName.innerHTML = title;

        var labels = document.createElement("div");
        labels.className = "pub-labels";

        for (var j = 0; j < publication.labels.length; j++) {
            var title = publication.labels[j]["title"];
            var link = publication.labels[j]["link"];

            var label = document.createElement('a');
            label.className = "pub-label";
            var labelIcon = document.createElement("i");

           
            labelIcon.className = "pub-label-icon fa fa-globe";

            var labelText = document.createElement("span");
            labelText.className = "label pub-label-text";
            labelText.innerHTML = title;

            label.href = link;
            label.target = "_blank";

            label.appendChild(labelIcon);
            label.appendChild(labelText);

            labels.appendChild(label);
        }


        card.appendChild(publicationLabel);
        card.appendChild(publicationImg);
        card.appendChild(publicationName);
        card.appendChild(labels);

        var publicationsDiv = document.getElementById("publications");
        publicationsDiv.appendChild(card);
    }
}