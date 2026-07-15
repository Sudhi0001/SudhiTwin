import avatarGreeting from "../../assets/avatar-greeting.png";
import avatarNeutral from "../../assets/avatar-neutral.png";
import avatarThinking from "../../assets/avatar-thinking.png";
import avatarTalking from "../../assets/avatar-talking.png";
import avatarListening from "../../assets/avatar-listning.png";
import avatarHappy from "../../assets/avatar-happy.png";
import avatarConfused from "../../assets/avatar-confused.png";

import type { AvatarState } from "../../store/avatarStore";

// allow extra/missing keys compared to AvatarState definition
// use a plain string-keyed record to avoid errors when AvatarState doesn't list all keys
const avatars: Record<string, string> = {
  greeting: avatarGreeting,
  neutral: avatarNeutral,
  thinking: avatarThinking,
  talking: avatarTalking,
  listening: avatarListening,
  happy: avatarHappy,
  confused: avatarConfused,
};

export function getAvatar(state: AvatarState): string {
  return avatars[state] ?? avatarNeutral;
}