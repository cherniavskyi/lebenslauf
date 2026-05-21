import style from "./skill.module.scss";

type SkillProps = {
  label: string;
  percent: number;
  delay?: number;
  isActive?: boolean;
};

const Skill = ({ label, percent, delay, isActive }: SkillProps) => {
  const radius: number = 45;
  const circumference: number = 2 * Math.PI * radius;

  const clampedPercent = Math.min(100, Math.max(0, percent));

  return (
    <div className={style.skill}>
      <svg className={style.skill__circle} width="120" height="120">
        <circle className={style.skill__circle_bg} cx="60" cy="60" r={radius} />

        <circle
          className={style.skill__circle_progress}
          cx="60"
          cy="60"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: isActive
              ? circumference - (clampedPercent / 100) * circumference
              : circumference,
            transitionDelay: `${delay}s`,
          }}
        />
      </svg>

      <div className={style.skill__text}>
        <div className={style.skill__percent}>{clampedPercent}%</div>
        <div className={style.skill__label}>{label}</div>
      </div>
    </div>
  );
}

export default Skill;
