export const Filter = ({ contactFilter }) => (
  <>
    <p>Find contacts by name</p>
    <input type="text" name="filter" onChange={contactFilter} />
  </>
);
