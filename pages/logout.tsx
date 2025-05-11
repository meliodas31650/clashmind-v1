// /pages/logout.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/api/auth/logout');
  }, [router]);

  return <div>Déconnexion en cours...</div>;
};

export default Logout;
