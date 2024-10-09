import bullsEye from '../assets/bull-eye.jpg';
import thumbsUp from '../assets/thumbs-up.png';
import meh from '../assets/meh.jpg';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
    rating: number;
}

const Emoji = ({rating}: Props) => {

    const emojiMap : { [key: number] : ImageProps } = {
        3: {src: meh, alt: 'meh', boxSize: '25px'},
        4: {src: thumbsUp, alt: 'recommended', boxSize: '25px'},
        5: {src: bullsEye, alt: 'exceptional', boxSize: '35px'},
    }

  return (
    <Image {...emojiMap[rating]} marginTop={1}/>
  )
}

export default Emoji