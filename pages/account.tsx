// /pages/account.tsx
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0/client';

const Account = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error.message}</div>;

  return (
    <div>
      <h1>Mon Compte</h1>
      {user ? (
        <div>
          <p>Nom : {user.name}</p>
          <p>Email : {user.email}</p>
          <img src={user.picture} alt={user.name} />
        </div>
      ) : (
        <p>Aucun utilisateur connecté.</p>
      )}
    </div>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Account;
