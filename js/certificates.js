document.addEventListener("DOMContentLoaded", function () {
    mapCertificatesData();
});

function mapCertificatesData() {
    let certificates = [
        {
            "title": "Continuous Integration and Continuous Delivery with GitLab",
            "image": "images/certificates/ci_cd.png",
            "type": "Linkedin",
            "labels": [
                {
                    "title": "Credential",
                    "link": "https://www.linkedin.com/learning/certificates/288b1a83c39fb5447e30a67afda6bd010ed6927e5a9f8dff6b1ca10f54ae1ab0"
                }
            ]
        },
        {
            "title": "Introduction to Deep Learning with OpenCV",
            "image": "images/certificates/opencv.png",
            "type": "Linkedin",
            "labels": [
                {
                    "title": "Credential",
                    "link": "https://www.linkedin.com/learning/certificates/208ed9db996a4fef0c341dc5254986343669a7a6b255b37ebfb707e45aaa0900"
                }
            ]
        },
        {
            "title": "SANS SEC 542",
            "image": "images/certificates/sans.jpeg",
            "type": "Douran",
            "labels": [
                {
                    "title": "Credential",
                    "link": "https://douranacademy.com/courses/sans542-webpentest-training/"
                }
            ]
        },
        {
            "title": "Computer Vision Deep Dive in Python",
            "image": "images/certificates/python_vision.png",
            "type": "Linkedin",
            "labels": [
                {
                    "title": "Credential",
                    "link": "https://www.linkedin.com/learning/certificates/7159c946619c3c14536d5620838030a89d0cf353c5d54e95fd1974b550a49707"
                }
            ]
        },
        {
            "title": "Learning Redux Toolkit",
            "image": "images/certificates/redux.jpeg",
            "type": "Linkedin",
            "labels": [
                {
                    "title": "Credential",
                    "link": "https://www.linkedin.com/learning/certificates/05421c15369b6541763f33f76f1b2b201dd5f110089ab8f3c4a2c3275847d5b4"
                }
            ]
        }
    ];

    for (var i = 0; i < certificates.length; i++) {
        var certificate = certificates[i];
        var title = certificate.title;
        var type = certificate.type;
        var image = certificate.image;

        var card = document.createElement('div');
        card.className = "certificate-card";

        var imageDiv = document.createElement('div');
        imageDiv.className = "p-image";
        var certificateLabel = document.createElement("div");
        certificateLabel.className = "label p-type";
        certificateLabel.innerHTML = type;

        var certificateImg = document.createElement("img");
        certificateImg.className = "p-image-bg";
        certificateImg.src = image;
        certificateImg.alt = title;

        imageDiv.appendChild(certificateLabel);
        imageDiv.appendChild(certificateImg);

        var certificateName = document.createElement("p");
        certificateName.className = "body1 p-title";
        certificateName.innerHTML = title;

        var labels = document.createElement("div");
        labels.className = "p-labels";

        for (var j = 0; j < certificate.labels.length; j++) {
            var title = certificate.labels[j]["title"];
            var link = certificate.labels[j]["link"];

            var label = document.createElement('a');
            label.className = "p-label";
            var labelIcon = document.createElement("i");

           
            labelIcon.className = "p-label-icon fa fa-globe";

            var labelText = document.createElement("span");
            labelText.className = "label p-label-text";
            labelText.innerHTML = title;

            label.href = link;
            label.target = "_blank";

            label.appendChild(labelIcon);
            label.appendChild(labelText);

            labels.appendChild(label);
        }


        card.appendChild(certificateLabel);
        card.appendChild(certificateImg);
        card.appendChild(certificateName);
        card.appendChild(labels);

        var certificatesDiv = document.getElementById("certificates");
        certificatesDiv.appendChild(card);
    }
}