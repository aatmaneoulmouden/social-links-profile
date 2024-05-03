interface Props {
  items: string[];
}

export default function UnorderedList({ items }: Props) {
  return (
    <ul className="social-links-list">
      {items.map((item, index) => (
        <li className="social-link-item transition ease-linear delay-150 bg-grey rounded-md font-semibold py-3 cursor-pointer hover:bg-green hover:text-dark-grey" key={index}>
          <a href="/" className="social-link">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
