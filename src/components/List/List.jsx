export const List = ({ showFiltered }) => (
  <ul>
    {showFiltered.map(contact => (
      <li>
        {contact.name} : {contact.number}
      </li>
    ))}
  </ul>
);
