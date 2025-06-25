// utils/formatApproxTimes.js

export const formatApproxTimes = (timeArray) => {
  if (!Array.isArray(timeArray) || timeArray.length === 0) return "Open Now";

  // Step 1: Strip label prefix (e.g., "Breakfast:4am - 6am" → "4am - 6am")
  const ranges = timeArray.map((entry) => entry.split(":")[1]);

  // Step 2: Sort ranges by start time
  const timeToMinutes = (timeStr) => {
    const [time, meridian] = timeStr.split(/(am|pm)/i);
    const [hour, minute] = time.trim().split(/[: ]/).map(Number);
    const h =
      meridian.toLowerCase() === "pm" && hour !== 12 ? hour + 12 : hour % 12;
    return h * 60 + (minute || 0);
  };

  const parsedRanges = ranges.map((range) => {
    const [start, end] = range.split(" - ").map((t) => t.trim());
    return {
      start,
      end,
      startMin: timeToMinutes(start),
      endMin: timeToMinutes(end),
    };
  });

  parsedRanges.sort((a, b) => a.startMin - b.startMin);

  // Step 3: Merge contiguous ranges
  const merged = [parsedRanges[0]];
  for (let i = 1; i < parsedRanges.length; i++) {
    const prev = merged[merged.length - 1];
    const curr = parsedRanges[i];

    if (prev.endMin === curr.startMin) {
      prev.end = curr.end;
      prev.endMin = curr.endMin;
    } else {
      // Gap found — break and truncate output
      return `${merged[0].start} - ${merged[0].end}...`;
    }
  }

  return `${merged[0].start} - ${merged[merged.length - 1].end}`;
};
