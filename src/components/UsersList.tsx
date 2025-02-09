export function UsersList({
  users,
}: {
  users: { id: string; name: string }[];
}) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} data-id={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}
