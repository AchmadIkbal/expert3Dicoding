import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
<style>
        
        img {
            width: 100%;
            border-radius: 15px;
            display: block;
        }
        
        a {
            color: inherit;
        }
        
        
        /* 
        
        Eye view
        
        https://i.postimg.cc/9MtT4GZY/view.png' border='0' alt='view */
        
        
        /*
        =========================
        Font Styling
        =========================
        */
        
        h1 {
            font: var(--var-heading);
            color: var(--var-lightest);
            padding: 1.2em 0;
        }
        
        h2 {
            font: var(--var-small-heading);
            color: var(--var-lightest);
            /* padding on .coin-base */
        }
        
        p {
            font: var(--var-para);
            color: var(--var-soft-blue);
        }
        
        
        
        /* 
        =====================
        Classes
        =====================
        */
        
        
        /* LAYOUT */
        
        .card-container {
          font-family: "Roboto", sans-serif;
            width: 100%;
            max-width: 500px;
            margin: 2em auto;
            background-color: var(--var-card-dark);
            border-radius: 15px;
            margin-bottom: 1rem;
            padding: 2rem;
            background-color: white;
        }
        
        div.flex-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        div.coin-base,
        .time-left,
        .card-attribute {
            display: flex;
            align-items: center;
            padding: 1em 0;
        }
        
        .card-attribute {
            padding-bottom: 1.5em;
            border-top: 2px solid var(--var-line-dark);
        }
        
        a.hero-image-container {
            position: relative;
            display: block;
        }
        
        
        /* Details */
        
        img.eye {
            position: absolute;
            width: 100%;
            max-width: 2em;
            top: 44%;
            left: 43%;
        }
        
        @media (min-width:400px) {
            img.eye {
                max-width: 3em;
            }
        }
        
        .hero-image-container::after {
            content: '';
            background-image: url("https://i.postimg.cc/9MtT4GZY/view.png");
            background-position: center;
            background-repeat: no-repeat;
            background-size: 5rem;
            background-color: hsla(178, 100%, 50%, 0.3);
            width: 8o0%;
            height: 800%;
            border-radius: 1rem;
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            z-index: 2;
            opacity: 0;
            transition: opacity 0.3s ease-out;
        }
        
        .hero-image-container:hover::after {
            opacity: 1;
        }
        
        .small-image {
            width: 1.2em;
            margin-right: .5em;
        }
        
        .small-avatar {
            width: 2em;
            border-radius: 200px;
            outline: 2px solid white;
            margin-right: 1.4em;
        }
        
        div.attribution {
            margin: 0 auto;
            width: 100%;
            font: var(--var-para);
            text-align: center;
            padding: 1.5em 0 4em 0;
            color: var(--var-line-dark);
        }
        
        .attribution a {
            color: var(--var-soft-blue);
        }
        
        @media (min-width:600px) {
            body {
                font-size: 18px;
            }
        }
        </style>

<div class="card-container">
        <a href="/" class="hero-image-container">
        
            <img crossorigin="anonymous" class="hero-image lazyload" src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'images/heros/hero-image_2.jpg'}" alt="${resto.name}" loading="lazy" />
        </a>
        <main class="main-content">
            <h1 >Name Cafe : <a class="title" href="./#/detail/${resto.id}" title="Link ke halaman detail makanan"><b class="title">${resto.name}</b></a></h1>
            <p>${resto.description}</p>
            <div class="flex-row">
                <div class="coin-base">
                    <h2><FontAwesomeIcon icon="fa-solid fa-star" size="sm" style={{color: "#ffdd00",}} />Rating : ${resto.rating}</h2>
                </div>
                 <div class="time-left">  
                     <p>Kota : ${resto.city}</p>
                </div>
            </div>
        </main>
    </div>
    </div>
`;
const createRestoDetailTemplate = (resto) => `
  <div class="detail">
  
    <h1 class="title" id="resto-title">
      ${resto.name}
    </h1>
    <img crossorigin="anonymous" class="lazyload" src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'images/heros/hero-image_2.jpg'}" alt="${resto.name}" loading="lazy"/>

    <div class="info">
      <h2>Information</h2>
      <ul>
        <li>
          <h3>Kota</h3>
          <p>${resto.city}</p>
        </li>
        <li>
          <h3>Alamat</h3>
          <p>${resto.address}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${resto.rating}</p>
        </li>
        <li>
          <h3>Foods Menu</h3>
          <span id="food">
          <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
        <li>
          <h3>Drinks Menu</h3>
          <span id="drink">
            <p>${resto.menus.drinks.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
      </ul>
    </div>

    <div class="overview">
      <h2>Overview</h2>
      <p>${resto.description}</p>
    </div>

  </div>
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this Restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this Restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
const createRestoReviewTemplate = (reviews) => `
  <div class="review">
    <p>
    <span class="name">${reviews.name}</span> &bull; <span class="date">${reviews.date}</span>
    </p>
    <p>${reviews.review}</p>
  </div>
`;
export {
    createRestoItemTemplate,
    createRestoDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    createRestoReviewTemplate,
};