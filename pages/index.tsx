// /pages/index.tsx
import { useUser } from '@auth0/nextjs-auth0/client';

const Home = () => {
  const { user, isLoading } = useUser();

  if (isLoading) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Bienvenue sur ClashMind</h1>
      {user ? (
        <div>
          <p>Bienvenue, {user.name}</p>
          <a href="/account">Mon Compte</a> | <a href="/logout">Se déconnecter</a>
        </div>
      ) : (
        <div>
          <p>Connecte-toi pour commencer !</p>
          <a href="/login">Se connecter</a>
        </div>
      )}
    </div>
  );
};

export default Home;
