import { ImageProps } from "react-native";

export interface Coffee {
  name: string;
  image: ImageProps["source"];
  description: string;
}

const longBlackImage = require("../assets/coffee/long-black.jpeg");
const latteImage = require("../assets/coffee/cafe-latte.jpeg");
const cappucinoImage = require("../assets/coffee/cappucino.jpeg");
const flatWhiteImage = require("../assets/coffee/flat-white.jpeg");
const espressoImage = require("../assets/coffee/espresso.jpeg");
const doubleEspressoImage = require("../assets/coffee/double-espresso.jpeg");
const cortadoImage = require("../assets/coffee/cortado.jpeg");
const mochaImage = require("../assets/coffee/mocha.jpeg");
const redEyeImage = require("../assets/coffee/red-eye.jpeg");

export const coffeeList: Coffee[] = [
  {
    name: "Long Black",
    image: longBlackImage,
    description:
      "The long black is an Aussie caffeine staple and is coveted for its strong aroma and taste. At first glance, the long black may look very akin to an americano. But after your first sip, you’ll get something far more flavoursome. The ingredients are the same in both: espresso and hot water. The difference, however, is in the preparation.",
  },
  {
    name: "Latte",
    image: latteImage,
    description:
      "Lattes are usually considered to be an introductory coffee drink because their bitterness is cut by the amount of milk in the beverage. The latte is often complemented by syrups for those who enjoy sweeter drinks. As the most popular coffee drinks out there, the latte can be ordered plain or with a flavour shot of anything from vanilla to pumpkin spice ",
  },
  {
    name: "Cappuccino",
    image: cappucinoImage,
    description:
      "Cappuccino is essentially a latte made with more foam than steamed milk and is often topped with a hit of cocoa powder or cinnamon. The cappuccino is a staple in coffee shops all over the world. It’s classically characterised as the perfect balance of rich, sweet milk and espresso. You’ll find variations that use cream instead of milk or ones that throw in flavour shot, as well.",
  },
  {
    name: "Flat White",
    image: flatWhiteImage,
    description:
      "Another Aussie favourite is the flat white. This bad boy is quite similar to a cappuccino but lacks the layer of foam and chocolate powder.  A flat white is an espresso-based drink that contains steamed milk and is the perfect option for those looking for a dairy beverage with a strong taste and is made with a small and has a creamy mouthfeel of steamed milk.",
  },
  {
    name: "Americano",
    image: flatWhiteImage,
    description:
      "Americanos are the go-to coffee for those seeking that caffeine kick during sluggish midday. This type of coffee is notoriously high in caffeine and has a flavour profile similar to black coffee. So if you’re looking for a way to up the ante in your daily routine but aren’t interested in just other coffee, the Americano is a simple, classic cup of joe that’ll get you going every time.",
  },
  {
    name: "Espresso",
    image: espressoImage,
    description:
      "Who doesn’t love an espresso? This coffee drink is distinguished for its concentrated flavour, syrupy content and layer of foam. The espresso is usually denser in taste than coffee brewed by other methods and has more caffeine than any other coffee on this list. Fun fact: the espresso is the base for many other coffee drinks—such as the caffè latte, cappuccino, macchiato, mocha, flat white, and Americano.",
  },
  {
    name: "Doppio",
    image: doubleEspressoImage,
    description:
      "Simply known as the double espresso, Doppio means “double” in Italian explains the commonly called a standard double — so double or nothing. The doppio is two espresso shots in one single-serve capsule. It has a stronger aroma and more intense taste and will satisfy a coffee craving of any size. So If you enjoy an intense and robust Italian-style espresso doppio is the coffee drink for you.",
  },
  {
    name: "Cortado",
    image: cortadoImage,
    description:
      "Like yin and yang, the cortado is the perfect balance of espresso and warm steamed milk. Cortado is a Spanish type of coffee made by a ratio of espresso to milk that yields a unique flavour where the fineness of the coffee triumphs savour, while the finish is ever so delicate from the steamed milk. Cortado is also one of those coffees that are consumed leisurely in coffee shops.",
  },
  {
    name: "Mocha",
    image: mochaImage,
    description:
      "The mocha is a chocolate espresso drink with steamed milk and foam and is an exquisite mix of coffee and hot chocolate. The chocolate powder gives the drink a potent and creamy flavour and axes the acidity of the espresso. FYI, the mocha is usually considered the status-symbol coffee drink ordered. So if you’re wanting a mix of coffee, hot chocolate and a hint of elegance, choose the mocha.",
  },
  {
    name: "Red Eye",
    image: redEyeImage,
    description:
      "The red eye is an American type of coffee that combines brewed coffee with an espresso shot. This coffee combination is stronger than regular coffee and is a more potent stimulant that helps improve concentration and keeps you awake during the night when catching up on work & assignments. This coffee drink also has stronger variations such as the black eye, dead eye and green eye.",
  },
];
