import img1 from 'app/assets/photos/img1.png';
import img2 from 'app/assets/photos/img2.png';
import img3 from 'app/assets/photos/img3.png';
import img4 from 'app/assets/photos/img4.png';
import img5 from 'app/assets/photos/img5.png';
import img6 from 'app/assets/photos/img6.png';

export interface IAuthors {
  name: string;
  text: string;
  photoUrl: string;
}

export const authors = [
  {
    name: 'Alice Johnson',
    text: "Greetings! I'm Alice Johnson, a political analyst with a keen interest in European affairs. My journey involves unraveling the complexities of European politics and history through meticulous research and analysis.",
    photoUrl: img1,
  },
  {
    name: 'David Smith',
    text: "Greetings, fellow thinkers! I'm David Smith, a dedicated scholar delving into the intricacies of European governance and diplomacy. My passion lies in deciphering the evolving landscape of European politics and its global impact.",
    photoUrl: img2,
  },
  {
    name: 'Sophie Lee',
    text: "Hello everyone! I'm Sophie Lee, an intrepid explorer of European socio-political dynamics. My quest is to shed light on the cultural tapestry and geopolitical nuances that shape the European continent.",
    photoUrl: img3,
  },
  {
    name: 'Michael Chen',
    text: "Hello, global citizens! I'm Michael Chen, a geopolitical enthusiast specializing in European affairs. Join me on a journey through the corridors of power in Europe as we navigate the currents of history and diplomacy.",
    photoUrl: img4,
  },
  {
    name: 'Emma Davis',
    text: "Greetings, seekers of knowledge! I'm Emma Davis, a devoted researcher exploring the interplay of identity and politics in Europe. Let's delve into the intricacies of European history and culture to unravel its contemporary significance.",
    photoUrl: img5,
  },
  {
    name: 'Daniel Brown',
    text: "Greetings to all truth-seekers! I'm Daniel Brown, a passionate advocate for understanding European politics and its implications for the global order. Join me in uncovering the untold stories and hidden truths of Europe's political landscape.",
    photoUrl: img6,
  },
  {
    name: 'Olivia Taylor',
    text: "Hello, fellow wanderers! I'm Olivia Taylor, an inquisitive mind exploring the depths of European politics and culture. Embark on a journey with me as we navigate the complexities of Europe's past, present, and future.",
    photoUrl: img4,
  },
];
