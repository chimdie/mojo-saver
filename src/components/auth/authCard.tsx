import { Image, Box } from "@chakra-ui/react";

type AuthCardProps = {
  title: string;
  description: string;
  img?: any;
};

const AuthCard = ({ title, description, img }: AuthCardProps): JSX.Element => {
  return (
    <Box
      as="figure"
      bg="inherit"
      className="flex items-center justify-center align-middle ml-32 lgs:ml-80  smm:ml-60 xxs:ml-4 xms:ml-36"
    >
      <Image objectFit="cover" src={img} alt={title} />
      <figcaption className="text-2xl font-semibold text-primary text-center w-80 ml-2 mt-28 lgs:text-3xl lgs:w-96 sm:text-2xl sm:w-80 xms:text-2xl xxs:w-80 xxs:text-2xl xms:w-80">
        {title}
      </figcaption>
      <p className="text-xs font-thin text-primary text-center w-64 leading-2 mt-4 tracking-wider ml-10 xxs:text-sm xms:text-sm sm:text-sm sm:w-72">
        {description}
      </p>
    </Box>
  );
};

export default AuthCard;
