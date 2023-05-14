export default function Header({ title }: { title: string }): JSX.Element {
  return (
    <h1 className="heading-1 text-center">
      {title}
    </h1>
  )
}