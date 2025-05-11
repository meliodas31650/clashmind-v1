// /pages/login.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    // Si l'utilisateur est déjà connecté, on le redirige vers la page d'accueil
    if (typeof window !== 'undefined' && window.location.search.includes('code=')) {
      router.push('/');
    }
  }, [router]);

  return (
    <div>
      <h1>Page de Connexion</h1>
      <a href="/api/auth/login">Se connecter avec Auth0</a>
    </div>
  );
};

export default Login;
