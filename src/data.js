import dorotaSzydelkujeImg from "./images/dorotaSzydelkujeImg.jpg";
import robertTelefonyImg from "./images/robertTelefonyImg.jpg";
import hotelMiodowaImg from "./images/hotelMiodowaImg.jpg";
import jaroslawGotujeImg from "./images/jaroslawGotujeImg.jpg";
import buyListImg from "./images/buyListImg.jpg";
import cocktailsChillImg from "./images/cocktailsChillImg.jpg";
import weatherImg from "./images/weatherImg.jpg";
import serialQuizImg from "./images/serialQuizImg.jpg";
import ninjaVsZombieImg from "./images/ninjaVsZomnieImg.jpg";
import wisielecImg from "./images/wisielecImg.jpg";
import memoryImg from "./images/memoryImg.jpg";
import movieSearchImg from "./images/movieSearchImg.jpg";
import focuseyeImg from "./images/focuseyeImg.jpg";

export const projects = [
  {
    id: 1,
    title: "Hotel Miodowa",
    img: hotelMiodowaImg,
    info: "Strona internetowa hotelu *** z Krakowa. Umożliwia sprawdzenie pokoi i ich filtrowanie, oglądanie galerii zdjęć oraz zarezerwowanie pokoju.",
    technology: ["React"],
    githubLink: "https://github.com/Dzarek/hotel-miodowa",
    siteLink: "https://www.hotelmiodowa.pl",
    category: "strony www",
  },
  {
    id: 2,
    title: "Telefony Gorlice",
    img: robertTelefonyImg,
    info: "Strona internetowa salonu GSM, w którym można kupić, sprzedać lub oddać do serwisu swój smartfon.",
    technology: ["Next.js"],
    githubLink: "https://github.com/Dzarek/RobertTelefony",
    siteLink: "https://www.telefony-gorlice.pl/",
    category: "strony www",
  },
  {
    id: 3,
    title: "FocusEye",
    img: focuseyeImg,
    info: "Strona internetowa fotografa z bogatą ofertą, galerią zdjęć w układzie Mansory oraz blogiem. Strona pobiera API z CMS Wordpress.",
    technology: ["Next.js, Wordpress"],
    githubLink: "",
    siteLink: "https://www.focuseye.pl",
    category: "strony www",
  },
  {
    id: 4,
    title: "Dorota Szydełkuje",
    img: dorotaSzydelkujeImg,
    info: "Strona internetowa stworzona dla osoby, która zajmuje się szydełkowaniem. Można tam zamówić produkty wykonane z włóczki takie jak: zabawki, pufy, koce itd.",
    technology: ["React"],
    githubLink: "https://github.com/Dzarek/dorotaszydelkuje2",
    siteLink: "https://www.dorotaszydelkuje.pl",
    category: "strony www",
  },
  {
    id: 44,
    title: "Jarosław Gotuje",
    img: jaroslawGotujeImg,
    info: "Strona internetowa z przepisami kulinarnymi mistrza kuchni - Jarosława",
    technology: ["Gatsby"],
    githubLink: "https://github.com/Dzarek/jaroslaw-gotuje",
    siteLink: "https://jaroslaw-gotuje.netlify.app/",
    category: "strony www",
  },
  {
    id: 5,
    title: "Lista Zakupów",
    img: buyListImg,
    info: "Aplikacja do zapisywania swojej listy zakupów. Bardzo pomaga w organizacji zakupów.",
    technology: ["React"],
    githubLink: "https://github.com/Dzarek/buyListReactMy",
    siteLink: "https://zakupy-lista.netlify.app/",
    category: "aplikacje",
  },
  {
    id: 6,
    title: "Cocktails-Chill",
    img: cocktailsChillImg,
    info: "Aplikacja do szukania przepisów na swoje ulubione drinki. Niezwykle przydatna na imprezach.",
    technology: ["React"],
    githubLink: "https://github.com/Dzarek/CocktailsChill",
    siteLink: "https://cocktails-chill.netlify.app/",
    category: "aplikacje",
  },
  {
    id: 7,
    title: "Aplikacja Pogodowa",
    img: weatherImg,
    info: "Aplikacja do sprawdzania pogody prawie dla każdego miasta na świecie.",
    technology: ["React"],
    githubLink: "https://github.com/Dzarek/dzarek-pogoda",
    siteLink: "https://dzarek-pogoda.netlify.app",
    category: "aplikacje",
  },
  {
    id: 8,
    title: "Serialowe Quizowanie",
    img: serialQuizImg,
    info: "Coś dla fanów oglądania seriali! Pochwal się swoją wiedzą z różnych serialowych hitów i zdobądź jak najwięcej punktów.",
    technology: ["JavaScript"],
    githubLink: "https://github.com/Dzarek/serialoweQuizowanie",
    siteLink: "https://dzarek.github.io/serialoweQuizowanie/",
    category: "gry",
  },
  {
    id: 9,
    title: "Ninja Vs Zombie",
    img: ninjaVsZombieImg,
    info: "Pozabijaj wszystkie zombiaki bo inaczej Cię zjedzą...",
    technology: ["JavaScript"],
    githubLink: "https://github.com/Dzarek/ninjaGame",
    siteLink: "https://dzarek.github.io/ninjaGame/",
    category: "gry",
  },
  {
    id: 10,
    title: "Wisielec",
    img: wisielecImg,
    info: "Pamiętacie czasy gdy na nudnych lekcjach w szkole wraz z kolegami graliście w różne gry na kartce papieru? Jeśli macie ochotę zabić nudę to proponuję wam moją wersję gry WISIELEC.",
    technology: ["JavaScript"],
    githubLink: "https://github.com/Dzarek/wisielecGame",
    siteLink: "https://dzarek.github.io/wisielecGame/",
    category: "gry",
  },
  {
    id: 11,
    title: "Memory",
    img: memoryImg,
    info: "Czy dobrą masz pamięć? Sprawdź i zagraj w MEMORY uzyskując jak najlepszy czas!",
    technology: ["JavaScript"],
    githubLink: "https://github.com/Dzarek/memoryGame",
    siteLink: "https://dzarek.github.io/memoryGame/",
    category: "gry",
  },
  {
    id: 12,
    title: "Wyszukiwarka Filmów",
    img: movieSearchImg,
    info: "Nie wiesz co oglądać dzisiejszego wieczoru? Sprawdź jakie filmy są teraz na topie!",
    technology: ["React"],
    githubLink: "https://github.com/Dzarek/movieSearch",
    siteLink: "https://dzarek-movie-search.netlify.app/",
    category: "aplikacje",
  },
];
export const projectsEn = [
  {
    id: 1,
    title: "Hotel Miodowa",
    img: hotelMiodowaImg,
    info: "Website of the 3 stars hotel. It allows you to check rooms and filter them, view the photo gallery and book a room.",
    technology: ["React"],
    githubLink: "https://github.com/Dzarek/hotel-miodowa",
    siteLink: "https://www.hotelmiodowa.pl",
    category: "website",
  },
  {
    id: 2,
    title: "Telefony Gorlice",
    img: robertTelefonyImg,
    info: "Website of a GSM salon where you can buy, sell or have your smartphone serviced.",
    technology: ["Next.js"],
    githubLink: "https://github.com/Dzarek/RobertTelefony",
    siteLink: "https://www.telefony-gorlice.pl/",
    category: "website",
  },
  {
    id: 3,
    title: "FocusEye",
    img: focuseyeImg,
    info: "Website created for a photographer with offers, gallery in Mansory type and blog. It takes API from CMS Wordpress.",
    technology: ["Next.js, Wordpress"],
    githubLink: "",
    siteLink: "https://www.focuseye.pl",
    category: "strony www",
  },
  {
    id: 4,
    title: "Dorota Szydełkuje",
    img: dorotaSzydelkujeImg,
    info: "Website created for a person who does crocheting. There you can order yarn products such as toys, pouffes, blankets, etc.",
    technology: ["React"],
    githubLink: "https://github.com/Dzarek/dorotaszydelkuje2",
    siteLink: "https://www.dorotaszydelkuje.pl",
    category: "website",
  },

  {
    id: 44,
    title: "Jarosław Gotuje",
    img: jaroslawGotujeImg,
    info: "Website with recipes of the master chef - Jarosław",
    technology: ["Gatsby"],
    githubLink: "https://github.com/Dzarek/jaroslaw-gotuje",
    siteLink: "https://jaroslaw-gotuje.netlify.app/",
    category: "website",
  },
  {
    id: 5,
    title: "Buy List",
    img: buyListImg,
    info: "Application for saving your shopping list. It helps a lot in organizing purchases.",
    technology: ["React"],
    githubLink: "https://github.com/Dzarek/buyListReactMy",
    siteLink: "https://zakupy-lista.netlify.app/",
    category: "app",
  },
  {
    id: 6,
    title: "Cocktails-Chill",
    img: cocktailsChillImg,
    info: "Application for finding recipes for your favorite drinks. Extremely useful at parties.",
    technology: ["React"],
    githubLink: "https://github.com/Dzarek/CocktailsChill",
    siteLink: "https://cocktails-chill.netlify.app/",
    category: "app",
  },
  {
    id: 7,
    title: "Weather App",
    img: weatherImg,
    info: "The weather checker app for almost every city in the world.",
    technology: ["React"],
    githubLink: "https://github.com/Dzarek/dzarek-pogoda",
    siteLink: "https://dzarek-pogoda.netlify.app",
    category: "app",
  },
  {
    id: 8,
    title: "Quiz Series",
    img: serialQuizImg,
    info: "Something for fans of watching series! Show off your knowledge of the various hit series and score as many points as possible.",
    technology: ["JavaScript"],
    githubLink: "https://github.com/Dzarek/serialoweQuizowanie",
    siteLink: "https://dzarek.github.io/serialoweQuizowanie/",
    category: "game",
  },
  {
    id: 9,
    title: "Ninja Vs Zombie",
    img: ninjaVsZombieImg,
    info: "Kill all the zombies or they'll eat you ...",
    technology: ["JavaScript"],
    githubLink: "https://github.com/Dzarek/ninjaGame",
    siteLink: "https://dzarek.github.io/ninjaGame/",
    category: "game",
  },
  {
    id: 10,
    title: "Wisielec",
    img: wisielecImg,
    info: "Do you remember the times when you and your friends played various games on a piece of paper during boring lessons at school? If you want to kill boredom, I suggest you my version of the game WISIELEC.",
    technology: ["JavaScript"],
    githubLink: "https://github.com/Dzarek/wisielecGame",
    siteLink: "https://dzarek.github.io/wisielecGame/",
    category: "game",
  },
  {
    id: 11,
    title: "Memory",
    img: memoryImg,
    info: "Do you have a good memory? Check and play MEMORY while getting the best time!",
    technology: ["JavaScript"],
    githubLink: "https://github.com/Dzarek/memoryGame",
    siteLink: "https://dzarek.github.io/memoryGame/",
    category: "game",
  },
  {
    id: 12,
    title: "Movie Search",
    img: movieSearchImg,
    info: "If you don't know what watching this evening you can check this list!",
    technology: ["React"],
    githubLink: "https://github.com/Dzarek/movieSearch",
    siteLink: "https://dzarek-movie-search.netlify.app/",
    category: "app",
  },
];
