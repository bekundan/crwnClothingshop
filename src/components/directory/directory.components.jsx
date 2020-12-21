import React from "react";
import MenuItem from "../../pages/menuitems/menu-item.components";
import "./directory.style.scss";

///we need to store menu items in

class Directory extends React.Component {
  constructor() {
    super();
    //set the state value
    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl:
            "https://images.pexels.com/photos/2245383/pexels-photo-2245383.jpeg?cs=srgb&dl=pexels-bruno-salvadori-2245383.jpg&fm=jpg",
          id: 1,
        },
        {
          title: "Jacket",
          imageUrl:
            "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?cs=srgb&dl=pexels-jack-winbow-1457983.jpg&fm=jpg",
          id: 2,
        },
        {
          title: "Sneaker",
          imageUrl:
            "https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?cs=srgb&dl=pexels-erik-mclean-5558237.jpg&fm=jpg",
          id: 3,
        },
        {
          title: "Cloths",
          imageUrl:
            "https://images.pexels.com/photos/2471298/pexels-photo-2471298.jpeg?cs=srgb&dl=pexels-gui-spinardi-2471298.jpg&fm=jpg",
          id: 4,
        },
        {
          title: "Men",
          imageUrl:
            "https://images.pexels.com/photos/2460488/pexels-photo-2460488.jpeg?cs=srgb&dl=pexels-vadim-birsan-2460488.jpg&fm=jpg",
          id: 5,
          size: "large",
        },
        {
          title: "Women",
          imageUrl:
            "https://images.pexels.com/photos/1649648/pexels-photo-1649648.jpeg?cs=srgb&dl=pexels-davide-de-giovanni-1649648.jpg&fm=jpg",
          id: 6,
          size: "large",
        },
        {
          title: "Glasses",
          imageUrl:
            "https://images.pexels.com/photos/4085856/pexels-photo-4085856.jpeg?cs=srgb&dl=pexels-uncoveredlens-4085856.jpg&fm=jpg",
          id: 7,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
