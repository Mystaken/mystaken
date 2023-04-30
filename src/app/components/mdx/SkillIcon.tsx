import { FC } from "react";

export type Skill = "react";
type Props = {
  skill: Skill;
};

export const SkillIcon: FC<Props> = (props) => {
  return <span>{`[ICON: ${props.skill}]`}</span>;
};
