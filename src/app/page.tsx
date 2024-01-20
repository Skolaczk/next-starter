import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';

const Home = () => {
  return (
    <div>
      <h1 className="animate-in fade-in zoom-in font-mono">Hello world</h1>
      <button>
        <Icons.github className="size-10" />
      </button>
      <ThemeToggle />
    </div>
  );
};

export default Home;
