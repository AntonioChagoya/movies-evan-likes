const { css } = emotion;

const select = css`
  border-radius: 0.2rem;
  border: 1px solid #C9DFF0;
  padding: 0.4rem;
`;

const label = css`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const DecadeFilter = ({ existingDecades, selectedDecade, setDecade }) => {

  return html`
    <label className=${label}>
      <b>Filter by decade</b>
      <select 
        className=${select}
        value=${selectedDecade} 
        onChange=${(event)=> {
          setDecade((filters)=> ({
            ...filters,
            year: event.target.value
          }))
        }}
      >
        <option value="">All decades</option>
        ${Object.keys(existingDecades).map((decade)=> html`<option value=${decade}>${decade}</option>`)}
      </select>
    </label>
  `
}


