const CircularChart: React.FC<{ percentage: number; color: string }> = ({
    percentage,
    color,
  }) => {
  
    const viewBoxSize = 70;
    const radius = viewBoxSize / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${(percentage / 100) * circumference}, ${circumference}`;
 
    return (
      <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} className={`circular-chart ${color}`}>
      <circle
        className="circle-bg"
        cx={radius}
        cy={radius}
        r={radius - 2}
      />
      <circle
        className="circle"
        cx={radius}
        cy={radius}
        r={radius - 2}
        strokeDasharray={strokeDasharray}
      />
      <text x="36" y="40" className="percentage">
        {percentage}%
      </text>
    </svg>
    );
  };
  
  
export default CircularChart;