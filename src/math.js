import { Vector3 } from "three";

export const Vec3Up = new Vector3(0, 0, 1);

export function angle_sub(angle1, angle2) {
  const diff = ((angle2 - angle1 + Math.PI) % (Math.PI * 2)) - Math.PI;
  return diff < -Math.PI ? diff + Math.PI * 2 : diff;
}
