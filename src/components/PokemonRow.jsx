export const PokemonRow = ({ id, name, pic }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <img
          alt={`${name} image`}
          src={pic}
          style={{
            height: 75,
          }}
        />
      </td>
    </tr>
  );
};
