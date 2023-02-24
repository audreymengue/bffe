import React from "react";
import {
  ComponentWithAs,
  HStack,
  Icon,
  IconProps,
  Image,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

const StatsCard = ({
  label,
  value,
  icon,
  image,
  showIcon = true,
}: {
  label: string;
  value: string;
  icon?: ComponentWithAs<"svg", IconProps> | any;
  image?: string;
  showIcon?: boolean;
}) => {
  return (
    <Stat borderWidth={1} borderColor="text" rounded="lg" p={3} bg="white">
      <HStack align="start" spacing={{ md: 2, "4xl": 6 }}>
        <HStack bg="#F4EBFF" justify="center" h={10} w={10} rounded="lg">
          {showIcon ? (
            <Icon as={icon} boxSize={5} color="#140E25" />
          ) : (
            <Image src={image} alt="image" h={5} w={5} rounded="full" />
          )}
        </HStack>
        <Stack spacing={-1}>
          <StatLabel fontSize="xs">{label}</StatLabel>
          <StatNumber fontSize="sm">{value}</StatNumber>
        </Stack>
      </HStack>
    </Stat>
  );
};

export default StatsCard;
