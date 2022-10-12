import { Image, Box } from "@chakra-ui/react";

type SlideCardProps = {
  title: string;
  description: string;
  img?: any;
};

const SlideCard = ({
  title,
  description,
  img
}: SlideCardProps): JSX.Element => {
  return (
    <Box
      as="figure"
      bg="inherit"
      className="flex flex-col items-center justify-center align-middle"
    >
      <Image objectFit="cover" src={img} alt={title} sizes="md" />
      <figcaption className="text-2xl font-semibold text-primary text-center w-80 lg:text-3xl sm:text-2xl ms:text-2xl xxs:w-80 xxs:text-2xl xms:w-80">
        {title}
      </figcaption>
      <p className="text-xs font-thin text-primary text-center w-64 leading-2 mt-4 tracking-wider ml-10 xxs:text-sm xms:text-sm sm:text-sm sm:w-72">
        {description}
      </p>
    </Box>
  );
};

export default SlideCard;
