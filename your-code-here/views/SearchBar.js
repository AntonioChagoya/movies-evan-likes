
const { css } = emotion;

const textInput = css`
  border-radius: 0.2rem;
  border: 1px solid #C9DFF0;

  padding: 0.4rem;
`;

const label = css`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const SearchBar = ({ searchTerm, setSearchTerm }) => {

  return html`
    <label className=${label}>
      <b>Search by title</b>
      <input 
        type="text"
        className=${textInput}
        value=${searchTerm} 
        placeholder="Search..." 
        onChange=${(event) =>{
          setSearchTerm((filters)=> ({
            ...filters,
            title: event.target.value
          }))
        }} 
      />
    </label>
  `
}


