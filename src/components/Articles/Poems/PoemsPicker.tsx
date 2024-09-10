import { Dispatch, SetStateAction, useState } from "react";
import PoemBtn from "./btn";
import { poemType } from "./PoemsContainer";

type PoemsPickerprops = {
  setPoems: Dispatch<SetStateAction<poemType | null>>;
  poemIni: poemType | null;
};

const PoemsPicker = ({ setPoems, poemIni }: PoemsPickerprops) => {
  const [active, setActive] = useState<string | undefined>("");

  const poems = [
    {
      title: "Aquarela",
      poem: {
        firstParagraph: [
          "Sempre que penso nela",
          "Lembro-me da aquarela",
          "Com todas aquelas cores",
          "Me faz sentir amores"
        ],
        secondParagraph: [
          "Começo pelo amarelo",
          "A cor do radiante sol,",
          "Aquele sorriso singelo",
          "Me lembra de um girassol"
        ],
        thirdParagraph: [
          "Agora vamos para o azu'",
          "Lembra-me nosso céu",
          "Com aqueles lindos olhos",
          "Como a chamo, querida Helu"
        ],
        fourthParagraph: [
          "Para finazar, temos o rosa",
          "Cor favorita de nossa tulipa",
          "Me lembra minha amorosa",
          "Vagando por ai feito pipa"
        ]
      }
    },
    {
      title: "Feridas",
      poem: {
        firstParagraph: [
          "A minha alma cheia de rancor",
          "Tenho sentido muito amargor",
          "Da simples vida tão maldosa",
          "Mais cansativo que texto em prosa"
        ],
        secondParagraph: [
          "Quando estou nesses dias",
          "Penso em tu, minha querida",
          "Que me traz calma e vida",
          "Quando estou com tais feridas"
        ],
        thirdParagraph: [
          "És de uma beleza tão inigualável",
          "Oh meu amor, o que faço sem tu",
          "Com seu sorriso tão invejável"
        ],
        fourthParagraph: [
          "Mais doq os números podem contar",
          "E só n paro de escrever",
          "Pois quero chegar a descrever",
          "O qnt eu te amo, esse simples olhar"
        ]
      }
    },
    {
      title: "Querido Sol",
      poem: {
        firstParagraph: [
          "O brilho dessas estrelas",
          "Me lembram meu querido sol",
          "Pintando naquelas telas",
          "A luz de nosso farol"
        ],
        secondParagraph: [
          "Um fulgor tão radiante",
          "Com um calor escaldante",
          "Se refere ao nosso amor",
          "Desabrochando-se como uma flor"
        ],
        thirdParagraph: [
          "Em pouco tempo, minha querida",
          "Foi aquela que me fez ver",
          "A beleza dessa vida",
          "E o porquê de viver"
        ],
        fourthParagraph: [
          "Escreva essa canção",
          "Para minha linda Helo",
          "Que com tanta emoção",
          "Espero que esteja belo"
        ]
      }
    },
    {
      title: "Relembrando",
      poem: {
        firstParagraph: [
          "No meio da madrugada fria,",
          "Olho para o anoitecer brilhante",
          "Pensando em você, minha radiante",
          "Enquanto no horizonte, eu ria"
        ],
        secondParagraph: [
          "Relembrando nossos momentos,",
          "Aqueles que não quero esquecer",
          "Passamos dias e noites juntos",
          "Todos revisitados até o amanhecer"
        ],
        thirdParagraph: [
          "Nossas vidas estão juntas",
          "Nossos destinos alinhados",
          "Nossas almas entrelaçadas"
        ],
        fourthParagraph: [
          "Meu ser quer somente você",
          "Isso sei que até tu mesma ve",
          "Por isso logo estarei perto do 'cê"
        ]
      }
    },
    {
      title: "Divina Noite",
      poem: {
        firstParagraph: [
          "Perante a noite mais bela",
          "Me pego pensando em ti",
          "Minha mais amada cinderela",
          "Seu sorriso não me deixa dormi"
        ],
        secondParagraph: [
          "Deito na minha cama",
          "Mas nada me chama",
          "Somente a aquela noite",
          "Que pra mim foi um afoite"
        ],
        thirdParagraph: [
          "Lembro-me de seus olhos",
          "Do gosto da sua boca",
          "Querendo continuar",
          "Com a Nossa linda dança"
        ],
        fourthParagraph: [
          "O que dou por aquele momento",
          "Penso e repenso sem ter um jeito",
          "Mas me lembro que tenho ela",
          "Para ter mais uma noite bela"
        ]
      }
    }
  ];

  const handleClick = (poem: typeof poemIni) => {
    setPoems(poem);
    setActive(poem?.poem.firstParagraph[0]);
  };

  return (
    <>
      <p className="mx-auto mt-16 text-2xl leading-none text-yellow-50">
        Selecione um poema:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2 px-12">
        {poems.map((poem, index) => {
          const btnActive = active === poem.poem.firstParagraph[0];
          return (
            <PoemBtn
              title={poem.title}
              key={index}
              active={btnActive}
              handleClick={handleClick}
              poem={poem}
            />
          );
        })}
      </div>
    </>
  );
};

export default PoemsPicker;
