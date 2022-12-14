import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
  const datos = [
    {
      titulo: "Mercedez Benz GTR",
      descripcion: "Bestia Naranja: el Mercedes-AMG GT R más potente",
      img: "https://elcomercio.pe/resizer/ekGoG_2dKEuUSIsezhz-THLoKDY=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/BEPBIZOM6VBPVOP5HEG625DQKE.jpg",
    },
    {
      titulo: "Porsche 911 Turbo s",
      descripcion: "Elegancia, estilo y potencia: 911 Turbo S",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLnJJ1E59y2QHusv7z4LWYw6ealKVYxeRXA&usqp=CAU",
    },
    {
      titulo: "RAM 1500 TRX",
      descripcion:
        "RAM 1500 TRX 2021 con motor Hellcat amenaza sin miedo a la F150 Raptor",
      img: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/ARNXJGJMKRDSXNEL34OWIFKMQI.jpg",
    },
  ];
  return (
    <div className="text-center bg-dark mh-100">
      <div className="container-fluid mh-100">
        <Navbar />
        <div className="container my-5 mh-100">
          <div className="my-5">
            <Jumbotron />
          </div>
          <div className="row  my-5 justify-content-center">
            {datos.map((objeto, posicion) => {
              return (
                <Card
                  className="m-4"
                  titulo={objeto.titulo}
                  descripcion={objeto.descripcion}
                  img={objeto.img}
                />
              );
            })}
          </div>
          <div className="row">
            <p className="fs-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              dolorum accusamus consequatur excepturi quas impedit. Molestiae ea
              minima dolores labore mollitia quod ipsum saepe culpa, nihil dolor
              maiores. Eum, modi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
