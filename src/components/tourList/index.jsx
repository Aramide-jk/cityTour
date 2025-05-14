import React, { useState } from "react";
import Tour from "../tour";
import { tourData } from "../../TourData";

export default function TourList() {
  const [tours, setTours] = useState(tourData);

  const removeTour = (id) => {
    const sortedTours = tours.filter((tour) => tour.id !== id);

    setTours(sortedTours);
  };

  return (
    <section className="w-[70vw] my-0 mx-auto py-8 px-0 grid md:grid-cols-3 lg:grid-cols-4 md:w-[85vw] gap-4">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </section>
  );
}
