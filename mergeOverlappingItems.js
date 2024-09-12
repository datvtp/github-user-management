export default function mergeOverlappingItems(items) {
  items.sort((a, b) => a.startPx - b.startPx);

  const stack = [];

  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];

    if (
      stack.length === 0 ||
      stack[stack.length - 1].endPx < currentItem.startPx
    ) {
      stack.push(currentItem);
    } else {
      stack[stack.length - 1].endPx = Math.max(
        stack[stack.length - 1].endPx,
        currentItem.endPx
      );
    }
  }

  return stack;
}
