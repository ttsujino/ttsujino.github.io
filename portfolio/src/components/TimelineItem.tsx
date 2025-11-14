interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
}

export default function TimelineItem({ date, title, description }: TimelineItemProps) {
  return (
    <div className="space-y-3">
      <div className="flex gap-2 md:gap-4 text-sm">
        <span className="text-terminal-text/50 min-w-[60px] md:min-w-[100px]">{date}</span>
        <div className="flex-1 space-y-1">
          <h3 className="text-terminal-white">{title}</h3>
          <p className="text-terminal-text/60 text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

