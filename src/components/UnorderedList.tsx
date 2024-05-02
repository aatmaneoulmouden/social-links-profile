interface Props {
  items: string[];
}

export default function UnorderedList({ items }: Props) {
  return (
    <ul className="social-links-list">
      {items.map((item, index) => (
        <li className="social-link-item" key={index}>
          <a href="/" className="social-link">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
