
type props = {
  item: any;
}
export const FooterCol = ({ item }: props) => {

  return (
    <a
      href={item.href}
      className={`hover:underline text-xs md:text-sm ${item.highlight ? "text-indigo-600 font-medium" : ""}`}
    >
      {item.name}
    </a>
  )
}