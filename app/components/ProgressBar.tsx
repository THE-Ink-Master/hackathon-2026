interface ProgressBarProps {
  progress: number;
  color?: string;
  height?: string;
}

export default function ProgressBar({
  progress,
  color = "bg-blue-600",
  height = "h-2",
}: ProgressBarProps) {
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <div
      className={`w-full overflow-hidden rounded-full bg-gray-100 ${height}`}
    >
      <div
        className={`${color} ${height} rounded-full transition-all duration-500`}
        style={{ width: `${safeProgress}%` }}
      />
    </div>
  );
}
