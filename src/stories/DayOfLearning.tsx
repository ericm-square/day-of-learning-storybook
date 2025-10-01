import "./day-of-learning.css";

export interface DayOfLearningProps {
  /** Conference title */
  title?: string;
  /** Speaker name */
  speaker?: string;
  /** Session topic */
  topic?: string;
  /** Number of attendees */
  attendees?: number;
  /** Whether the session is live */
  isLive?: boolean;
  /** Theme variant */
  variant?: "primary" | "secondary";
  /** Click handler */
  onClick?: () => void;
}

/** Simple conference session card component */
export const DayOfLearning = ({
  title = "Day of Learning",
  speaker = "Anonymous",
  topic = "Introduction to Storybook",
  attendees = 0,
  isLive = false,
  variant = "primary",
  onClick,
}: DayOfLearningProps) => {
  const className = [
    "day-of-learning",
    `day-of-learning--${variant}`,
    isLive ? "day-of-learning--live" : ""
  ].filter(Boolean).join(" ");

  return (
    <div className={className} onClick={onClick}>
      <div className="day-of-learning__header">
        <h2 className="day-of-learning__title">{title}</h2>
        {isLive && <span className="day-of-learning__live-badge">🔴 LIVE</span>}
      </div>
      
      <div className="day-of-learning__content">
        <h3 className="day-of-learning__topic">{topic}</h3>
        <p className="day-of-learning__speaker">with {speaker}</p>
        
        {attendees > 0 && (
          <div className="day-of-learning__attendees">
            {attendees} attendees
          </div>
        )}
      </div>
    </div>
  );
};