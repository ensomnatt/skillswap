type Props = {
  width: number;
  height: number;
}

export default function Black({ width, height }: Props) {
  return (
    <div
      className="bg-black"
      style={{ width: `${width}px`, height: `${height}px` }}
    ></div>
  );
}
