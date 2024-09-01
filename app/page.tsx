import { ModeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <h1>Hell</h1>
      <Button variant="default">Click me</Button>
      <ModeToggle />
    </>
  );
}
