import Image from "next/image";

const ShowSingleCard = ({ show }) => {
  return (
    <div className="relative">
      <section className="w-full h-screen bg-red-200 relative">
        <div className="">
          {show.image && (
            <Image
              src={show.image?.original}
              width={680}
              height={1000}
              alt={show.name}
              className="w-full h-screen object-cover"
            />
          )}
        </div>

        <div className="absolute bottom-20 left-20 z-20 text-4xl">
          <h2>{show.name}</h2>
          <p>Descrip | 12 | 2312</p>
        </div>
      </section>
      <section className="w-full h-screen">
        <p>Summary</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, non?
          Nam nostrum molestiae aperiam eos accusamus quidem iure nemo veritatis
          cupiditate molestias. Sit sequi itaque amet aliquam totam, accusantium
          odit.
        </p>
      </section>
      <div className="bg-gradient-to-b from-cyan-500/60 from-40%  via-green-500/50 via-30% to-red-500/40 to-30% absolute z-10 w-full h-full top-0">
        {" "}
      </div>
    </div>
  );
};

// Pendiente Filtrar por tipo de la serie actual. En un Swiper

export default ShowSingleCard;

{
  /* <h2>{show.name}</h2>
{show.image && (
  <Image 
    src={show.image?.original}
    width={680}
    height={1000}
    alt={show.name}
  />
)} */
}
