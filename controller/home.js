const fs = require("fs");

const latest = [];
const items = [];
const feedback = [];
const partners = [];
const features = [
    {
        icon: "fa fa-rocket",
        title: "Fast",
        description: "Having a baby can be a nerve wracking experience for new",
    },
    {
        icon: "fa fa-check",
        title: "Easy",
        description:
            "If you are looking for a new way to promote your business that",
    },
    {
        icon: "fa fa-bullhorn",
        title: "Cheap",
        description:
            "Okay, you’ve decided you want to make money with Affiliate",
    },
    {
        icon: "fa fa-arrows-alt",
        title: "Affordable",
        description: "A Pocket PC is a handheld computer, which features many",
    },
];
const Carousel = fs.readdirSync("./view/public/img/Home/Carousel");
Carousel.forEach((data) => {
    items.push({
        src: `/img/Home/Carousel/${data}`,
        product: `Product Code ${String.fromCharCode(
            Math.round(Math.random() * (90 - 65) + 65)
        ).toUpperCase()} - ${Math.round(Math.random() * 1000)}`,
        price: Math.round(Math.random() * 1000) + 100,
        discount:
            Math.round(Math.random() * 5) > 2 &&
            Math.round(Math.random() * 20) + 20,
    });
});

const Latest = fs.readdirSync("./view/public/img/Home/Latest/");
Latest.forEach((data) => {
    latest.push({
        src: `/img/Home/Latest/${data}`,
        product: `Product Code ${String.fromCharCode(
            Math.round(Math.random() * (90 - 65) + 65)
        ).toUpperCase()} - ${Math.round(Math.random() * 1000)}`,
        price: Math.round(Math.random() * 1000) + 100,
    });
});

const Feedback = fs.readdirSync("./view/public/img/Home/Feedback/");
Feedback.forEach((data) => {
    feedback.push(`/img/Home/Feedback/${data}`);
});

const Partners = fs.readdirSync("./view/public/img/Home/Partners/");
Partners.forEach((data) => {
    partners.push(`/img/Home/Partners/${data}`);
});

const home = (req, res) => {
    res.json({ latest, items, features, feedback, partners });
};

module.exports = home;
