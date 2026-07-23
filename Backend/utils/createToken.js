import { signToken } from "./jwtHelper.js";

export default function createToken(id) {
  return signToken({ id });
}
