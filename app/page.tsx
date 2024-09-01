import { LoginButton } from '@/components/auth/login-button';
import { ModeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen gap-4">
      <ModeToggle />
      <LoginButton>
        <Button variant="default">Sign in</Button>
      </LoginButton>
    </main>
  );
}
