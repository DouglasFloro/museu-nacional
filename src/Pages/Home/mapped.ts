import Imagem1 from '../../assets/images/imagem1.jpg';
import Imagem2 from '../../assets/images/imagem2.jpg';
import Imagem3 from '../../assets/images/imagem3.jpg';
import Imagem4 from '../../assets/images/imagem4.jpg';

/**
 * Lista de esposições
 * @param id:number
 * @param name:string
 * @returns
 */
export const exhibitionList: { name: string; id: number }[] = [
  {
    id: 0,
    name: 'Os assustadoes insentos',
  },
  {
    id: 1,
    name: 'O gigante rinoceronte',
  },
  {
    id: 2,
    name: 'A maior pata de elefante',
  },
  {
    id: 3,
    name: 'Plantas do Brasil Central',
  },
  {
    id: 4,
    name: 'Arte com dinossauro',
  },
  {
    id: 5,
    name: 'Pirâmides',
  },
];

/**
 * Historia do museu
 * @param title:string
 * @param text:string
 * @returns
 */
export const historyMuseu: { title: string; text: string }[] = [
  {
    title: '200 Anos de História',
    text: 'O Museu Nacional, vinculado à Universidade Federal do Rio de Janeiro, é a mais antiga instituição científica do Brasil que, até setembro de 1980 , figurou como um dos maiores museus de história natural e de antropologia das Américas.Localiza-se no interior do parque da Quinta da Boa Vista, na cidade do Rio de Janeiro, estando instalado no Palácio de São Cristóvão.',
  },
];

/**
 * Formulario de visita
 * @param title: string;
 * @param legend: string;
 * @param date: string;
 * @param amount: string;
 * @param button: string;
 * @returns
 */
export const formVisit: {
  title: string;
  legend: string;
  date: string;
  amount: string;
  button: string;
}[] = [
  {
    title: 'Faça uma Visita',
    legend: 'Selecione uma Data',
    date: 'Data',
    amount: 'Qtds Pessoas',
    button: 'Verificar Disponibilidade',
  },
];

/**
 * Galeria de fotos
 * @param id:number
 * @param name:string
 */
export const galleryPhoto: { image: string; id: number }[] = [
  {
    id: 0,
    image: Imagem1,
  },
  {
    id: 1,
    image: Imagem2,
  },
  {
    id: 2,
    image: Imagem3,
  },
  {
    id: 3,
    image: Imagem4,
  },
];
