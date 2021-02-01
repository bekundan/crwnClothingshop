const INTIAL_STATE = {
  sections: [
    {
      title: "Hats",
      imageUrl:
        "https://images.pexels.com/photos/2245383/pexels-photo-2245383.jpeg?cs=srgb&dl=pexels-bruno-salvadori-2245383.jpg&fm=jpg",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "Jacket",
      imageUrl:
        "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?cs=srgb&dl=pexels-jack-winbow-1457983.jpg&fm=jpg",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "Sneaker",
      imageUrl:
        "https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?cs=srgb&dl=pexels-erik-mclean-5558237.jpg&fm=jpg",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "Men",
      imageUrl:
        "https://images.pexels.com/photos/2460488/pexels-photo-2460488.jpeg?cs=srgb&dl=pexels-vadim-birsan-2460488.jpg&fm=jpg",
      id: 5,
      linkUrl: "shop/mens",
      size: "large",
    },
    {
      title: "Women",
      imageUrl:
        "https://images.pexels.com/photos/1649648/pexels-photo-1649648.jpeg?cs=srgb&dl=pexels-davide-de-giovanni-1649648.jpg&fm=jpg",
      id: 6,
      size: "large",
      linkUrl: "shop/womens",
    },
    {
      title: "Glasses",
      imageUrl:
        "https://images.pexels.com/photos/4085856/pexels-photo-4085856.jpeg?cs=srgb&dl=pexels-uncoveredlens-4085856.jpg&fm=jpg",
      id: 7,
      linkUrl: "shop/glasses",
    },
  ],
};

const directoryReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
