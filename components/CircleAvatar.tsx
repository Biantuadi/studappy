import { Image, ImageSourcePropType } from "react-native";

type CircleAvatarProps = {
  image: ImageSourcePropType;
  size?: number;
};

export default function CircleAvatar({ image, size = 50 }: CircleAvatarProps) {
  return (
    <Image
      source={image}
      style={{ width: size, height: size, borderRadius: size }}
    />
  );
}
