import { Event } from '../components';
import React from 'react';

const events = [
  {
    name: 'US Open',
    description:
      'The US Open Tennis Championships is a hardcourt tennis tournament held annually in Queens, New York. Since 1987, the US Open has been chronologically the fourth and final Grand Slam tournament of the year. The other three, in chronological order, are the Australian Open, French Open and Wimbledon.',
    date: ' Feb 5, 2023',
    time: '10:00 AM',
    location:
      'USTA Billie Jean King National Tennis Center, Flushing Meadow - Corona Park, Flushing, NY 11368, United States',
    image: 'image1',
    inviteStatus: 'YES',
  },
  {
    name: 'Wimbledon',
    description:
      'The Wimbledon Championships, commonly known simply as Wimbledon, is the oldest tennis tournament in the world and is widely regarded as the most prestigious.',
    date: 'July 20, 2023',
    time: '10:00 AM',
    location: '	Plough Lane, Wimbledon',
    image: 'image6',
    inviteStatus: 'NO',
  },
  {
    name: 'Roland Garros',
    description:
      'The French Open, also known as Roland-Garros, is a major tennis tournament held over two weeks at the Stade Roland Garros in Paris, France, beginning in late May each year. The tournament and venue are named after the French aviator Roland Garros.',
    date: ' May 17, 2023',
    time: '12:00 AM',
    location: '16th arrondissement, Paris,',
    image: 'image4',
    inviteStatus: 'MAYBE',
  },
  {
    name: 'Australia Open',
    description:
      'The Australian Open is a tennis tournament held annually at Melbourne Park in Melbourne, Australia. The tournament is the first of the four Grand Slam tennis events held each year, preceding the French Open, Wimbledon, and the US Open. The Australian Open starts in the middle of January and continues for two weeks coinciding with the Australia Day holiday.',
    date: 'Jan 30, 2023',
    time: '09:00 PM',
    location:
      'USTA Billie Jean King National Tennis Center, Flushing Meadow - Corona Park, Flushing, NY 11368, United States',
    image: 'image2',
    inviteStatus: 'MAYBE',
  },
  {
    name: 'Canadian Open',
    description:
      'The US Open Tennis Championships is a hardcourt tennis tournament held annually in Queens, New York. Since 1987, the US Open has been chronologically the fourth and final Grand Slam tournament of the year. The other three, in chronological order, are the Australian Open, French Open and Wimbledon.',
    date: ' Feb 5, 2023',
    time: '10:00 AM',
    location:
      'USTA Billie Jean King National Tennis Center, Flushing Meadow - Corona Park, Flushing, NY 11368, United States',
    image: 'image3',
  },
  {
    name: 'US Open',
    description:
      'The US Open Tennis Championships is a hardcourt tennis tournament held annually in Queens, New York. Since 1987, the US Open has been chronologically the fourth and final Grand Slam tournament of the year. The other three, in chronological order, are the Australian Open, French Open and Wimbledon.',
    date: ' Feb 5, 2023',
    time: '10:00 AM',
    location:
      'USTA Billie Jean King National Tennis Center, Flushing Meadow - Corona Park, Flushing, NY 11368, United States',
    image: 'image5',
  },
];

export const Invites = () => {
  return (
    <div className="align-items-center">
      {events.map((event, index) => (
        <div key={index} className=" p-5 flex justify-center">
          <Event event={event} isCardInvite={true} />
        </div>
      ))}
    </div>
  );
};
