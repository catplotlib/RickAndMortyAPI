import React from "react";
import Card from "../components/Card";
const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex w-full flex-col items-center mt-16 min-h-screen">
        <Card
          name={
            "Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block, Adult Swim. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures. Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of Rick and Morty's family. The series originated from an animated short parody film of Back to the Future, created by Roiland for Channel 101, a short film festival co-founded by Harmon. The series has been acclaimed by critics for its originality, creativity and humor."
          }
        />
      </div>
    </div>
  );
};

export default About;
