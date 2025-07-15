import digitalComics from "/img/digital-comics.png";
import merchandise from "/img/merchandise.png";
import subs from "/img/subscriptions.png";
import shopLocator from "/img/shop-locator.png";
import powerVisa from "/img/power-visa.svg";

const shop = [
  {
    id: 1,
    src: digitalComics,
    alt: "Digital Comics",
    span: "digital comics",
    big: false,
  },
  {
    id: 2,
    src: merchandise,
    alt: "Merchandise",
    span: "dc merchandise",
    big: false,
  },
  {
    id: 3,
    src: subs,
    alt: "Subscriptions",
    span: "subscription",
    big: false,
  },
  {
    id: 4,
    src: shopLocator,
    alt: "Shop Locator",
    span: "comic shop locator",
    big: true,
  },
  {
    id: 5,
    src: powerVisa,
    alt: "Power Visa",
    span: "dc power visa",
    big: false,
  },
];

export default shop;
